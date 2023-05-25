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

import com.FYP.AIA.model.Customer;
import com.FYP.AIA.model.SalesOrder;
import com.FYP.AIA.service.CustomerService;
import com.FYP.AIA.service.SalesOrderService;

import jakarta.persistence.EntityNotFoundException;

@RestController
@RequestMapping("/api/orders")
public class SalesOrderController {

    @Autowired
    private SalesOrderService salesOrderService;
    @Autowired
    private CustomerService customerService = new CustomerService();


    @GetMapping("")
    public ResponseEntity<List<SalesOrder>> getAllOrders() {
        List<SalesOrder> orders = salesOrderService.getAllOrders();
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<SalesOrder> getOrderById(@PathVariable Long id) {
        SalesOrder order = salesOrderService.getOrderById(id);
        if (order != null) {
            return new ResponseEntity<>(order, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping("")
    public ResponseEntity<SalesOrder> createOrder(@RequestBody SalesOrder salesOrder) {
   	  System.out.println(salesOrder);
   	  
   	  

		Customer customer = customerService.getCustomerById(salesOrder.getCustomer().getId());
		if(customer == null)
		{
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);	
		}
	    salesOrder.setCustomer(customer);

        SalesOrder order = salesOrderService.createOrder(salesOrder);
        return new ResponseEntity<>(order, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<SalesOrder> updateOrder(@PathVariable Long id, @RequestBody SalesOrder salesOrder) {
        SalesOrder order = salesOrderService.updateOrder(id, salesOrder);
        if (order != null) {
            return new ResponseEntity<>(order, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOrder(@PathVariable Long id) {
        salesOrderService.deleteOrder(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}