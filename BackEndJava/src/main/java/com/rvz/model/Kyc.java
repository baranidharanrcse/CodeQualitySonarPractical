package com.rvz.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Kyc 
{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int kycId;
	private String customerName;
	private long accountNumber;
	private String address;
	private long aadharNumber;
	private String panNumber;

	public int getKycId() 
	{
		return kycId;
	}

	public void setKycId(int kycId) 
	{
		this.kycId = kycId;
	}

	public String getCusName()
	{
		return customerName;
	}

	public void setCusName(String cusName) 
	{
		this.customerName = cusName;
	}

	public long getAccountNumber() 
	{
		return accountNumber;
	}

	public void setAccountNumber(long accountNumber)
	{
		this.accountNumber = accountNumber;
	}

	public String getAddress()
	{
		return address;
	}

	public void setAddress(String address) 
	{
		this.address = address;
	}

	public long getAadharNumber() 
	{
		return aadharNumber;
	}

	public void setAadharNumber(long aadharNumber) 
	{
		this.aadharNumber = aadharNumber;
	}

	public String getPanNumber() {
		return panNumber
				;
	}

	public void setPanNumber(String panNumber) 
	{
		this.panNumber = panNumber;
	}

	@Override
	public String toString()
	{
		return "Kyc [kycId=" + kycId + ", cusName=" + customerName + ", accountNumber=" + accountNumber + ", address="
				+ address + ", aadharNumber=" + aadharNumber + ", panNumber=" + panNumber + "]";
	}

}
