package cbddo.intern.cbddoproject.repository;

import cbddo.intern.cbddoproject.entity.AdminUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository extends JpaRepository<AdminUser,Long> {
    AdminUser findByUsername(String username);
}
