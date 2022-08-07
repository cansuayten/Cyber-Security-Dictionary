package cbddo.intern.cbddoproject.entity;

import cbddo.intern.cbddoproject.common.BaseEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
@Entity
@Getter
@Setter
@NoArgsConstructor
public class Word extends BaseEntity {

    private String wordEng;

    private String wordTurkish;

    private String abbreviationEng;

    private String abbreviationTurkish;

    private String explanationEnglish;
    private String explanationTurkish;


    public Word(String wordEng, String wordTurkish, String abbreviationEng, String abbreviationTurkish,String explanationEnglish, String explanationTurkish) {
        super();
        this.wordEng = wordEng;
        this.wordTurkish = wordTurkish;
        this.abbreviationEng = abbreviationEng;
        this.abbreviationTurkish = abbreviationTurkish;
        this.explanationTurkish = explanationTurkish;
        this.explanationEnglish =explanationEnglish;
    }

    public void updatedWord(Word updatedWord) {
        this.wordEng = updatedWord.wordEng;
        this.wordTurkish = updatedWord.wordTurkish;
        this.abbreviationEng = updatedWord.abbreviationEng;
        this.abbreviationTurkish = updatedWord.abbreviationTurkish;
        this.explanationTurkish = updatedWord.explanationTurkish;
        this.explanationEnglish =updatedWord.explanationEnglish;
    }
}
