package com.FYP.AIA.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.FYP.AIA.exceptions.PurchaseGoodReceivingNotFoundException;
import com.FYP.AIA.exceptions.PurchaseInvoiceNotFoundException;
import com.FYP.AIA.model.Product;
import com.FYP.AIA.model.PurchaseGoodReceiving;
import com.FYP.AIA.model.Vendor;
import com.FYP.AIA.model.Warehouse;
import com.FYP.AIA.service.ProductService;
import com.FYP.AIA.service.PurchaseGoodReceivingService;
import com.FYP.AIA.service.VendorService;
import com.FYP.AIA.service.WarehouseService;



@RestController
@RequestMapping("/api/purchase/goodreceiving")
public class PurchaseGoodReceivingController {

    private final PurchaseGoodReceivingService purchaseGoodReceivingService;
    private final WarehouseService warehouseService;
    private final ProductService productService;
    private final VendorService vendorService;

    @Autowired
    public PurchaseGoodReceivingController(PurchaseGoodReceivingService purchaseGoodReceivingService, WarehouseService warehouseService,
                                     ProductService productService, VendorService vendorService) {
        this.purchaseGoodReceivingService = purchaseGoodReceivingService;
        this.warehouseService = warehouseService;
        this.productService = productService;
        this.vendorService = vendorService;
    }

    @GetMapping
    public ResponseEntity<List<PurchaseGoodReceiving>> getAllPurchaseGoodReceivings() {
        List<PurchaseGoodReceiving> GoodReceiving = purchaseGoodReceivingService.getAllPurchaseGoodReceivings();
        return new ResponseEntity<>(GoodReceiving, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getPurchaseGoodReceivingById(@PathVariable("id") Long id) {
        try {
            PurchaseGoodReceiving GoodReceiving = purchaseGoodReceivingService.getPurchaseGoodReceivingById(id);
            return new ResponseEntity<>(GoodReceiving, HttpStatus.OK);
        } catch (PurchaseGoodReceivingNotFoundException e) {
            return new ResponseEntity<>("Purchase GoodReceiving not found", HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<?> createPurchaseGoodReceiving(@RequestBody PurchaseGoodReceiving GoodReceiving) {
        try {
            Warehouse warehouse = warehouseService.getWarehouseById(GoodReceiving.getWarehouse().getId());
            Product product = productService.getProduct(GoodReceiving.getProduct().getId());
            Vendor vendor = vendorService.getVendorById(GoodReceiving.getVendor().getId());

            PurchaseGoodReceiving iGoodReceiving = new PurchaseGoodReceiving();
            iGoodReceiving.setWarehouse(warehouse);
            iGoodReceiving.setProduct(product);
            iGoodReceiving.setVendor(vendor);
            iGoodReceiving.setQuantity(GoodReceiving.getQuantity());

            iGoodReceiving.setDateOfGeneration(GoodReceiving.getDateOfGeneration());


            PurchaseGoodReceiving createGoodReceiving = purchaseGoodReceivingService.createPurchaseGoodReceiving(GoodReceiving);
            return new ResponseEntity<>(createGoodReceiving, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("Error creating purchase GoodReceiving", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updatePurchaseGoodReceiving(@PathVariable("id") Long id, @RequestBody PurchaseGoodReceiving GoodReceiving) {
        try {
            PurchaseGoodReceiving existingGoodReceiving = purchaseGoodReceivingService.getPurchaseGoodReceivingById(id);

            Warehouse warehouse = warehouseService.getWarehouseById(GoodReceiving.getWarehouse().getId());
            Product product = productService.getProduct(GoodReceiving.getProduct().getId());
            Vendor vendor = vendorService.getVendorById(GoodReceiving.getVendor().getId());

            existingGoodReceiving.setWarehouse(warehouse);
            existingGoodReceiving.setProduct(product);
            existingGoodReceiving.setVendor(vendor);
            existingGoodReceiving.setQuantity(GoodReceiving.getQuantity());
            existingGoodReceiving.setDateOfGeneration(GoodReceiving.getDateOfGeneration());


            PurchaseGoodReceiving updatedGoodReceiving = purchaseGoodReceivingService.updatePurchaseGoodReceiving(existingGoodReceiving);
            return new ResponseEntity<>(updatedGoodReceiving, HttpStatus.OK);
        } catch (PurchaseGoodReceivingNotFoundException e) {
            return new ResponseEntity<>("Purchase GoodReceiving not found", HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>("Error updating purchase GoodReceiving", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletePurchaseGoodReceiving(@PathVariable("id") Long id) {
        try {
            purchaseGoodReceivingService.deletePurchaseGoodReceiving(id);
            return new ResponseEntity<>("Purchase GoodReceiving deleted successfully", HttpStatus.OK);
        } catch (PurchaseGoodReceivingNotFoundException e) {
            return new ResponseEntity<>("Purchase GoodReceiving not found", HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>("Error deleting purchase GoodReceiving", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
