package cbddo.intern.cbddoproject.common;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;


@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class MessageResponse implements Serializable {
    private MessageType messageType;
    private String message;
}
