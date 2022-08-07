package cbddo.intern.cbddoproject.repository;

import cbddo.intern.cbddoproject.entity.Word;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface WordRepository extends JpaRepository<Word, Long> {
    boolean existsById(Long id);
    boolean existsByWordEng(String word);

    //kelime arama için
    boolean existsByAbbreviationEng(String word);
    boolean existsByAbbreviationTurkish(String word);
    boolean existsByWordTurkish(String word);
    Optional<Word> findById(Long id);

    //kelime arama için
    Optional<Word>findByWordEng(String word);
    Optional<Word>findByAbbreviationEng(String word);
    Optional<Word>findByAbbreviationTurkish(String word);
    Optional<Word>findByWordTurkish(String word);

    @Override
    List<Word> findAll();
}
