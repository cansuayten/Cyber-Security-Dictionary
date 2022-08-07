package cbddo.intern.cbddoproject.entity;

import cbddo.intern.cbddoproject.common.BaseEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Setter
public class AdminUser extends BaseEntity {

    @NotEmpty
    @Size(min=4, max=255)
    private String username;

    @NotEmpty
    @Size(min=8, max=255)
    private String password;
}
