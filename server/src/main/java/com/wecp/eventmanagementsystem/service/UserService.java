package com.wecp.eventmanagementsystem.service;


import com.wecp.eventmanagementsystem.entity.User;
import com.wecp.eventmanagementsystem.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


public class UserService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;



    public User registerUser(User user) {
        // encode a password before saving
        // then register the user
        return userRepository.save(user);
    }

    public User getUserByUsername(String username) {
      // get user by username
      return userRepository.findByUsername(username);
    }
    public List<User> getAllUser(){
      return userRepository.findAll();
    }
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // load UserDetails by username
    }
}
