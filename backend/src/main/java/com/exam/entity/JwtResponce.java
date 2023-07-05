package com.exam.entity;

public class JwtResponce {

	String token;

	public JwtResponce() {
		super();
	}

	public JwtResponce(String token) {
		super();
		this.token = token;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}
	
	
}
