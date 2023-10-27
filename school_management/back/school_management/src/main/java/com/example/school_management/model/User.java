package com.example.school_management.model;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
//@AllArgsConstructor
//@Entity
@MappedSuperclass
public class User {

     String firstName;
     String lastName;

     String email;
     String password;
     String phone;


     public User(String firstName, String lastName, String phone,String email, String password) {
          this.firstName=firstName;
          this.lastName=lastName;
          this.phone=phone;
          this.email=email;
          this.password=password;
     }



}
