package com.FYP.AIA.model;

import jakarta.persistence.*;


@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "productName" , nullable=false)
    private String productName;
    
    @Column(name = "showSalePrice" , nullable=false)
    private boolean showSalePrice;
    
    @Column(name = "salePrice" , nullable=false)
    private double salePrice;
    
    @Column(name = "showPurchasePrice" , nullable=false)
    private boolean showPurchasePrice;
    
    @Column(name = "purchasePrice" , nullable=false)
    private double purchasePrice;
    
    @Column(name = "productCategory" , nullable=false)
    private String productCategory;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public boolean isShowSalePrice() {
		return showSalePrice;
	}

	public void setShowSalePrice(boolean showSalePrice) {
		this.showSalePrice = showSalePrice;
	}

	public double getSalePrice() {
		return salePrice;
	}

	public void setSalePrice(double salePrice) {
		this.salePrice = salePrice;
	}

	public boolean isShowPurchasePrice() {
		return showPurchasePrice;
	}

	public void setShowPurchasePrice(boolean showPurchasePrice) {
		this.showPurchasePrice = showPurchasePrice;
	}

	public double getPurchasePrice() {
		return purchasePrice;
	}

	public void setPurchasePrice(double purchasePrice) {
		this.purchasePrice = purchasePrice;
	}

	public String getProductCategory() {
		return productCategory;
	}

	public void setProductCategory(String productCategory) {
		this.productCategory = productCategory;
	}

	@Override
	public String toString() {
		return "Product [id=" + id + ", productName=" + productName + ", showSalePrice=" + showSalePrice
				+ ", salePrice=" + salePrice + ", showPurchasePrice=" + showPurchasePrice + ", purchasePrice="
				+ purchasePrice + ", productCategory=" + productCategory + "]";
	}

	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Product(String productName, boolean showSalePrice, double salePrice, boolean showPurchasePrice,
			double purchasePrice, String productCategory) {
		super();
		this.productName = productName;
		this.showSalePrice = showSalePrice;
		this.salePrice = salePrice;
		this.showPurchasePrice = showPurchasePrice;
		this.purchasePrice = purchasePrice;
		this.productCategory = productCategory;
	}
	 public Product(Long id) {
	        this.id = id;
	    }
    
    

    // Getters and setters

    // You can also add constructors, equals, hashCode, etc.
}