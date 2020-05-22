package com.netcracker.backend.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "mo_report_status", schema = "momentum")
public class ReportStatus {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long ID;

    @Enumerated(EnumType.STRING)
    private UserStatusEnum status;
}
