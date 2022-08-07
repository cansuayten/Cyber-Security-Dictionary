package cbddo.intern.cbddoproject.controller;

import cbddo.intern.cbddoproject.common.MessageResponse;
import cbddo.intern.cbddoproject.entity.Word;
import cbddo.intern.cbddoproject.request.UpdateWordRequest;
import cbddo.intern.cbddoproject.service.WordService;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import cbddo.intern.cbddoproject.request.AddWordRequest;

import javax.validation.Valid;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/words")
@Validated
public class WordController {
    private final WordService wordService;

    public WordController(WordService wordService) {
        this.wordService = wordService;
    }

    @PostMapping
    public MessageResponse addWord(@Valid @RequestBody final AddWordRequest request) {
        return wordService.addWord(request.toWord());
    }

    @PutMapping("/{id}")
    public MessageResponse updateWord(@PathVariable Long id , @RequestBody @Valid UpdateWordRequest request) {
        return wordService.updateWord(id,request.toWord());
    }

    @DeleteMapping("/{id}")
    public MessageResponse deleteWord(@PathVariable Long id) {
        return wordService.deleteWord(id);
    }

    @GetMapping
    public List<Word> getAllWords() {
        return wordService.getAllWords();
    }


    @GetMapping("/{word}")
    public Word searchAWord(@PathVariable String word) {
        return wordService.getWord(word);
    }
}
