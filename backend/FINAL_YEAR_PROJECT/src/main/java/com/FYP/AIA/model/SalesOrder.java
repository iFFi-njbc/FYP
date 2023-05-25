package com.FYP.AIA.model;


import java.time.LocalDate;
import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

	@Entity
	@Table(name = "sales_order")
public class SalesOrder {

	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

	    @ManyToOne(fetch = FetchType.LAZY)
	    @JoinColumn(name = "customer_id")
	    private Customer customer;

	    @Column(name = "product")
	    private String product;
	    @Column(name = "quantity")
	    private Integer quantity;
	    @Column(name = "unitprice")
	    private Double unitPrice;
	    @Column(name = "shipping")
	    private Double shippingCharges;
	    @Column(name = "totalprice")
	    private Double totalPrice;

	    @Column(name="createdat")
	    private LocalDate createdAt;

	    
	    private LocalDate updatedAt;

		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public Customer getCustomer() {
			return customer;
		}

		public void setCustomer(Customer customer) {
			this.customer = customer;
		}

		public String getProduct() {
			return product;
		}

		public void setProduct(String product) {
			this.product = product;
		}

		public Integer getQuantity() {
			return quantity;
		}

		public void setQuantity(Integer quantity) {
			this.quantity = quantity;
		}

		public Double getUnitPrice() {
			return unitPrice;
		}

		public void setUnitPrice(Double unitPrice) {
			this.unitPrice = unitPrice;
		}

		public Double getShippingCharges() {
			return shippingCharges;
		}

		public void setShippingCharges(Double shippingCharges) {
			this.shippingCharges = shippingCharges;
		}

		public Double getTotalPrice() {
			return totalPrice;
		}

		public void setTotalPrice(Double totalPrice) {
			this.totalPrice = totalPrice;
		}

		public LocalDate getCreatedAt() {
			return createdAt;
		}

		public void setCreatedAt(LocalDate createdAt) {
			this.createdAt = createdAt;
		}

		public LocalDate getUpdatedAt() {
			return updatedAt;
		}

		public void setUpdatedAt(LocalDate updatedAt) {
			this.updatedAt = updatedAt;
		}

		public SalesOrder(Long id, Customer customer, String product, Integer quantity, Double unitPrice,
				Double shippingCharges, Double totalPrice, LocalDate createdAt, LocalDate updatedAt) {
			super();
			this.id = id;
			this.customer = customer;
			this.product = product;
			this.quantity = quantity;
			this.unitPrice = unitPrice;
			this.shippingCharges = shippingCharges;
			this.totalPrice = totalPrice;
			this.createdAt = createdAt;
			this.updatedAt = updatedAt;
		}

		public SalesOrder() {
			super();
			// TODO Auto-generated constructor stub
		}

	    // Getters and setters

	}