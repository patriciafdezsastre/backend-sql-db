package com.staxrt.tutorial.repository;

import com.staxrt.tutorial.model.Viajes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * The interface Vehiculo repository.
 *
 * @author Givantha Kalansuriya
 */
@Repository
public interface ViajesRepository extends JpaRepository<Viajes, Long> {}
