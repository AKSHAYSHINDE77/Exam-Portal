package com.exam.helper;

public class UserFoundException extends Exception{
	
	public UserFoundException() {
		super("Usr with this username is already there in DB !! try with another name");
	}
	
	public UserFoundException(String message) {
		super(message);
	}

}
