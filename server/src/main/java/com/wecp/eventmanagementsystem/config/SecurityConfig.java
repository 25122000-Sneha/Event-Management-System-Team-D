package com.wecp.eventmanagementsystem.config;

import com.wecp.eventmanagementsystem.jwt.JwtRequestFilter;
import com.wecp.eventmanagementsystem.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfig 
{
//extends WebSecurityConfigurerAdapter {
    //private UserDetailsService userDetailsService;
    
    @Autowired
    private  JwtRequestFilter jwtRequestFilter;
 
    // @Autowired
    // private PasswordEncoder passwordEncoder;

    @Bean
    //authentication
    public UserDetailsService userDetailsService() {
       return new UserService();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http.csrf().disable()
            .authorizeRequests()
            .antMatchers("/api/user/login").permitAll()
            .antMatchers("/api/user/register").permitAll()
            .antMatchers("/api/users").permitAll()
            .antMatchers(HttpMethod.POST,"/api/planner/event").hasAuthority("PLANNER")
            .antMatchers(HttpMethod.GET,"/api/planner/events").hasAuthority("PLANNER")
            .antMatchers(HttpMethod.POST,"/api/planner/resource").hasAuthority("PLANNER")
            .antMatchers(HttpMethod.GET,"/api/planner/resources").hasAuthority("PLANNER")
            .antMatchers(HttpMethod.POST,"/api/planner/allocate-resources").hasAuthority("PLANNER")
            .antMatchers(HttpMethod.GET,"/api/staff/event-details/**").hasAuthority("STAFF")
            .antMatchers(HttpMethod.PUT,"/api/staff/update-setup/**").hasAuthority("STAFF")
            .antMatchers(HttpMethod.GET,"/api/client/booking-details/**").hasAuthority("CLIENT")
            .antMatchers("/api/**").authenticated()
            .and()
            .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            .and()
            .authenticationProvider(authenticationProvider())
            .addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class)
            .build();
    }

    @Bean
    public PasswordEncoder passwordEncoders() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }

    @Bean
    public AuthenticationProvider authenticationProvider(){
        DaoAuthenticationProvider authenticationProvider=new DaoAuthenticationProvider();
        authenticationProvider.setUserDetailsService(userDetailsService());
        authenticationProvider.setPasswordEncoder(passwordEncoders());
        return authenticationProvider;
    }
    

}