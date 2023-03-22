package com.FYP.AIA.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.FYP.AIA.model.Invoice;

@Repository
public interface InvoiceRepository extends JpaRepository<Invoice, Long> {
}

