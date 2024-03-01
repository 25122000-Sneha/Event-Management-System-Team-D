package com.wecp.eventmanagementsystem.repository;


import com.wecp.eventmanagementsystem.entity.Allocation;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


@Repository
public interface AllocationRepository  extends JpaRepository<Allocation,Long> {
    // extend jpa repository and add custom methods if needed
    @Query("SELECT A FROM Allocation A WHERE A.event.eventID=:eventID")
    public List<Allocation> findByEvent(@Param("eventID") Long eventID);
}
