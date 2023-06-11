package com.FYP.AIA.dto;

public class UserDTO {
    private String username;
    private String phoneNumber;
    private String email;
    private String password;
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public UserDTO(String username, String phoneNumber, String email, String password) {
		super();
		this.username = username;
		this.phoneNumber = phoneNumber;
		this.email = email;
		this.password = password;
	}
	public UserDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "UserDTO [username=" + username + ", phoneNumber=" + phoneNumber + ", email=" + email + ", password="
				+ password + "]";
	}

    // Getters and setters
}

