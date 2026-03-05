package com.rvz;

import java.util.logging.Logger;

import org.jspecify.annotations.Nullable;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackEndJavaApplication {

	private static final Logger log=Logger.getLogger(BackEndJavaApplication.class.getName());
	public static void main(String[] args) {
		SpringApplication.run(BackEndJavaApplication.class, args);
	}

	public @Nullable Object doSomething() {
		log.info("Test");
		return null;
	}

}
