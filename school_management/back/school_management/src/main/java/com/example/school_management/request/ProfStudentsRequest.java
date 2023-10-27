package com.example.school_management.request;


import lombok.*;

@Getter
@Setter
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProfStudentsRequest {
    private int inscriptionId;
    private double note;
}
