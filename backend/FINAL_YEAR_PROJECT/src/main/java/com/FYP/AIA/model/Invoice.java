package com.FYP.AIA.model;


import java.time.LocalDate;

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
	    @JoinColumn(name = "customer_id")
	    private Customer customer;

	    private LocalDate dateOfGeneration;

	    private String product;

	    @ManyToOne
	    (fetch = FetchType.LAZY)
	    @JoinColumn(name = "warehouse_id")
	    private Warehouse warehouse;

	    private int quantity;

	    private double price;
	    
	    private double shipping;

	    public double getShipping() {
			return shipping;
		}

		public void setShipping(double shipping) {
			this.shipping = shipping;
		}

		private double totalAmount;

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

		public LocalDate getDateOfGeneration() {
			return dateOfGeneration;
		}

		public void setDateOfGeneration(LocalDate dateOfGeneration) {
			this.dateOfGeneration = dateOfGeneration;
		}

		public String getProduct() {
			return product;
		}

		public void setProduct(String product) {
			this.product = product;
		}

		public Warehouse getWarehouse() {
			return warehouse;
		}

		public void setWarehouse(Warehouse warehouse) {
			this.warehouse = warehouse;
		}

		public int getQuantity() {
			return quantity;
		}

		public void setQuantity(int quantity) {
			this.quantity = quantity;
		}

		public double getPrice() {
			return price;
		}

		public void setPrice(double price) {
			this.price = price;
		}

		public double getTotalAmount() {
			return totalAmount;
		}

		public void setTotalAmount(double totalAmount) {
			this.totalAmount = totalAmount;
		}

		public Invoice(Long id, Customer customer, LocalDate dateOfGeneration, String product, Warehouse warehouse,
				int quantity, double price, double totalAmount, double shipping) {
			super();
			this.id = id;
			this.customer = customer;
			this.dateOfGeneration = dateOfGeneration;
			this.product = product;
			this.warehouse = warehouse;
			this.quantity = quantity;
			this.price = price;
			this.totalAmount = totalAmount;
			this.shipping = shipping;
		}

		public Invoice() {
			super();
			// TODO Auto-generated constructor stub
		}

		@Override
		public String toString() {
			return "Invoice [id=" + id + ", customer=" + customer + ", dateOfGeneration=" + dateOfGeneration
					+ ", product=" + product + ", warehouse=" + warehouse + ", quantity=" + quantity + ", price="
					+ price + ", totalAmount=" + totalAmount + "]";
		}

	    
	}

