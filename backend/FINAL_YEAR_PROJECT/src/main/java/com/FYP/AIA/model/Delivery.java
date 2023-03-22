package com.FYP.AIA.model;

import java.time.LocalDate;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;


@Entity
@Table(name = "sales_delivery")
public class Delivery {
	
	public enum DeliveryStatus {
	    PENDING,
	    IN_TRANSIT,
	    DELIVERED,
	    IN_TRANSIT_CAPS;
		  public static DeliveryStatus fromString(String statusString) {
		        for (DeliveryStatus status : DeliveryStatus.values()) {
		            if (status.name().equalsIgnoreCase(statusString)) {
		                return status;
		            }
		        }
		        throw new IllegalArgumentException("Invalid status value: " + statusString);
		    }
	}
	


	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	
	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name = "customer_id", nullable = false)
	//@JsonManagedReference
	private Customer customer;

	
	@Column(name = "address", nullable = false)
	private String address;


	@Column(name = "date", nullable = false)
	private LocalDate date;


	@Enumerated(EnumType.STRING)
	@Column(name = "status", nullable = false)
	private DeliveryStatus status;


	@Column(name = "total_amount", nullable = false)
	private Double totalAmount;


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

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public DeliveryStatus getStatus() {
		return status;
	}

	public void setStatus(DeliveryStatus status) {
		this.status = status;
	}

	public Double getTotalAmount() {
		return totalAmount;
	}

	public void setTotalAmount(Double totalAmount) {
		this.totalAmount = totalAmount;
	}
	  public void setStatus(String statusString) {
	        this.status = DeliveryStatus.fromString(statusString);
	    }
	@Override
	public String toString() {
		return "Delivery [id=" + id + ", address=" + address + ", date=" + date + ", status=" + status
				+ ", totalAmount=" + totalAmount + "]";
	}

	public Delivery(Long id, Customer customer, String address, LocalDate date, DeliveryStatus status,
			Double totalAmount) {
		super();
		this.id = id;
		this.customer = customer;
		this.address = address;
		this.date = date;
		this.status = status;
		this.totalAmount = totalAmount;
	}

	public Delivery() {
		super();
		// TODO Auto-generated constructor stub
	}

    // constructors, getters and setters
}
