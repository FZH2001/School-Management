package com.example.school_management.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name="cours")

public class Cours {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cours_id")
    private Integer id;
    String name;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="prof_id")
    private Prof prof;
    public Cours(String name,Prof prof){
        this.name=name;
       this.prof=prof;
    }



}
