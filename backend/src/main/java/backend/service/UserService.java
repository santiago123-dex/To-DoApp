package backend.service;

import org.springframework.stereotype.Service;

import backend.dto.RegisterRequest;
import backend.dto.RegisterResponse;
import backend.entity.UserEntity;
import backend.repository.UserRepository;
import jakarta.transaction.Transactional;

@Service
public class UserService {
    private final UserRepository userRepository;


    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @Transactional
    public RegisterResponse registrarUsuario(RegisterRequest request){
        UserEntity user = UserEntity.builder()
            .name(request.getName())
            .email(request.getEmail())
            .password(request.getPassword())
            .build();

        userRepository.save(user);

        return new RegisterResponse(user.getName(), "");
    }


    
}
