package com.getbook;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
@EnableWebMvc
public class GetBookApplication implements WebMvcConfigurer{

	
	
	@Override
	public void addCorsMappings(CorsRegistry registry) {


		registry.addMapping("/**").allowedMethods("GET","POST","DELETE","OPTIONS");
	}
	
	public static void main(String[] args) {
		SpringApplication.run(GetBookApplication.class, args);
	}

}
