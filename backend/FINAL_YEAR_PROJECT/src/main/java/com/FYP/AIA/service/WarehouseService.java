package com.FYP.AIA.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.client.ResourceAccessException;

import com.FYP.AIA.model.Customer;
import com.FYP.AIA.model.Warehouse;
import com.FYP.AIA.repository.WarehouseRepository;

@Service
public class WarehouseService {
    @Autowired
    private WarehouseRepository warehouseRepository;
    
    public List<Warehouse> getAllWarehouses() {
        return warehouseRepository.findAll();
    }
    
    public Warehouse getWarehouseById(Long id) throws Exception {
        Optional<Warehouse> warehouse = warehouseRepository.findById(id);
        if (warehouse.isPresent()) {
            return warehouse.get();
        } else {
            throw new Exception("Warehouse not found with id " + id);
        }
    }
    
    public Warehouse addWarehouse(Warehouse warehouse) {
        return warehouseRepository.save(warehouse);
    }
    
    public Warehouse updateWarehouse(Long id, Warehouse warehouse) throws Exception {
        Optional<Warehouse> existingWarehouse = warehouseRepository.findById(id);
        if (existingWarehouse.isPresent()) {
            Warehouse updatedWarehouse = existingWarehouse.get();
            updatedWarehouse.setName(warehouse.getName());
            updatedWarehouse.setLocation(warehouse.getLocation());
            updatedWarehouse.setZipcode(warehouse.getZipcode());
            updatedWarehouse.setCity(warehouse.getCity());
            return warehouseRepository.save(updatedWarehouse);
        } else {
            throw new Exception("Warehouse not found with id " + id);
        }
    }
    
    public void deleteWarehouse(Long id) throws Exception {
        Optional<Warehouse> warehouse = warehouseRepository.findById(id);
        if (warehouse.isPresent()) {
            warehouseRepository.delete(warehouse.get());
        } else {
            throw new Exception("Warehouse not found with id " + id);
        }
    }
    
    public Warehouse findByName(String name)
    {
		return warehouseRepository.findByName(name);
    	
    }
}
