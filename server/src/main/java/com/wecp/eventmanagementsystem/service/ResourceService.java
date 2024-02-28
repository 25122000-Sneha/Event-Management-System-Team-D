package com.wecp.eventmanagementsystem.service;

import com.wecp.eventmanagementsystem.entity.Allocation;
import com.wecp.eventmanagementsystem.entity.Event;
import com.wecp.eventmanagementsystem.entity.Resource;
import com.wecp.eventmanagementsystem.repository.EventRepository;
import com.wecp.eventmanagementsystem.repository.ResourceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;


public class ResourceService {


    public Resource addResource(Resource resource) {
      // add resouce to database
    }

    public List<Resource> getAllResources() {
        // get all resources
    }

    public void allocateResources(Long eventId, Long resourceId, Allocation allocation) {
        // check if resource is available or not
        // if resouce is available then allocate the resource to event  and set availability to false

    }
}
