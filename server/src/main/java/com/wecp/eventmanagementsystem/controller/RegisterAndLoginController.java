package com.wecp.eventmanagementsystem.controller;


import com.wecp.eventmanagementsystem.dto.LoginRequest;
import com.wecp.eventmanagementsystem.dto.LoginResponse;
import com.wecp.eventmanagementsystem.entity.User;
import com.wecp.eventmanagementsystem.jwt.JwtUtil;
// import com.wecp.eventmanagementsystem.jwt.JwtUtil;
import com.wecp.eventmanagementsystem.service.UserService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
public class RegisterAndLoginController {

    @Autowired
    private UserService userService;  
    

    
    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/api/user/register")
    public ResponseEntity<User> registerUser(@RequestBody User user) {
       // register user and return the registered user with status code 201 created
       return new ResponseEntity<>(userService.registerUser(user),HttpStatus.CREATED);
    }

    @PostMapping("/api/user/login")
    public ResponseEntity<LoginResponse> loginUser(@RequestBody LoginRequest loginRequest) {
         // login user and return the login response with status code 200 ok
        // if authentication fails, return status code 401 unauthorized
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword())
            );
        } catch (AuthenticationException e) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid username or password", e);
        }
 
        final UserDetails userDetails = userService.loadUserByUsername(loginRequest.getUsername());
        final String token = jwtUtil.generateToken(userDetails.getUsername());
 
        User user = userService.getUserByUsername(loginRequest.getUsername());
 
        return ResponseEntity.ok(new LoginResponse(token, user.getUsername(), user.getEmail(), user.getRole()));
    }
    @GetMapping("/api/users")
    public ResponseEntity<List<User>> getAllUser(){
        return new ResponseEntity<>(userService.getAllUser(),HttpStatus.OK) ;
    }

    @PutMapping("/api/user/{userId}")
    public ResponseEntity<User> updateUser(@PathVariable Long userId,@RequestBody User user){
       return new ResponseEntity<>(userService.updateUser(userId, user),HttpStatus.CREATED);
    }
}
