package com.example.school_management.controller;

import com.example.school_management.model.*;
import com.example.school_management.repository.*;
import com.example.school_management.service.AdminService;
import com.example.school_management.service.StudentService;
import jakarta.annotation.PostConstruct;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@Data
@RestController
@CrossOrigin(origins = "http://localhost:4200/")
@RequestMapping("/admin")
public class AdminController {
    @Autowired
    private StudentService studentService;
    @Autowired
    private AdminService adminService;
    @Autowired

    AdminRepository adminRepository;
    @Autowired

    private StudentRepository studentRepository;
    @Autowired

    private CoursRepository coursRepository;
    @Autowired

    private ProfRepository profRepository;
    @Autowired

    private InscriptionRepository inscriptionRepository;
    @PostConstruct
    public void initData(){
        if(this.studentRepository.findAll().isEmpty()) {

            Admin admin = new Admin("admin", "user", "12345678", "admin@gmail.com", "12345678");

            Prof prof1 = new Prof("Mr", "Atlas", "123456789", "atlas@gmail.com", "12345678");
            Prof prof2 = new Prof("Mr", "Nejoui", "123456789", "nejoui@gmail.com", "12345678");
            Prof prof3 = new Prof("Mr", "Smith", "987654321", "smith@gmail.com", "98765432");
            Prof prof4 = new Prof("Ms", "Johnson", "567891234", "johnson@gmail.com", "56789123");

            Cours cours1 = new Cours("JEE", prof1);
            Cours cours2 = new Cours("Angular", prof2);
            Cours cours3 = new Cours("Spring", prof1);
            Cours cours4 = new Cours("React", prof2);
            Cours cours5 = new Cours("Node.js", prof3);
            Cours cours6 = new Cours("Vue.js", prof4);

            Student student1 = new Student("Amina", "Amina", "123456789", "amina@gmail.com", "12345678");
            Student student2 = new Student("Fatima Zahra", "El Hichami", "123456789", "fzh@gmail.com", "12345678");
            Student student3 = new Student("John", "Doe", "987654321", "john.doe@gmail.com", "98765432");
            Student student4 = new Student("Alice", "Johnson", "567891234", "alice.johnson@gmail.com", "56789123");
            Student student5 = new Student("Bob", "Smith", "111223344", "bob.smith@gmail.com", "11122334");
            Student student6 = new Student("Ella", "Davis", "999888777", "ella.davis@gmail.com", "99988877");
            Student student7 = new Student("David", "Brown", "777666555", "david.brown@gmail.com", "77766655");
            Student student8 = new Student("Emma", "Williams", "444333222", "emma.williams@gmail.com", "44433322");
            Student student9 = new Student("Oliver", "Jones", "666555444", "oliver.jones@gmail.com", "66655544");
            Student student10 = new Student("Sophia", "Moore", "222111000", "sophia.moore@gmail.com", "22211100");

            Inscription inscription1 = new Inscription(student1, cours1, 17);
            Inscription inscription2 = new Inscription(student1, cours2, 15);
            Inscription inscription3 = new Inscription(student2, cours1, 12);
            Inscription inscription4 = new Inscription(student2, cours4, 18);
            Inscription inscription5 = new Inscription(student3, cours3, 16);
            Inscription inscription6 = new Inscription(student3, cours5, 14);
            Inscription inscription7 = new Inscription(student4, cours2, 19);
            Inscription inscription8 = new Inscription(student4, cours6, 20);
            Inscription inscription9 = new Inscription(student5, cours1, 15);
            Inscription inscription10 = new Inscription(student5, cours3, 13);
            Inscription inscription11 = new Inscription(student6, cours4, 18);
            Inscription inscription12 = new Inscription(student6, cours6, 17);
            Inscription inscription13 = new Inscription(student7, cours2, 16);
            Inscription inscription14 = new Inscription(student7, cours4, 19);
            Inscription inscription15 = new Inscription(student8, cours1, 14);
            Inscription inscription16 = new Inscription(student8, cours5, 17);
            Inscription inscription17 = new Inscription(student9, cours2, 20);
            Inscription inscription18 = new Inscription(student9, cours6, 16);
            Inscription inscription19 = new Inscription(student10, cours3, 18);
            Inscription inscription20 = new Inscription(student10, cours5, 15);

            // Save all the data to your repositories
            if(this.profRepository.findAll().isEmpty()) {
                adminRepository.save(admin);
                profRepository.saveAll(Arrays.asList(prof1, prof2, prof3, prof4));
                coursRepository.saveAll(Arrays.asList(cours1, cours2, cours3, cours4, cours5, cours6));
            }

             studentRepository.saveAll(Arrays.asList(student1, student2, student3, student4, student5, student6, student7, student8, student9, student10));
             inscriptionRepository.saveAll(Arrays.asList(inscription1, inscription2, inscription3, inscription4, inscription5, inscription6, inscription7, inscription8, inscription9, inscription10, inscription11, inscription12, inscription13, inscription14, inscription15, inscription16, inscription17, inscription18, inscription19, inscription20));

        }


    }


    @GetMapping("/students")
    public ResponseEntity<List<Student>> getAllStudents() {
        List<Student> students = adminService.getAllStudents();
        return ResponseEntity.ok(students);
    }

    @GetMapping("/students/{id}")
    public ResponseEntity<Student> getStudent(@PathVariable Integer id) {
       Student student = adminService.getStudentById(id);
       System.out.println("i am being called");
        if (student != null) {
            System.out.println("the student exists");

            return ResponseEntity.ok(student);

        } else {
            System.out.println("the student dosent");

            return ResponseEntity.notFound().build();

        }    }
    @GetMapping("/courses")
    public ResponseEntity<List<Cours>> getAllCourses() {
        List<Cours> courses = adminService.getAllCourses();
        return ResponseEntity.ok(courses);
    }
    @GetMapping(value ="/professors")
    public ResponseEntity<List<Prof>> getAllProfessors() {
        List<Prof> professors = adminService.getAllProfessors();
        return ResponseEntity.ok(professors);
    }




    @PostMapping(value ="/students")
    public ResponseEntity<Student> createStudent(@RequestBody Student student) {
        Student createdStudent = adminService.createStudent(student);
        System.out.printf("i am creating it");
        return ResponseEntity.status(HttpStatus.CREATED).body(createdStudent);
    }
    @DeleteMapping(value = "/students/delete/{id}")
    public ResponseEntity<String> deleteStudent(@PathVariable Integer id){
        adminService.deleteStudent(id);
        return ResponseEntity.ok("Student was deleted");
    }
    @PutMapping(value ="/students/edit/{id}")
    public ResponseEntity<String> updateStudent(@PathVariable Integer id,@RequestBody Student student){
        adminService.updateStudent(id,student);
        return ResponseEntity.ok("Student was updated");
    }
    @GetMapping(value ="/inscriptions")
    public ResponseEntity<List<Inscription>> getInscriptions() {

        return ResponseEntity.status(HttpStatus.CREATED).body(inscriptionRepository.findAll());
    }
}
