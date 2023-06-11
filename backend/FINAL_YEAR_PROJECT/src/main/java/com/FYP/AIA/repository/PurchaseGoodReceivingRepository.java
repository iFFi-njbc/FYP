package com.FYP.AIA.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.FYP.AIA.model.PurchaseGoodReceiving;


@Repository
public interface PurchaseGoodReceivingRepository extends JpaRepository<PurchaseGoodReceiving, Long> {

}
