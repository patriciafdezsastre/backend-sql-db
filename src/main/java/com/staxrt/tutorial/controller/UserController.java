package com.staxrt.tutorial.controller;

import com.staxrt.tutorial.exception.ResourceNotFoundException;
import com.staxrt.tutorial.model.User;
import com.staxrt.tutorial.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v2")

public class UserController {

  @Autowired
  private UserRepository userRepository;

  @GetMapping("/user/{id}")
  public User getUser(@PathVariable(value = "id") Long id) throws ResourceNotFoundException {
    User usuario = userRepository
        .findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("Usuario not found on : " + id));

    return usuario;
  }

  @PutMapping("/user/{id}/{name}")
  public ResponseEntity<User> updateUser(@PathVariable(value = "id") Long id, @PathVariable(value = "name") String name)
      throws ResourceNotFoundException {
    User user = userRepository
        .findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("User not found on : " + id));

    user.setUsername(name);
    final User updatedUser = userRepository.save(user);
    return ResponseEntity.ok(updatedUser);
  }

  @DeleteMapping("/user/delete/{id}")
  public ResponseEntity<Boolean> deleteUser(@PathVariable(value = "id") Long id)
      throws ResourceNotFoundException {
    this.userRepository.deleteById(id);

    return ResponseEntity.ok(Boolean.TRUE);
  }

  @PutMapping("/user/saldo/{id}/{saldo}")
  public ResponseEntity<User> updateUser(@PathVariable(value = "id") Long id, @PathVariable(value = "saldo") Long saldo)
      throws ResourceNotFoundException {
    User user = userRepository
        .findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("User not found on : " + id));

    user.setSaldo(saldo);

    final User updatedUser = userRepository.save(user);
    return ResponseEntity.ok(updatedUser);
  }

}
