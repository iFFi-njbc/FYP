package com.FYP.AIA.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.FYP.AIA.exceptions.PurchaseGoodReceivingNotFoundException;
import com.FYP.AIA.model.PurchaseGoodReceiving;
import com.FYP.AIA.repository.PurchaseGoodReceivingRepository;

@Service
public class PurchaseGoodReceivingService {

	@Autowired
    private final PurchaseGoodReceivingRepository purchaseGoodReceivingRepository;

    @Autowired
    public PurchaseGoodReceivingService(PurchaseGoodReceivingRepository purchaseGoodsReceivingRepository) {
        this.purchaseGoodReceivingRepository = purchaseGoodsReceivingRepository;
    }

    public List<PurchaseGoodReceiving> getAllPurchaseGoodReceivings() {
        return purchaseGoodReceivingRepository.findAll();
    }

    public PurchaseGoodReceiving getPurchaseGoodReceivingById(Long id) {
        return purchaseGoodReceivingRepository.findById(id)
                .orElseThrow(() -> new PurchaseGoodReceivingNotFoundException("Purchase goods receiving not found"));
    }

    public PurchaseGoodReceiving createPurchaseGoodReceiving(PurchaseGoodReceiving goodsReceiving) {
        return purchaseGoodReceivingRepository.save(goodsReceiving);
    }

    public PurchaseGoodReceiving updatePurchaseGoodReceiving(PurchaseGoodReceiving goodsReceiving) {
        return purchaseGoodReceivingRepository.save(goodsReceiving);
    }

    public void deletePurchaseGoodReceiving(Long id) {
        purchaseGoodReceivingRepository.deleteById(id);
    }
}
