package cbddo.intern.cbddoproject.security;

import cbddo.intern.cbddoproject.entity.AdminUser;
import cbddo.intern.cbddoproject.repository.AdminRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

@RestController
public class AuthController {
    private static final Logger log = LoggerFactory.getLogger(AuthController.class);

    @Autowired
    AdminRepository userRepository;

    PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @PostMapping("/auth")
    ResponseEntity<?> handleAuthentication(@RequestHeader(name="Authorization", required = false) String authorization) {
        if(authorization == null) {
            ApiError error = new ApiError(401,"Unauthorized Request","/auth");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(error);
        }
        log.info(authorization);
        String base64encoded = authorization.split("Basic")[1]; //dXNlcjE6cGFzc3dvcmQ= eşittir sorun


        StringBuilder sb = new StringBuilder();
        for(int i=1;i<base64encoded.length();i++) {
            if(base64encoded.charAt(i)!= '=') { //birden çok eşittir olduğu durum var
                sb.append(base64encoded.charAt(i));

            }
        }
        base64encoded=sb.toString();

        String decoded = new String(Base64.getDecoder().decode(base64encoded), StandardCharsets.UTF_8); //user1:password
        String[] parts= decoded.split(":");
        String username = parts[0];
        String password = parts[1];

        AdminUser inDB = userRepository.findByUsername(username);
        if(inDB == null) {
            ApiError error = new ApiError(401,"Unauthorized Request","/auth");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(error);
        }
        String hashedPassword = inDB.getPassword();
        if(!passwordEncoder.matches(password,hashedPassword)) {
            ApiError error = new ApiError(401,"Unauthorized Request","/auth");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(error);
        }

        Map<String,String> responseBody = new HashMap<>();
        responseBody.put("username",inDB.getUsername());
        return ResponseEntity.ok(responseBody);
    }
    @ExceptionHandler(BadCredentialsException.class)
    @ResponseStatus(HttpStatus.UNAUTHORIZED)
    ApiError handleBadCreentialsException() {
        ApiError error = new ApiError(401,"Unauthorized Request","/auth");
        return error;
    }
}
