package com.example.school_management.controller;

import com.example.school_management.model.Cours;
import com.example.school_management.model.Inscription;
import com.example.school_management.request.ProfStudentsRequest;
import com.example.school_management.service.ProfService;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@Data
@RestController
@RequestMapping("/prof")
@CrossOrigin(origins = "http://localhost:4200")
public class ProfController {
    @Autowired
    public ProfService profService;

    @PostMapping(value ="/students")
    public ResponseEntity<List<Inscription>> getMyStudents(@RequestBody ProfStudentsRequest profRequest) {
        List<Inscription> inscriptions = new ArrayList<>();
            //    profService.getMyStudents(profRequest.getProfId(),profRequest.getCourseId());
        System.out.printf("i am getting my students");
        return ResponseEntity.ok(inscriptions);
    }

    @GetMapping(value ="/{profId}/courses")
    public ResponseEntity<List<Cours>> getCourses(@PathVariable Integer profId) {
        List<Cours> courses = profService.getMyCourses(profId);
        return ResponseEntity.ok(courses);
    }
    @GetMapping(value ="/{profId}/courses/{courseId}")
    public ResponseEntity<List<Inscription>> getCourseStudents(@PathVariable Integer profId,@PathVariable Integer courseId){

        List<Inscription> inscriptions=profService.getCourseStudents(courseId);


       return ResponseEntity.ok(inscriptions);
    }

    @PutMapping(value="/editNote")
    public ResponseEntity<Inscription> updateStudentNote(@RequestBody ProfStudentsRequest request){
        Integer inscriptionId = request.getInscriptionId();
        double note = request.getNote();
        Inscription inscription=profService.updateStudentNote(inscriptionId,note);


        return ResponseEntity.ok(inscription);
    }
}
