package com.example.itjuana

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.json.JsonParser
import org.springframework.boot.json.JsonParserFactory
import org.springframework.boot.runApplication
import org.springframework.web.bind.annotation.*
import org.springframework.web.bind.annotation.RestController
import java.util.*


@SpringBootApplication
class ItjuanaApplication

fun main(args: Array<String>) {
    runApplication<ItjuanaApplication>(*args)
}

@RestController
class RestController {

    @Autowired // This means to get the bean called userRepository
    // Which is auto-generated by Spring, we will use it to handle the data
    private val userRepository: UserRepository? = null
    private val springParser: JsonParser = JsonParserFactory.getJsonParser()


    @RequestMapping( value = ["/"], produces = [ "application/json" ],method = [RequestMethod.GET])
    fun apiTest(): HashMap<String, String> {
        val map = HashMap<String, String>()
        map["key"] = "itijuana"
        map["name"] = "test"
        map["author"] = "ivan"
        return map
    }

    @CrossOrigin(maxAge = 3600)
    @RequestMapping( value = ["/User"], produces = [ "application/json" ],method = [RequestMethod.GET])
    fun getUsers(): Any {
        val map = HashMap<String, String>()

        if (userRepository != null) {
            return userRepository.findAll()
        }
        map["key"] = "getusers"
        map["error"] = "userrepo null"


        return map
    }
    @CrossOrigin(maxAge = 3600)
    @RequestMapping( value = ["/User/{id}"], produces = [ "application/json" ],method = [RequestMethod.GET])
    fun getUserById(@PathVariable id: Int): Optional<User?>? {
        return userRepository?.findById(id)
    }
    @CrossOrigin(maxAge = 3600)
    @RequestMapping( value = ["/User"], produces = [ "application/json" ],method = [RequestMethod.POST])
    fun addUser(@RequestBody  requestString: String): User {
        println(requestString)
        val map: Map<String, Any> = springParser.parseMap(requestString)
        val n = User()
        n.firstName = map["firstName"] as String?
        n.lastName = map["firstName"] as String?
        n.email = map["email"] as String?
        userRepository!!.save(n)
        return n
    }
    @CrossOrigin(maxAge = 3600)
    @RequestMapping( value = ["/User/{id}"], produces = [ "application/json" ],method = [RequestMethod.DELETE])
    fun delUser(@PathVariable id: Int): HashMap<String, String> {
        val map = HashMap<String, String>()

        if (userRepository != null) {
            userRepository.deleteById(id)
            map["key"] = "delUser"
            map["error"] = ""
        }else{
            map["key"] = "delUser"
            map["error"] = "userrepo null"
        }

        return map
    }
    @CrossOrigin(maxAge = 3600)
    @RequestMapping( value = ["/User/{id}"], produces = [ "application/json" ],method = [RequestMethod.PUT])
    fun updateUser(@PathVariable id: Int,@RequestBody  requestString: String): User {
        val map: Map<String, Any> = springParser.parseMap(requestString)
        val n = User()
        n.firstName = map["firstName"] as String?
        n.lastName = map["firstName"] as String?
        n.email = map["email"] as String?
        n.id = id
        userRepository?.save(n)
        return n;
    }


}
