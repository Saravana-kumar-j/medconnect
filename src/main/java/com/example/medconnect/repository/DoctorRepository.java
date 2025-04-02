package com.example.medconnect.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.medconnect.model.Doctor;
import java.util.List;


@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Long> {

    @Query("SELECT d FROM Doctor d WHERE " +
        "(:specialty IS NULL OR d.specialty = :specialty) AND " +
        "(:location IS NULL OR d.location = :location)")
    List<Doctor> findDoctors(@Param("specialty") String specialty, 
                            @Param("location") String location);
}

