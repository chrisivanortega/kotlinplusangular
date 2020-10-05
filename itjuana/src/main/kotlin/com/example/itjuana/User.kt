package com.example.itjuana

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity // This tells Hibernate to make a table out of this class
class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    var id: Int? = null
    var firstName: String? = ""
    var lastName: String? = ""
    var email: String? = ""

}