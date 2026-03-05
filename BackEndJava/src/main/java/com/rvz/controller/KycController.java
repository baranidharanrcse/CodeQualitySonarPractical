package com.rvz.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rvz.model.Kyc;
import com.rvz.service.KycService;

@RestController
@RequestMapping("/Kyc")
@CrossOrigin(origins = "http://localhost:5174")
public class KycController 
{

	@Autowired
	private KycService kycService;
	@GetMapping
	public List<Kyc> getAllKyc()
	{
		return kycService.getAllKyc(); 
	}
	@PostMapping
	public boolean addKyc(@RequestBody Kyc details)
	{
		return kycService.addKyc(details);
	}
	@PutMapping("/{id}")
	public boolean updateKyc(@PathVariable int id,@RequestBody Kyc details)
	{
		return kycService.updateKyc(id,details);
	}
	@DeleteMapping("/{id}")
	public boolean updateKyc(@PathVariable int id)
	{
		return kycService.deleteKyc(id);
	}
}
