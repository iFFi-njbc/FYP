package com.FYP.AIA.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.FYP.AIA.exceptions.PurchaseInvoiceNotFoundException;
import com.FYP.AIA.model.PurchaseInvoice;
import com.FYP.AIA.repository.PurchaseInvoiceRepository;

@Service
public class PurchaseInvoiceService {

    private final PurchaseInvoiceRepository purchaseInvoiceRepository;

    @Autowired
    public PurchaseInvoiceService(PurchaseInvoiceRepository purchaseInvoiceRepository) {
        this.purchaseInvoiceRepository = purchaseInvoiceRepository;
    }

    public List<PurchaseInvoice> getAllPurchaseInvoices() {
        return purchaseInvoiceRepository.findAll();
    }

    public PurchaseInvoice getPurchaseInvoiceById(Long id) {
        return purchaseInvoiceRepository.findById(id)
                .orElseThrow(() -> new PurchaseInvoiceNotFoundException("Purchase invoice not found"));
    }

    public PurchaseInvoice createPurchaseInvoice(PurchaseInvoice invoice) {
        return purchaseInvoiceRepository.save(invoice);
    }

    public PurchaseInvoice updatePurchaseInvoice(PurchaseInvoice invoice) {
        return purchaseInvoiceRepository.save(invoice);
    }

    public void deletePurchaseInvoice(Long id) {
        purchaseInvoiceRepository.deleteById(id);
    }
}
