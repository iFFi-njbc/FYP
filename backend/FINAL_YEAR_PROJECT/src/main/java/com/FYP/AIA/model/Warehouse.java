package com.FYP.AIA.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;

@Entity
@Table(name = "warehouses")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Warehouse {
	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;
	    
	    @NotBlank(message = "Warehouse name is required")
	    private String name;
	    
	    @NotBlank(message = "Warehouse location is required")
	    private String location;
	    
	    @NotBlank(message = "Warehouse zipcode is required")
	    private String zipcode;
	    
	    @NotBlank(message = "Warehouse city is required")
	    private String city;

		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public String getLocation() {
			return location;
		}

		public void setLocation(String location) {
			this.location = location;
		}

		public String getZipcode() {
			return zipcode;
		}

		public void setZipcode(String zipcode) {
			this.zipcode = zipcode;
		}

		public String getCity() {
			return city;
		}

		public void setCity(String city) {
			this.city = city;
		}

		public Warehouse(Long id, @NotBlank(message = "Warehouse name is required") String name,
				@NotBlank(message = "Warehouse location is required") String location,
				@NotBlank(message = "Warehouse zipcode is required") String zipcode,
				@NotBlank(message = "Warehouse city is required") String city) {
			super();
			this.id = id;
			this.name = name;
			this.location = location;
			this.zipcode = zipcode;
			this.city = city;
		}

		public Warehouse() {
			super();
			// TODO Auto-generated constructor stub
		}

		@Override
		public String toString() {
			return "Warehouse [id=" + id + ", name=" + name + ", location=" + location + ", zipcode=" + zipcode
					+ ", city=" + city + "]";
		}
	    
	    // getters and setters
	}



