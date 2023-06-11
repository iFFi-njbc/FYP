package com.FYP.AIA.dto;

public class SignupRequest {
    private String email;
    private String password;
    private String username;
    private String phoneNumber;


  

	@Override
	public String toString() {
		return "SignupRequest [email=" + email + ", password=" + password + ", username=" + username + ", phoneNumber="
				+ phoneNumber + "]";
	}

	public SignupRequest() {
		super();
		// TODO Auto-generated constructor stub
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

	public SignupRequest(String email, String password, String username, String phoneNumber) {
		super();
		this.email = email;
		this.password = password;
		this.username = username;
		this.phoneNumber = phoneNumber;
	}

    // Getters and Setters
}
