package com.wecp.eventmanagementsystem.service;


import com.wecp.eventmanagementsystem.entity.Event;
import com.wecp.eventmanagementsystem.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;


public class EventService {



    public Event createEvent(Event event) {
       // save event in databse
    }

    public List<Event> getAllEvents() {
        // get all events
    }

    public Event getEventDetails(Long eventId) {
        // get event by eventId
    }

    public Event updateEventSetup(Long eventId, Event updatedEvent) {
       // update event
    }
}
