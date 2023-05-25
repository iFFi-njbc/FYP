package com.FYP.AIA.dto;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import com.FYP.AIA.exceptions.CustomerNotFoundException;
import com.FYP.AIA.model.Customer;
import com.FYP.AIA.model.SalesOrder;
import com.FYP.AIA.repository.CustomerRepository;

public class SalesOrderDTO {
	
	public static CustomerRepository customerRepository;

    private Long id;
    private String customer;
    private String product;
    private Integer quantity;
    private Double unitPrice;
    private Double shippingCharges;
    private Double totalPrice;
    private LocalDate createdAt;
    private LocalDate updatedAt;

    public SalesOrderDTO() {}


    public SalesOrderDTO entityToDTO(SalesOrder salesOrder) {
        SalesOrderDTO salesOrderDTO = new SalesOrderDTO();
        salesOrderDTO.setId(salesOrder.getId());
        salesOrderDTO.setCustomer(salesOrder.getCustomer().getName()); // assuming Customer class has a name field
        salesOrderDTO.setProduct(salesOrder.getProduct());
        salesOrderDTO.setQuantity(salesOrder.getQuantity());
        salesOrderDTO.setUnitPrice(salesOrder.getUnitPrice());
        salesOrderDTO.setShippingCharges(salesOrder.getShippingCharges());
        salesOrderDTO.setTotalPrice(salesOrder.getTotalPrice());
        salesOrderDTO.setCreatedAt(salesOrder.getCreatedAt());
        salesOrderDTO.setUpdatedAt(salesOrder.getUpdatedAt());
        return salesOrderDTO;
    }

    public SalesOrder dtoToEntity(SalesOrderDTO salesOrderDTO)throws CustomerNotFoundException {
        SalesOrder salesOrder = new SalesOrder();
        salesOrder.setId(salesOrderDTO.getId());
        Customer customer = customerRepository.findByName(salesOrderDTO.getCustomer());
        if (customer == null) {
        	throw new CustomerNotFoundException(salesOrderDTO.getCustomer());
        }
        salesOrder.setCustomer(customer);
        salesOrder.setProduct(salesOrderDTO.getProduct());
        salesOrder.setQuantity(salesOrderDTO.getQuantity());
        salesOrder.setUnitPrice(salesOrderDTO.getUnitPrice());
        salesOrder.setShippingCharges(salesOrderDTO.getShippingCharges());
        salesOrder.setTotalPrice(salesOrderDTO.getTotalPrice());
        salesOrder.setCreatedAt(salesOrderDTO.getCreatedAt());
        salesOrder.setUpdatedAt(salesOrderDTO.getUpdatedAt());
        return salesOrder;
    }

    
    public List<SalesOrderDTO> convertToDtoList(List<SalesOrder> salesOrders) {
        return (List<SalesOrderDTO>)salesOrders.stream().map(this::entityToDTO).collect(Collectors.toList());
    }
    public List<SalesOrder> convertToEntityList(List<SalesOrderDTO> salesOrderDtos) {
        return (List<SalesOrder>)salesOrderDtos.stream().map(this::dtoToEntity).collect(Collectors.toList());
    }


	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCustomer() {
		return customer;
	}

	public void setCustomer(String customer) {
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

	public void setCreatedAt(LocalDate localDate) {
		this.createdAt = localDate;
	}

	public LocalDate getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(LocalDate localDate) {
		this.updatedAt = localDate;
	}

    // getters and setters

}
