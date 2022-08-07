package cbddo.intern.cbddoproject.service;

import cbddo.intern.cbddoproject.common.MessageResponse;
import cbddo.intern.cbddoproject.common.MessageType;
import cbddo.intern.cbddoproject.entity.Word;
import cbddo.intern.cbddoproject.repository.WordRepository;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class WordService {
    private static final String WORD_ADDED_MESSAGE = "%s eklendi!";
    private static final String WORD_ALREADY_EXISTS_MESSAGE = "%s mevcut!";
    private static final String WORD_DOESNT_EXISTS_MESSAGE = "%s bulunmamaktadır!";
    private static final String WORD_UPDATED_MESSAGE = "%s başarıyla güncellendi!";
    private static final String WORD_DELETED_MESSAGE = "%s başarıyla silinmiştir!";
    private final WordRepository wordRepository;
    public WordService(WordRepository wordRepository) {
        this.wordRepository = wordRepository;
    }

    public MessageResponse addWord(Word word) {
        if(wordRepository.existsByWordEng(word.getWordEng())) {
            return new MessageResponse(MessageType.ERROR,wordAlreadyExistsMessage(word.getWordEng()));
        }
        else
        {
            wordRepository.save(word);
            return new MessageResponse(MessageType.SUCCESS, wordAddedMessage(word.getWordEng()));
        }
    }
    private String wordAddedMessage(String word) {
        return WORD_ADDED_MESSAGE.formatted(word);
    }
    private String wordAlreadyExistsMessage(String word) {
        return WORD_ALREADY_EXISTS_MESSAGE.formatted(word);
    }

    public MessageResponse updateWord(Long id , Word updatedWord) {
        Word wordFromDB = wordRepository.findById(id)
                .orElseThrow(()-> new EntityNotFoundException(WORD_DOESNT_EXISTS_MESSAGE.formatted(updatedWord.getWordEng())));
        wordFromDB.updatedWord(updatedWord);
        wordRepository.save(wordFromDB);
        return new MessageResponse(MessageType.SUCCESS, WORD_UPDATED_MESSAGE.formatted(id));
    }

    public MessageResponse deleteWord(Long id) {
        if(!wordRepository.existsById(id)) {
            return new MessageResponse(MessageType.ERROR,WORD_DOESNT_EXISTS_MESSAGE.formatted(id));
        }
        wordRepository.delete(wordRepository.findById(id).get());
        return new MessageResponse(MessageType.SUCCESS, WORD_DELETED_MESSAGE.formatted(id));
    }

    public List<Word> getAllWords() {

        return wordRepository.findAll();
    }

    public Word getWord(String word) {
        if(wordRepository.existsByWordEng(word)==false) {
            return wordRepository.findByWordTurkish(word).orElseThrow(()-> new EntityNotFoundException(WORD_DOESNT_EXISTS_MESSAGE.formatted(word)));
        }
        else {
            return wordRepository.findByWordEng(word).orElseThrow(()-> new EntityNotFoundException(WORD_DOESNT_EXISTS_MESSAGE.formatted(word)));
        }
    }
}
