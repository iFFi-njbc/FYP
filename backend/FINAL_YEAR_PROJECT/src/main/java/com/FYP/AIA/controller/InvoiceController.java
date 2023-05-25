package com.FYP.AIA.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.FYP.AIA.model.Customer;
import com.FYP.AIA.model.Invoice;
import com.FYP.AIA.model.Warehouse;
import com.FYP.AIA.service.CustomerService;
import com.FYP.AIA.service.InvoiceService;
import com.FYP.AIA.service.WarehouseService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/invoices")
public class InvoiceController {
    @Autowired
    private InvoiceService invoiceService;
    @Autowired
    private CustomerService customerService;
    @Autowired
    private WarehouseService warehouseService;

    @GetMapping
    public ResponseEntity<List<Invoice>> getAllInvoices() {
        List<Invoice> invoices = invoiceService.findAll();
        return new ResponseEntity<>(invoices, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Invoice> createInvoice(@RequestBody Invoice invoice) throws Exception {
        Long customerId = invoice.getCustomer().getId();
        Long warehouseId = invoice.getWarehouse().getId();

        if (customerId == null || warehouseId == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        Customer customer = customerService.getCustomerById(customerId);
        Warehouse warehouse = warehouseService.getWarehouseById(warehouseId);

        if (customer == null || warehouse == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        invoice.setCustomer(customer); // Set the customer with the ID
        invoice.setWarehouse(warehouse); // Set the warehouse with the ID

        Invoice newInvoice = invoiceService.save(invoice);
        return new ResponseEntity<>(newInvoice, HttpStatus.CREATED);
    }



    @PutMapping("/{id}")
    public ResponseEntity<Invoice> updateInvoice(@PathVariable Long id, @RequestBody Invoice invoice) {
        Optional<Invoice> invoiceData = invoiceService.findById(id);

        if (invoiceData.isPresent()) {
            Invoice updatedInvoice = invoiceData.get();
            updatedInvoice.setCustomer(invoice.getCustomer());
            updatedInvoice.setDateOfGeneration(invoice.getDateOfGeneration());
            updatedInvoice.setProduct(invoice.getProduct());
            updatedInvoice.setWarehouse(invoice.getWarehouse());
            updatedInvoice.setQuantity(invoice.getQuantity());
            updatedInvoice.setPrice(invoice.getPrice());
            updatedInvoice.setTotalAmount(invoice.getTotalAmount());
            updatedInvoice.setShipping(invoice.getShipping());
            invoiceService.save(updatedInvoice);
            return new ResponseEntity<>(updatedInvoice, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteInvoice(@PathVariable Long id) {
        try {
            invoiceService.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
