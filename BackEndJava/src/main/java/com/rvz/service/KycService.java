package com.rvz.service;

import java.util.List;

import com.rvz.model.Kyc;



public interface KycService {

	List<Kyc> getAllKyc();

	boolean addKyc(Kyc details);

	boolean updateKyc(int id, Kyc details);

	boolean deleteKyc(int id);

}
