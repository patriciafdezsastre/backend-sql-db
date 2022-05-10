package com.staxrt.tutorial.repository;

import com.staxrt.tutorial.model.Fotos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * The interface Vehiculo repository.
 *
 * @author Givantha Kalansuriya
 */
@Repository
public interface FotosRepository extends JpaRepository<Fotos, Long> {
}
