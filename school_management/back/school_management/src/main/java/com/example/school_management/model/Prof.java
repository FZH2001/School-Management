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
@Table(name="professors")
public class Prof extends User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "prof_id")
    private Integer id;


    @JsonIgnore
    @OneToMany(mappedBy = "prof",fetch = FetchType.EAGER )
    private List<Cours> courses;
    public Prof(String firstName, String lastName,String phone, String email, String password) {
        super(firstName, lastName,phone, email, password);

    }




}
