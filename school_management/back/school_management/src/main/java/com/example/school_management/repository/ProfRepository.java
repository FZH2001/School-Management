package com.example.school_management.repository;

import com.example.school_management.model.Cours;
import com.example.school_management.model.Prof;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import java.util.Arrays;
import java.util.List;

@Repository
public interface ProfRepository extends JpaRepository<Prof,Integer> {

}
