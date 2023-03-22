package com.FYP.AIA.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.FYP.AIA.model.Order;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
}
