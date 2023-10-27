package com.example.school_management.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name="students")
@AllArgsConstructor
public class Student extends User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "student_id")
    private Integer id;

    private double mark;
    private boolean passed;

    @JsonIgnore
    @OneToMany(mappedBy = "student",fetch = FetchType.EAGER)
    List<Inscription> inscriptions;

    public Student(String firstName, String lastName,   String phone, String email ,String password) {
        super(firstName, lastName, phone,email, password);
    }
}
