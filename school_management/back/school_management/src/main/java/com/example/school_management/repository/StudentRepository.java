package com.example.school_management.repository;

import com.example.school_management.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface StudentRepository extends JpaRepository<Student,Integer>{

    @Override
    Optional<Student> findById(Integer integer);
}
