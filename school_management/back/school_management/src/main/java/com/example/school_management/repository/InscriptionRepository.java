package com.example.school_management.repository;

import com.example.school_management.model.Inscription;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface InscriptionRepository extends JpaRepository<Inscription,Integer> {
//    @Query("SELECT * FROM Inscription enrollement WHERE enrollement.cours = ?1")
//    List<Inscription> findEnrollementByCourse(Cours cours);

    List<Inscription> findAllByCoursId(Integer id);
    List<Inscription> findAllByStudentId(Integer id);
    Optional<Inscription> findById(Integer id);


}
