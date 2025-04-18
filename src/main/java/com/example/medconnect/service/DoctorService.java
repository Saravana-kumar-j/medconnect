package com.example.medconnect.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.medconnect.model.Doctor;
import com.example.medconnect.repository.DoctorRepository;

@Service
public class DoctorService {
    @Autowired
    private DoctorRepository doctorRepository;

    public Doctor createDoctor(Doctor doctor){
        return doctorRepository.save(doctor);
    }

    public List<Doctor> searchDoctors(String specialty, String location) {
        return doctorRepository.findDoctors(
            (specialty == null || specialty.trim().isEmpty()) ? null : specialty,
            (location == null || location.trim().isEmpty()) ? null : location
        );
    }    
    
}
