package com.wecp.eventmanagementsystem.controller;

import com.wecp.eventmanagementsystem.entity.Event;
import com.wecp.eventmanagementsystem.service.EventService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
public class StaffController {

    @Autowired
    private EventService eventService;

    @GetMapping("/api/staff/event-details/{eventId}")
    public ResponseEntity<Event> getEventDetails(@PathVariable Long eventId) {
        // get the event details by eventId and return the event with status code 200 ok
        return new ResponseEntity<>(eventService.getEventDetails(eventId), HttpStatus.OK);
    }

    @PutMapping("/api/staff/update-setup/{eventId}")
    public ResponseEntity<Event> updateEventSetup(@PathVariable Long eventId, @RequestBody Event updatedEvent) {
        // update the event setup and return the updated event with status code 200 ok
        return new ResponseEntity<>(eventService.updateEventSetup(eventId, updatedEvent), HttpStatus.OK);
    }

    @GetMapping("/api/staff/all-event-details")
    public ResponseEntity<List<Event>> getAllEventDetails() {
        // get the event details by eventId and return the event with status code 200 ok
        return new ResponseEntity<List<Event>>(eventService.getAllEvents(), HttpStatus.OK);
    }

}
