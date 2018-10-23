package com.challenge.demo.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;


@SpringBootApplication
@ComponentScan("com.callenge.demo.controller")
public class SpringBootDemoApp {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootDemoApp.class, args);
	}
	
}
