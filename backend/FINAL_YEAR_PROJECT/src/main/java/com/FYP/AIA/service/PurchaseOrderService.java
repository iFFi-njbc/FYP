package com.FYP.AIA.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.FYP.AIA.model.Product;
import com.FYP.AIA.model.PurchaseOrder;
import com.FYP.AIA.model.Vendor;
import com.FYP.AIA.repository.ProductRepository;
import com.FYP.AIA.repository.PurchaseOrderRepository;
import com.FYP.AIA.repository.VendorRepository;

@Service
public class PurchaseOrderService {
    private final PurchaseOrderRepository purchaseOrderRepository;
    private final VendorRepository vendorRepository;
    private final ProductRepository productRepository;

    @Autowired
    public PurchaseOrderService(PurchaseOrderRepository purchaseOrderRepository,
                                VendorRepository vendorRepository,
                                ProductRepository productRepository) {
        this.purchaseOrderRepository = purchaseOrderRepository;
        this.vendorRepository = vendorRepository;
        this.productRepository = productRepository;
    }

    public PurchaseOrder addPurchaseOrder(PurchaseOrder purchaseOrder) {
        Vendor vendor = vendorRepository.findById(purchaseOrder.getVendor().getId())
                .orElseThrow(() -> new IllegalArgumentException("Invalid vendor ID"));
        Product product = productRepository.findById(purchaseOrder.getProduct().getId())
                .orElseThrow(() -> new IllegalArgumentException("Invalid product ID"));

        purchaseOrder.setVendor(vendor);
        purchaseOrder.setProduct(product);

        return purchaseOrderRepository.save(purchaseOrder);
    }

    public List<PurchaseOrder> getAllPurchaseOrders() {
        return purchaseOrderRepository.findAll();
    }

    public PurchaseOrder getPurchaseOrderById(Long id) {
        return purchaseOrderRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Invalid purchase order ID"));
    }

    public PurchaseOrder updatePurchaseOrder(Long id, PurchaseOrder updatedPurchaseOrder) {
        PurchaseOrder purchaseOrder = purchaseOrderRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Invalid purchase order ID"));

        Vendor vendor = vendorRepository.findById(updatedPurchaseOrder.getVendor().getId())
                .orElseThrow(() -> new IllegalArgumentException("Invalid vendor ID"));
        Product product = productRepository.findById(updatedPurchaseOrder.getProduct().getId())
                .orElseThrow(() -> new IllegalArgumentException("Invalid product ID"));

        purchaseOrder.setVendor(vendor);
        purchaseOrder.setProduct(product);
        purchaseOrder.setDate(updatedPurchaseOrder.getDate());
        purchaseOrder.setReceiptDate(updatedPurchaseOrder.getReceiptDate());
        purchaseOrder.setSubject(updatedPurchaseOrder.getSubject());
        purchaseOrder.setProductDescription(updatedPurchaseOrder.getProductDescription());
        purchaseOrder.setQuantity(updatedPurchaseOrder.getQuantity());
        purchaseOrder.setPrice(updatedPurchaseOrder.getPrice());

        return purchaseOrderRepository.save(purchaseOrder);
    }

    public void deletePurchaseOrder(Long id) {
        PurchaseOrder purchaseOrder = purchaseOrderRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Invalid purchase order ID"));

        purchaseOrderRepository.delete(purchaseOrder);
    }
}
