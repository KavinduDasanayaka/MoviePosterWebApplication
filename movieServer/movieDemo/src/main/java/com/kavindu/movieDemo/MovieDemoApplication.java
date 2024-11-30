package com.kavindu.movieDemo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
//@RestController
public class MovieDemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(MovieDemoApplication.class, args);
	}

//	@GetMapping("/root")
//	public String getroot(){
//		return "Hello,World.";	
//	}

}
