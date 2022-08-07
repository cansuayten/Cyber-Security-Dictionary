package cbddo.intern.cbddoproject.service;

import cbddo.intern.cbddoproject.entity.AdminUser;
import cbddo.intern.cbddoproject.repository.AdminRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AdminService {
    AdminRepository adminRepository;

    private PasswordEncoder passwordEncoder;

    public AdminService(AdminRepository adminRepository, PasswordEncoder passwordEncoder) {
        super();
        this.adminRepository = adminRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public void save(AdminUser admin) {
        String encryptedPassword = this.passwordEncoder.encode(admin.getPassword());
        admin.setPassword(encryptedPassword);
        adminRepository.save(admin);
    }
}
