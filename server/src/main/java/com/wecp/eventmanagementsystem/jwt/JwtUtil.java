package com.wecp.eventmanagementsystem.jwt;


import com.wecp.eventmanagementsystem.entity.User;
import com.wecp.eventmanagementsystem.repository.UserRepository;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;


public class JwtUtil {


    public String generateToken(String username) {
        // generate token
    }

    public Claims extractAllClaims(String token) {
        // extract all claims from token
    }

    public String extractUsername(String token) {
        // extract username from token
    }

    public boolean isTokenExpired(String token) {
        // check token is expired
    }

    public boolean validateToken(String token, UserDetails userDetails) {
        // validate the token
    }
}