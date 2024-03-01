package com.wecp.eventmanagementsystem.controller;

import com.wecp.eventmanagementsystem.entity.Allocation;
import com.wecp.eventmanagementsystem.entity.Event;
import com.wecp.eventmanagementsystem.service.EventService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ClientController {

    @Autowired
    private EventService eventService;


    @GetMapping("/api/client/booking-details/{eventId}")
    @PreAuthorize("hasAuthority('CLIENT')")
    public ResponseEntity<Event> getBookingDetails(@PathVariable Long eventId) {
        // get event details by event id and return with status code 200 OK
        return new ResponseEntity<Event>(eventService.getEventDetails(eventId), HttpStatus.OK);
    }

    @GetMapping("/api/client/allocation/{eventId}")
    public ResponseEntity<List<Allocation>> getAllAllocationByEventId(@PathVariable Long eventId) {
        return new ResponseEntity<>(eventService.getAllocationsByEventId(eventId),HttpStatus.OK);
    }
}
