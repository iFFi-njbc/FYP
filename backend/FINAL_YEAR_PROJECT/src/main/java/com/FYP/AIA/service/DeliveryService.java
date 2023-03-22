package com.FYP.AIA.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.FYP.AIA.model.Delivery;
import com.FYP.AIA.repository.CustomerRepository;
import com.FYP.AIA.repository.DeliveryRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class DeliveryService {
	@Autowired
	private DeliveryRepository deliveryRepository;

	public List<Delivery> getAllDeliveries() {
		return deliveryRepository.findAll();
	}

	public Delivery getDeliveryById(Long id) throws Exception {
		return deliveryRepository.findById(id)
				.orElseThrow(() -> new Exception("Delivery not found with ID: " + id));
	}

	public Delivery createDelivery(Delivery delivery) {
		return deliveryRepository.save(delivery);
	}

	public void deleteDelivery(Long id) throws Exception {
		Delivery delivery = deliveryRepository.findById(id)
				.orElseThrow(() -> new Exception("Delivery not found with ID: " + id));
		deliveryRepository.delete(delivery);
	}
	
	  @Autowired
	    private CustomerRepository customerRepository;

	    public Delivery updateDelivery(Long id, Delivery newDelivery) {
	        Optional<Delivery> optionalDelivery = deliveryRepository.findById(id);
	        if (optionalDelivery.isPresent()) {
	            Delivery delivery = optionalDelivery.get();
	            delivery.setAddress(newDelivery.getAddress());
	            delivery.setStatus(newDelivery.getStatus());
	            delivery.setCustomer(customerRepository.findById(newDelivery.getCustomer().getId())
	                    .orElseThrow(() -> new EntityNotFoundException("Customer not found")));
	            delivery.setTotalAmount(newDelivery.getTotalAmount());
	            return deliveryRepository.save(delivery);
	        } else {
	            throw new EntityNotFoundException("Delivery not found");
	        }
	    }
}
