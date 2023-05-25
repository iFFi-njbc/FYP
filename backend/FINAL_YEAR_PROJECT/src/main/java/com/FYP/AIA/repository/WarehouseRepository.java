package com.FYP.AIA.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.FYP.AIA.model.Warehouse;
@Repository
public interface WarehouseRepository extends JpaRepository<Warehouse, Long> {

	Warehouse findByName(String name);
}
