package com.FYP.AIA;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class })
public class FinalYearProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(FinalYearProjectApplication.class, args);
	}

}
