package com.FYP.AIA.service;

import org.springframework.stereotype.Service;

import com.FYP.AIA.model.Invoice;
import com.FYP.AIA.model.Order;
import com.FYP.AIA.repository.InvoiceRepository;

@Service
public class InvoiceService {
    private final InvoiceRepository invoiceRepository;

    public InvoiceService(InvoiceRepository invoiceRepository) {
        this.invoiceRepository = invoiceRepository;
    }

    public Invoice createInvoice(Order order) {
        Invoice invoice = new Invoice();
        invoice.setOrder(order);
        invoice.setTotal(order.getTotalPrice());
        return invoiceRepository.save(invoice);
    }
}
