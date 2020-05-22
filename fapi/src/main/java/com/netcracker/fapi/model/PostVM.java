package com.netcracker.fapi.model;

import lombok.Builder;
import lombok.Data;

import java.sql.Timestamp;
import java.util.HashSet;
import java.util.Set;

@Data
@Builder
public class PostVM {
    private long ID;
    private UserVM author;
    private String description;
    private Timestamp date;
    private Set<Hashtag> hashtags = new HashSet<>();
    private Set<String> photoURIs = new HashSet<>();
}
