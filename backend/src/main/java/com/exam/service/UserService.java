package com.exam.service;

import java.util.Set;

import com.exam.entity.User;
import com.exam.entity.UserRole;

public interface UserService {

	//create user
	public User createUser(User user, Set<UserRole> userRoles) throws Exception;
	
	//get User
	public User getUser(String username);
	
	//delete user
	public  void deleteUser(Long userId);
}
