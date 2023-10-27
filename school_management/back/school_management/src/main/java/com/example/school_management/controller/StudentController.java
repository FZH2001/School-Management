package com.example.school_management.controller;


import com.example.school_management.model.Inscription;
import com.example.school_management.service.AdminService;
import com.example.school_management.service.ProfService;
import com.example.school_management.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/student")
public class StudentController {
    @Autowired
    StudentService studentService;
    @Autowired
    ProfService profService;
    @Autowired
    AdminService adminService;


//    @PostConstruct
//    public void initStudents(){
//        studentService.initStudents();
//    }
    @GetMapping(value ="/{studentId}")
    public ResponseEntity<List<Inscription>> getNotes (@PathVariable Integer studentId){


         return ResponseEntity.ok(studentService.getNotes(studentId));
     }

    }

