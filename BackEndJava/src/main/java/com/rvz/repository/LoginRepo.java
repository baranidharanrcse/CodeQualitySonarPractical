package com.rvz.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rvz.model.Login;


@Repository
public interface LoginRepo extends JpaRepository<Login, String>{

	Login findByUserNameAndPassword(String userName, String password);

}
