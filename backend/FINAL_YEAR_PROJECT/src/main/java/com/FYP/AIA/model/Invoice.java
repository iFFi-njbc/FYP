package com.FYP.AIA.model;

import java.math.BigDecimal;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "sales_invoices")
public class Invoice {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "order_id")
    private Order order;

    private BigDecimal total;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Order getOrder() {
		return order;
	}

	public void setOrder(Order order) {
		this.order = order;
	}

	public BigDecimal getTotal() {
		return total;
	}

	public void setTotal(BigDecimal total) {
		this.total = total;
	}

	@Override
	public String toString() {
		return "Invoice [id=" + id + ", order=" + order + ", total=" + total + "]";
	}

	public Invoice(Long id, Order order, BigDecimal total) {
		super();
		this.id = id;
		this.order = order;
		this.total = total;
	}

	public Invoice() {
		super();
		// TODO Auto-generated constructor stub
	}

	public void setTotal(double totalPrice) {
		this.total = BigDecimal.valueOf(totalPrice);
		
	}

	public Invoice(Order order) {
		super();
		this.order = order;
	}



    // getters and setters
}
