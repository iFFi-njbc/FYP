package com.FYP.AIA.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import com.FYP.AIA.model.Order;
import com.FYP.AIA.repository.OrderRepository;



	@Service
	public class BasicOrderService {

	    @Autowired
	    private OrderRepository orderRepository;

	    public List<Order> getAllOrders() {
	        return orderRepository.findAll();
	    }

	    public Optional<Order> getOrderById(Long id) {
	        return orderRepository.findById(id);
	    }

	    public Order saveOrder(Order order) {
	        return orderRepository.save(order);
	    }

	    public void deleteOrder(Long id) {
	        orderRepository.deleteById(id);
	    }
	}



