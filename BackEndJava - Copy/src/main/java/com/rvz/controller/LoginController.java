package com.rvz.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rvz.model.Login;
import com.rvz.service.LoginService;



@RestController
@RequestMapping("Kyc/Login")
@CrossOrigin(origins = "http://localhost:5174")
public class LoginController {

	@Autowired
	private LoginService loginService;
	@PostMapping
	public boolean checkLogin(@RequestBody Login credentials) 
	{
		return loginService.checklogin(credentials);
		
	}
}
