package com.FYP.AIA.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.FYP.AIA.model.Vendor;
import com.FYP.AIA.repository.VendorRepository;

@Service
public class VendorService  {
    @Autowired
    private VendorRepository vendorRepository;

    public List<Vendor> getAllVendors() {
        return vendorRepository.findAll();
    }


    public Vendor getVendorById(Long id) {
        return vendorRepository.findById(id).orElse(null);
    }


    public Vendor addVendor(Vendor vendor) {
        return vendorRepository.save(vendor);
    }


    public Vendor updateVendor(Long id, Vendor vendor) {
        vendor.setId(id);
        return vendorRepository.save(vendor);
    }


    public void deleteVendor(Long id) {
        vendorRepository.deleteById(id);
    }
}