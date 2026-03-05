package com.rvz.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rvz.model.Login;
import com.rvz.repository.LoginRepo;

@Service
public class LoginServiceImpl implements LoginService {

	@Autowired
	LoginRepo loginRepo;
	@Override
	public boolean checklogin(Login credentials) {
		String userName=credentials.getUserName();
		String password=credentials.getPassword();
		loginRepo.findByUserNameAndPassword(userName,password);
			return true;
	}

}
