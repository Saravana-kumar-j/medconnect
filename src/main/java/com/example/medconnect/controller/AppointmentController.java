package com.example.medconnect.controller;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.medconnect.service.AppointmentService;
import com.example.medconnect.model.Appointment;

@RestController
@RequestMapping("/appointments")
public class AppointmentController {
    @Autowired
    private AppointmentService appointmentService;

    @PostMapping
    public Appointment bookAppointment(
        @RequestParam Long patientId, 
        @RequestParam Long doctorId, 
        @RequestParam 
        @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime time) {
            
        return appointmentService.bookAppointment(patientId, doctorId, time);
    }
}
