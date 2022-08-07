package cbddo.intern.cbddoproject.request;

import cbddo.intern.cbddoproject.entity.Word;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@RequiredArgsConstructor
@Getter
@ToString
public class UpdateWordRequest {
    @Size(max = 255, message = "Kelime 255 karakteri geçemez!")
    @NotEmpty(message = "İngilizce kelime boş değer olamaz!")
    private String wordEng;

    @Size(max = 255, message = "Kelime 255 karakteri geçemez!")
    @NotEmpty(message = "Türkçe kelime boş değer olamaz!")
    private String wordTurkish;

    @Size(max = 255, message = "Kelime 255 karakteri geçemez!")
    private String abbreviationEng;

    @Size(max = 255, message = "Kelime 255 karakteri geçemez!")
    private String abbreviationTurkish;

    private String explanationEnglish;
    private String explanationTurkish;
    public Word toWord() { return new Word(wordEng,wordTurkish,abbreviationEng,abbreviationTurkish,explanationTurkish,explanationEnglish);}
}
