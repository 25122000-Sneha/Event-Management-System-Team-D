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


public class UserService implements UserDetailsService {


    public User registerUser(User user) {
        // encode a password before saving
        // then register the user
    }

    public User getUserByUsername(String username) {
      // get user by username
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // load UserDetails by username
    }
}
