package com.FYP.AIA.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.FYP.AIA.model.PurchaseOrder;

public interface PurchaseOrderRepository extends JpaRepository<PurchaseOrder, Long> {
}
