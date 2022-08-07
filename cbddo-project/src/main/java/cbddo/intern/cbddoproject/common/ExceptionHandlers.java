package cbddo.intern.cbddoproject.common;

import org.hibernate.exception.ConstraintViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class ExceptionHandlers {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(code = HttpStatus.NON_AUTHORITATIVE_INFORMATION)// 3XX 4XX 5XX Codes (bad request) cant have response body but 203 can
    @ResponseBody
    public MessageResponse validationError(MethodArgumentNotValidException ex) {
        String errMessage = "";
        for(var error : ex.getFieldErrors())
            errMessage += error.getDefaultMessage() + "\n";
        errMessage = errMessage.trim();
        return new MessageResponse(MessageType.ERROR,errMessage);
    }
    @ExceptionHandler(ConstraintViolationException.class)
    @ResponseStatus(code = HttpStatus.NON_AUTHORITATIVE_INFORMATION)
    @ResponseBody
    public MessageResponse sqlError(ConstraintViolationException ex) {
        if(ex.getErrorCode() == 23505)
            return new MessageResponse(MessageType.ERROR, "Aynı %s değerine sahip bir kayıt var.".formatted(ex.getConstraintName()));
        else
            return new MessageResponse(MessageType.ERROR, ex.getLocalizedMessage());
    }


}
