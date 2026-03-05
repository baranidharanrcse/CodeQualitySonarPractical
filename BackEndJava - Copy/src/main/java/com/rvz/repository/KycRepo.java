package com.rvz.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rvz.model.Kyc;


@Repository
public interface KycRepo extends JpaRepository<Kyc, Integer>{

}
