package com.example.school_management.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Table(name="inscriptions")
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Inscription {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "student_id")
    private Student student;


    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "cours_id")
    Cours cours;
    double note ;
    public Inscription(Student student, Cours cours, double note) {
        this.student = student;
        this.cours = cours;
        this.note = note;
    }
}
