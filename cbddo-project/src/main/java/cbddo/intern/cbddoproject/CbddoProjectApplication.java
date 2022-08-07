package cbddo.intern.cbddoproject;

import cbddo.intern.cbddoproject.entity.AdminUser;
import cbddo.intern.cbddoproject.service.AdminService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CbddoProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(CbddoProjectApplication.class, args);
	}
	/*@Bean
	CommandLineRunner createInitialUsers(AdminService adminService) {
		return new CommandLineRunner() {

			@Override
			public void run(String... args) throws Exception {
				// TODO Auto-generated method stub
				AdminUser user =new AdminUser();
				user.setUsername("user1");
				user.setPassword("password");
				adminService.save(user);
			}

		};
	}*/

}
