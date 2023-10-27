package com.example.school_management.service;

import com.example.school_management.model.Cours;
import com.example.school_management.model.Inscription;
import com.example.school_management.model.Prof;
import com.example.school_management.model.Student;
import com.example.school_management.repository.CoursRepository;
import com.example.school_management.repository.InscriptionRepository;
import com.example.school_management.repository.ProfRepository;
import com.example.school_management.repository.StudentRepository;
import lombok.Data;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Data
@Transactional
public class AdminService {
    private final ProfRepository profRepository;
    private final StudentRepository studentRepository;
    private final CoursRepository coursRepository;
    private final InscriptionRepository inscriptionRepository;
    public List<Student> getAllStudents() {

        return studentRepository.findAll();
    }
    public List<Cours> getAllCourses() {

        return coursRepository.findAll();
    }
    public List<Prof> getAllProfessors() {

        return profRepository.findAll();
    }


    public Student createStudent(Student student) {
        return studentRepository.save(student);
    }

    public void deleteStudent(Integer id) {
        Optional<Student> student=studentRepository.findById(id);
        List<Inscription> inscriptions=inscriptionRepository.findAllByStudentId(id);
        if(student.isPresent()){
            studentRepository.delete(student.get());
            inscriptionRepository.deleteAll(inscriptions);
        }
        else{
            System.out.println("the student is not found");
        }

    }
    public Student updateStudent(Integer id,Student student){
        Optional<Student> studentToUpdate = studentRepository.findById(id);
        if (studentToUpdate.isPresent()) {
            Student student1=studentToUpdate.get();
            student1.setFirstName(student.getFirstName());
            student1.setLastName(student.getLastName());
            student1.setMark(student.getMark());
            student1.setEmail(student.getEmail());
            student1.setPhone(student.getPhone());


            return studentRepository.save(student1);
    }
        return studentRepository.save(student);
    }

    public Student getStudentById(Integer id) {
            return studentRepository.findById(id).get();

    }
}



