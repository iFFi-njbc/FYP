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

import com.FYP.AIA.exceptions.PurchaseInvoiceNotFoundException;
import com.FYP.AIA.model.Product;
import com.FYP.AIA.model.PurchaseInvoice;
import com.FYP.AIA.model.Vendor;
import com.FYP.AIA.model.Warehouse;
import com.FYP.AIA.service.ProductService;
import com.FYP.AIA.service.PurchaseInvoiceService;
import com.FYP.AIA.service.VendorService;
import com.FYP.AIA.service.WarehouseService;

@RestController
@RequestMapping("/api/purchase/invoices")
public class PurchaseInvoiceController {

    private final PurchaseInvoiceService purchaseInvoiceService;
    private final WarehouseService warehouseService;
    private final ProductService productService;
    private final VendorService vendorService;

    @Autowired
    public PurchaseInvoiceController(PurchaseInvoiceService purchaseInvoiceService, WarehouseService warehouseService,
                                     ProductService productService, VendorService vendorService) {
        this.purchaseInvoiceService = purchaseInvoiceService;
        this.warehouseService = warehouseService;
        this.productService = productService;
        this.vendorService = vendorService;
    }

    @GetMapping
    public ResponseEntity<List<PurchaseInvoice>> getAllPurchaseInvoices() {
        List<PurchaseInvoice> invoices = purchaseInvoiceService.getAllPurchaseInvoices();
        return new ResponseEntity<>(invoices, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getPurchaseInvoiceById(@PathVariable("id") Long id) {
        try {
            PurchaseInvoice invoice = purchaseInvoiceService.getPurchaseInvoiceById(id);
            return new ResponseEntity<>(invoice, HttpStatus.OK);
        } catch (PurchaseInvoiceNotFoundException e) {
            return new ResponseEntity<>("Purchase invoice not found", HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<?> createPurchaseInvoice(@RequestBody PurchaseInvoice invoiceDTO) {
        try {
            Warehouse warehouse = warehouseService.getWarehouseById(invoiceDTO.getWarehouse().getId());
            Product product = productService.getProduct(invoiceDTO.getProduct().getId());
            Vendor vendor = vendorService.getVendorById(invoiceDTO.getVendor().getId());

            PurchaseInvoice invoice = new PurchaseInvoice();
            invoice.setWarehouse(warehouse);
            invoice.setProduct(product);
            invoice.setVendor(vendor);
            invoice.setQuantity(invoiceDTO.getQuantity());
            invoice.setPrice(invoiceDTO.getPrice());
            invoice.setShippingCharges(invoiceDTO.getShippingCharges());
            invoice.setDateOfGeneration(invoiceDTO.getDateOfGeneration());
            // Calculate total amount
            double totalAmount = invoice.getQuantity() * invoice.getPrice() + invoice.getShippingCharges();
            invoice.setTotalAmount(totalAmount);

            PurchaseInvoice createdInvoice = purchaseInvoiceService.createPurchaseInvoice(invoice);
            return new ResponseEntity<>(createdInvoice, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("Error creating purchase invoice", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updatePurchaseInvoice(@PathVariable("id") Long id, @RequestBody PurchaseInvoice invoiceDTO) {
        try {
            PurchaseInvoice existingInvoice = purchaseInvoiceService.getPurchaseInvoiceById(id);

            Warehouse warehouse = warehouseService.getWarehouseById(invoiceDTO.getWarehouse().getId());
            Product product = productService.getProduct(invoiceDTO.getProduct().getId());
            Vendor vendor = vendorService.getVendorById(invoiceDTO.getVendor().getId());

            existingInvoice.setWarehouse(warehouse);
            existingInvoice.setProduct(product);
            existingInvoice.setVendor(vendor);
            existingInvoice.setQuantity(invoiceDTO.getQuantity());
            existingInvoice.setPrice(invoiceDTO.getPrice());
            existingInvoice.setShippingCharges(invoiceDTO.getShippingCharges());
            existingInvoice.setDateOfGeneration(invoiceDTO.getDateOfGeneration());
            // Calculate total amount
            double totalAmount = existingInvoice.getQuantity() * existingInvoice.getPrice() + existingInvoice.getShippingCharges();
            existingInvoice.setTotalAmount(totalAmount);

            PurchaseInvoice updatedInvoice = purchaseInvoiceService.updatePurchaseInvoice(existingInvoice);
            return new ResponseEntity<>(updatedInvoice, HttpStatus.OK);
        } catch (PurchaseInvoiceNotFoundException e) {
            return new ResponseEntity<>("Purchase invoice not found", HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>("Error updating purchase invoice", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletePurchaseInvoice(@PathVariable("id") Long id) {
        try {
            purchaseInvoiceService.deletePurchaseInvoice(id);
            return new ResponseEntity<>("Purchase invoice deleted successfully", HttpStatus.OK);
        } catch (PurchaseInvoiceNotFoundException e) {
            return new ResponseEntity<>("Purchase invoice not found", HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>("Error deleting purchase invoice", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
