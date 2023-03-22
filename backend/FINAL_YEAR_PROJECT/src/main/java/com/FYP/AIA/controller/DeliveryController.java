package com.FYP.AIA.controller;

import java.util.List;
import java.util.Optional;

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
import com.FYP.AIA.model.Delivery;
import com.FYP.AIA.repository.CustomerRepository;
import com.FYP.AIA.repository.DeliveryRepository;
import com.FYP.AIA.service.CustomerService;
import com.FYP.AIA.service.DeliveryService;

import jakarta.persistence.EntityNotFoundException;

@RestController
@RequestMapping("/api")
public class DeliveryController {
	@Autowired
    private DeliveryService deliveryService;
	@Autowired
	private DeliveryRepository deliveryRepository;
	@Autowired
	private CustomerService customerService;
	@Autowired
	private CustomerRepository customerRepository;

    @GetMapping("/deliveries")
    public ResponseEntity<List<Delivery>> getAllDeliveries() {
        List<Delivery> deliveries = deliveryService.getAllDeliveries();
        return new ResponseEntity<>(deliveries, HttpStatus.OK);
    }

    @GetMapping("/deliveries/{id}")
    public ResponseEntity<Delivery> getDeliveryById(@PathVariable("id") Long id) throws Exception {
        Optional<Delivery> delivery = Optional.ofNullable(deliveryService.getDeliveryById(id));
        return delivery.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/deliveries")
    public ResponseEntity<Delivery> saveDelivery(@RequestBody Delivery delivery) {

    	  System.out.println(delivery);
    	    Customer customer = customerRepository.findById(delivery.getCustomer().getId())
    	            .orElseThrow(() -> new EntityNotFoundException("Customer not found"));
    	    delivery.setCustomer(customer);

    	    Delivery savedDelivery = deliveryService.createDelivery(delivery);
    	    return new ResponseEntity<>(savedDelivery, HttpStatus.CREATED);
    }

    @PutMapping("/deliveries/{id}")
    public ResponseEntity<Delivery> updateDelivery(@PathVariable Long id, @RequestBody Delivery newDelivery) {
        Optional<Delivery> optionalDelivery = deliveryRepository.findById(id);
        if (optionalDelivery.isPresent()) {
            Delivery delivery = optionalDelivery.get();
            delivery.setAddress(newDelivery.getAddress());
            delivery.setStatus(newDelivery.getStatus());
            delivery.setStatus(newDelivery.getStatus());
            delivery.setCustomer(newDelivery.getCustomer());
            delivery.setTotalAmount(newDelivery.getTotalAmount());
            deliveryRepository.save(delivery);
            return ResponseEntity.ok(delivery);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/deliveries/{id}")
    public ResponseEntity<?> deleteDelivery(@PathVariable Long id) {
        try {
            deliveryService.deleteDelivery(id);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error deleting the delivery with id " + id);
        }
    }
//    // GET /api/customers
//    @GetMapping("/customers")
//    public List<Customer> getAllCustomers() {
//       
//		return customerService.getAllCustomers();
//    }
}
