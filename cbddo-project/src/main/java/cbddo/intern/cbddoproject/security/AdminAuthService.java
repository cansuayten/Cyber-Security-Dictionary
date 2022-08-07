package cbddo.intern.cbddoproject.security;

import cbddo.intern.cbddoproject.entity.AdminUser;
import cbddo.intern.cbddoproject.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class AdminAuthService implements UserDetailsService {
    @Autowired
    AdminRepository adminRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        AdminUser inDB = adminRepository.findByUsername(username);
        if (inDB == null)
            throw new UsernameNotFoundException("User not found");
        return new AdminPrincipal(inDB);
    }
}