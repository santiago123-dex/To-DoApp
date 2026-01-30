package backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import backend.dto.RegisterRequest;
import backend.dto.RegisterResponse;
import backend.service.UserService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@RequestMapping("/auth")
public class UserController {
    
    private final UserService userService;

    public UserController(UserService userService){
        this.userService = userService; 
    }   

    @PostMapping("/register")
    public ResponseEntity<RegisterResponse> registrarUsuario(@RequestBody RegisterRequest request) {
        return ResponseEntity.ok(userService.registrarUsuario(request));
    }
    
}
