package com.FYP.AIA.model;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class PurchaseOrder {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "vendor_id")
    private Vendor vendor;

    private String date;
    private String receiptDate;
    private String subject;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    private String productDescription;
    private int quantity;
    private double price;
    private double totalAmount;
	public double getTotalAmount() {
		return totalAmount;
	}
	public void setTotalAmount(double totalAmount) {
		this.totalAmount = totalAmount;
	}
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
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getReceiptDate() {
		return receiptDate;
	}
	public void setReceiptDate(String receiptDate) {
		this.receiptDate = receiptDate;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	public Product getProduct() {
		return product;
	}
	public void setProduct(Product product) {
		this.product = product;
	}
	public String getProductDescription() {
		return productDescription;
	}
	public void setProductDescription(String productDescription) {
		this.productDescription = productDescription;
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

	public PurchaseOrder(Long id, Vendor vendor, String date, String receiptDate, String subject, Product product,
			String productDescription, int quantity, double price, double totalAmount) {
		super();
		this.id = id;
		this.vendor = vendor;
		this.date = date;
		this.receiptDate = receiptDate;
		this.subject = subject;
		this.product = product;
		this.productDescription = productDescription;
		this.quantity = quantity;
		this.price = price;
		this.totalAmount = totalAmount;
	}
	public PurchaseOrder() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "PurchaseOrder [id=" + id + ", vendor=" + vendor + ", date=" + date + ", receiptDate=" + receiptDate
				+ ", subject=" + subject + ", product=" + product + ", productDescription=" + productDescription
				+ ", quantity=" + quantity + ", price=" + price + ", totalAmount=" + totalAmount + "]";
	}
		
    // Constructors, getters, and setters

    // ...
}
