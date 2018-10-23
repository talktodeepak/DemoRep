package com.challenge.demo.controller;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class TimeTrackerController {


	 @RequestMapping(value = "/home")
	 public String home() {
	  return "index.html";
	 }
	
}
