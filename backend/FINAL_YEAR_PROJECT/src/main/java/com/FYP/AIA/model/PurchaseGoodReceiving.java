package com.FYP.AIA.model;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "purchase_goodreceiving")
public class PurchaseGoodReceiving{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "vendor_id", nullable = false)
    private Vendor vendor;

    @Column(name = "date_of_generation", nullable = false)
    private Date dateOfGeneration;

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;

    @ManyToOne
    @JoinColumn(name = "warehouse_id", nullable = false)
    private Warehouse warehouse;

    @Column(nullable = false)
    private int quantity;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Vendor getVendor() {
		return vendor;
	}

	public void setVendor(Vendor vendor) {
		this.vendor = vendor;
	}

	public Date getDateOfGeneration() {
		return dateOfGeneration;
	}

	public void setDateOfGeneration(Date dateOfGeneration) {
		this.dateOfGeneration = dateOfGeneration;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
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

	public PurchaseGoodReceiving(Long id, Vendor vendor, Date dateOfGeneration, Product product, Warehouse warehouse,
			int quantity) {
		super();
		this.id = id;
		this.vendor = vendor;
		this.dateOfGeneration = dateOfGeneration;
		this.product = product;
		this.warehouse = warehouse;
		this.quantity = quantity;
	}

	public PurchaseGoodReceiving() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "PurchaseGoodReceiving [id=" + id + ", vendor=" + vendor + ", dateOfGeneration=" + dateOfGeneration
				+ ", product=" + product + ", warehouse=" + warehouse + ", quantity=" + quantity + "]";
	}

   
}