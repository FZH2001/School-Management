package com.example.school_management.service;


import com.example.school_management.model.Inscription;
import com.example.school_management.repository.CoursRepository;
import com.example.school_management.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class StudentService {
    @Autowired
    private  CoursRepository coursRepository;
    @Autowired
    private StudentRepository studentRepository;

    public List<Inscription> getNotes(Integer studentId){

        return  studentRepository.findById(studentId).get().getInscriptions();
    }

}
