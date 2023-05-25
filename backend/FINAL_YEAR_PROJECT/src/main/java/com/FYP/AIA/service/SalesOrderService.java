package com.FYP.AIA.service;

import java.sql.Date;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import com.FYP.AIA.model.SalesOrder;
import com.FYP.AIA.repository.SalesOrderRepository;



@Service
public class SalesOrderService {

    @Autowired
    private SalesOrderRepository salesOrderRepository;

    public List<SalesOrder> getAllOrders() {
        return salesOrderRepository.findAll();
    }

    public SalesOrder getOrderById(Long id) {
        return salesOrderRepository.findById(id).orElse(null);
    }

    public SalesOrder createOrder(SalesOrder salesOrder) {
        return salesOrderRepository.save(salesOrder);
    }

    public SalesOrder updateOrder(Long id, SalesOrder salesOrder) {
        SalesOrder existingOrder = getOrderById(id);
        if (existingOrder != null) {
            existingOrder.setCustomer(salesOrder.getCustomer());
            existingOrder.setProduct(salesOrder.getProduct());
            existingOrder.setQuantity(salesOrder.getQuantity());
            existingOrder.setUnitPrice(salesOrder.getUnitPrice());
            existingOrder.setShippingCharges(salesOrder.getShippingCharges());
            existingOrder.setTotalPrice(salesOrder.getTotalPrice());
            existingOrder.setUpdatedAt(salesOrder.getUpdatedAt());
            return salesOrderRepository.save(existingOrder);
        }
        return null;
    }

    public void deleteOrder(Long id) {
        salesOrderRepository.deleteById(id);
    }

}
