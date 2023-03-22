package com.FYP.AIA.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.FYP.AIA.model.Customer;
import com.FYP.AIA.model.Delivery;

@Repository
public interface CustomerRepository extends JpaRepository<	Customer, Long>{

}
