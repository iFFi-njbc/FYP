
package com.FYP.AIA.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.FYP.AIA.dto.LoginRequest;
import com.FYP.AIA.dto.SignupRequest;
import com.FYP.AIA.model.User;
import com.FYP.AIA.service.UserService;

@RestController
@RequestMapping("/api")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest loginRequest) {
        User user = userService.findByEmail(loginRequest.getEmail());

        if (user != null && user.getPassword().equals(loginRequest.getPassword())) {
            String token = generateToken(); // Replace this with your token generation logic
            return ResponseEntity.ok(token);
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
    }

    @PostMapping("/signup")
    public ResponseEntity<String> signup(@RequestBody SignupRequest signupRequest) {
        if (userService.existsByEmail(signupRequest.getEmail())) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("User already exists");
        }

        User newUser = new User(signupRequest.getEmail(), signupRequest.getPassword(),
                                signupRequest.getUsername(), signupRequest.getPhoneNumber());
        userService.save(newUser);

        return ResponseEntity.ok("Signup successful");
    }

    private String generateToken() {
        // Implement your token generation logic here
        return "SAMPLE_TOKEN";
    }
}

