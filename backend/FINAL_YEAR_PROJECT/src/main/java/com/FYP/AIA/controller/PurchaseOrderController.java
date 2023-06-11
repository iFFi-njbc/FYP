package com.FYP.AIA.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.FYP.AIA.model.Product;
import com.FYP.AIA.model.PurchaseOrder;
import com.FYP.AIA.model.Vendor;
import com.FYP.AIA.repository.ProductRepository;
import com.FYP.AIA.repository.PurchaseOrderRepository;
import com.FYP.AIA.repository.VendorRepository;

@RestController
@RequestMapping("/api/purchaseOrders")
public class PurchaseOrderController {
    private final PurchaseOrderRepository purchaseOrderRepository;
    private final VendorRepository vendorRepository;
    private final ProductRepository productRepository;

    @Autowired
    public PurchaseOrderController(PurchaseOrderRepository purchaseOrderRepository,
                                   VendorRepository vendorRepository,
                                   ProductRepository productRepository) {
        this.purchaseOrderRepository = purchaseOrderRepository;
        this.vendorRepository = vendorRepository;
        this.productRepository = productRepository;
    }

    @PostMapping
    public PurchaseOrder addPurchaseOrder(@RequestBody PurchaseOrder purchaseOrder) {
        Vendor vendor = vendorRepository.findById(purchaseOrder.getVendor().getId())
                .orElseThrow(() -> new IllegalArgumentException("Invalid vendor ID"));
        Product product = productRepository.findById(purchaseOrder.getProduct().getId())
                .orElseThrow(() -> new IllegalArgumentException("Invalid product ID"));

        purchaseOrder.setVendor(vendor);
        purchaseOrder.setProduct(product);

        return purchaseOrderRepository.save(purchaseOrder);
    }

    @GetMapping
    public List<PurchaseOrder> getAllPurchaseOrders() {
        return purchaseOrderRepository.findAll();
    }

    @GetMapping("/{id}")
    public PurchaseOrder getPurchaseOrderById(@PathVariable Long id) {
        return purchaseOrderRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Invalid purchase order ID"));
    }

    @PutMapping("/{id}")
    public PurchaseOrder updatePurchaseOrder(@PathVariable Long id, @RequestBody PurchaseOrder updatedPurchaseOrder) {
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

    @DeleteMapping("/{id}")
    public void deletePurchaseOrder(@PathVariable Long id) {
        PurchaseOrder purchaseOrder = purchaseOrderRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Invalid purchase order ID"));

        purchaseOrderRepository.delete(purchaseOrder);
    }
}
