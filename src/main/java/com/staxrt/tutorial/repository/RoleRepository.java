package com.staxrt.tutorial.repository;

import java.util.Optional;

import com.staxrt.tutorial.model.ERole;
import com.staxrt.tutorial.model.Role;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
	Optional<Role> findByName(ERole name);
}
