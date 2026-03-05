package com.rvz.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rvz.model.Kyc;
import com.rvz.repository.KycRepo;

@Service
public class KycServiceImpl implements KycService{
	@Autowired
	private KycRepo kycRepo;
	@Override
	public List<Kyc> getAllKyc() {
		return kycRepo.findAll();
	}
	@Override
	public boolean addKyc(Kyc details) {
		kycRepo.save(details);
		return true;
		
	}
	@Override
	public boolean updateKyc(int id, Kyc details) {
		Optional<Kyc> find=kycRepo.findById(id);
		if(find.isPresent())
		{
			details.setKycId(id);
			kycRepo.save(details);
		}
		return true;
	}
	@Override
	public boolean deleteKyc(int id) {
		Optional<Kyc> find=kycRepo.findById(id);
		if(find.isPresent())
		{
			kycRepo.deleteById(id);
			return true;

		}
		return false;
	}

}
