package com.wecp.eventmanagementsystem.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;


public class Allocation {

    private Long allocationID;

    private Event event;

    private Resource resource;

    private int quantity;


    public Long getAllocationID() {
        return allocationID;
    }

    public void setAllocationID(Long allocationID) {
        this.allocationID = allocationID;
    }

    public Event getEvent() {
        return event;
    }

    public void setEvent(Event event) {
        this.event = event;
    }

    public Resource getResource() {
        return resource;
    }

    public void setResource(Resource resource) {
        this.resource = resource;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}
