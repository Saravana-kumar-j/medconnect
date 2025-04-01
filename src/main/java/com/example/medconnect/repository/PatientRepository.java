package com.example.medconnect.repository;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.medconnect.model.Patient;

@Repository
public interface PatientRepository extends JpaRepository<Patient,Long>{
    
}
