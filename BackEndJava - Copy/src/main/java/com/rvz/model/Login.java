package com.rvz.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Login 
{

	@Id
	private String userName;
	private String password;
	public String getUserName()
	{
		return userName;
	}
	public void setUserName(String userName)
	{
		this.userName = userName;
	}
	public String getPassword()
	{
		return password;
	}
	public void setPassword(String password) 
	{
		this.password = password;
	}
	@Override
	public String toString() 
	{
		return "Login [userName=" + userName + ", password=" + password + "]";
	}
	
}
