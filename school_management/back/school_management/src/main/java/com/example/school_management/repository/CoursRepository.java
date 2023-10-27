package com.example.school_management.repository;

import com.example.school_management.model.Cours;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CoursRepository extends JpaRepository<Cours,Integer> {
    public Cours findByName(String name);
  //  public List<Cours> findCoursByProf(Integer id);

}
