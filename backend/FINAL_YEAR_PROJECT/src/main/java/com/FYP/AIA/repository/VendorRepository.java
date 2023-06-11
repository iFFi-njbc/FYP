package com.FYP.AIA.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.FYP.AIA.model.Vendor;

@Repository
public interface VendorRepository extends JpaRepository<Vendor, Long> {
}
