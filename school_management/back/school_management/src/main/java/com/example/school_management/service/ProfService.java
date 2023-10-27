package com.example.school_management.service;

import com.example.school_management.model.Cours;
import com.example.school_management.model.Inscription;
import com.example.school_management.model.Prof;
import com.example.school_management.model.Student;
import com.example.school_management.repository.CoursRepository;
import com.example.school_management.repository.InscriptionRepository;
import com.example.school_management.repository.ProfRepository;
import com.example.school_management.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ProfService {
    @Autowired
    ProfRepository profRepository;
    @Autowired

    StudentRepository studentRepository;

    @Autowired
    CoursRepository coursRepository;
    @Autowired
    InscriptionRepository inscriptionRepository;



    public List<Cours> getMyCourses(int profId){
        List<Cours> courses=new ArrayList<>();
        if(profRepository.findById(profId).isPresent()){
            courses=  profRepository.findById(profId).get().getCourses();
        }
        return courses;
    }

        public List<Inscription> getCourseStudents(Integer id){
        System.out.println("i am trying to get the course students");
        return inscriptionRepository.findAllByCoursId(id);
}

        public Inscription updateStudentNote(Integer id,double note){
        Inscription inscription=inscriptionRepository.findById(id).get();
            inscription.setNote(note);
            return inscriptionRepository.save(inscription);


        }
}
