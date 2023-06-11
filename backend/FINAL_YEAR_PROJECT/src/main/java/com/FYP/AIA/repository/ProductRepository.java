package com.FYP.AIA.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.FYP.AIA.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
	@Query("SELECT DISTINCT p.productName FROM Product p")
	List<String> findDistinctproductName();
}
