package com.example.medconnect.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;

import com.example.medconnect.repository.AppointmentRepository;
import com.example.medconnect.repository.DoctorRepository;
import com.example.medconnect.repository.PatientRepository;
import com.example.medconnect.model.Patient;
import com.example.medconnect.model.Appointment;
import com.example.medconnect.model.Doctor;

@Service
public class AppointmentService {
    @Autowired
    private AppointmentRepository appointmentRepository;

    @Autowired
    private PatientRepository patientRepository;

    @Autowired
    private DoctorRepository doctorRepository;

    public Appointment bookAppointment(Long patientId, Long doctorId, LocalDateTime time){
        Patient patient = patientRepository.findById(patientId)
            .orElseThrow(() -> new RuntimeException("Patient Not Found"));

        Doctor doctor = doctorRepository.findById(doctorId)
            .orElseThrow(() -> new RuntimeException("Doctor Not Found"));
        
        Appointment appointment = new Appointment();
        appointment.setPatient(patient);
        appointment.setDoctor(doctor);
        appointment.setAppointmentTime(time);

        return appointmentRepository.save(appointment);
    }
}
