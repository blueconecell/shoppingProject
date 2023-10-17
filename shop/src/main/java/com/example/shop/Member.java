package com.example.shop;

import jakarta.persistence.*;

@Entity
@Table(name = "member")
public class Member {

    @Id
    @Column(name = "id")
    private String id;

    @Column(name = "password")
    private String password;

    public void setId(String id) {
        this.id = id;
    }

    public String getPassword() {
        return password;
    }

}
