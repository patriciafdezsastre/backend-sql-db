/*
 *
 *  Copyright (c) 2018-2020 Givantha Kalansuriya, This source is a part of
 *   Staxrt - sample application source code.
 *   http://staxrt.com
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 *
 */

// package com.staxrt.tutorial.controller;

// import com.staxrt.tutorial.exception.ResourceNotFoundException;
// import com.staxrt.tutorial.model.Vehiculo;
// import com.staxrt.tutorial.repository.VehiculoRepository;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;


// import java.util.HashMap;
// import java.util.List;
// import java.util.Map;

// /**
//  * The type Vehiculo controller.
//  *
//  * @author Givantha Kalansuriya
//  */
// @RestController
// @RequestMapping("/api/v1")
// public class VehiculoController {

//   @Autowired
//   private VehiculoRepository vehiculoRepository;

  /**
   * Get vehiculo by id.
   *
   * @param vehiculoId the vehiculo id
   * @return the vehiculos by id
   * @throws ResourceNotFoundException the resource not found exception
   */
  @GetMapping("/vehiculo/{id}")
  public Vehiculo getVehiculo(@PathVariable(value = "id") Long vehiculoId) throws ResourceNotFoundException {
    Vehiculo vehiculo = vehiculoRepository
      .findById(vehiculoId)
      .orElseThrow(() -> new ResourceNotFoundException("Vehiculo not found on :: " + vehiculoId));
    
    return vehiculo;
  }

  /**
   * Gets vehiculoss by id.
   *
   * @param vehiculoId the vehiculo id
   * @return the vehiculos by id
   * @throws ResourceNotFoundException the resource not found exception
   */
 /*  @GetMapping("/vehiculo/{id}")
  public ResponseEntity<Vehiculo> dejarVehiculosById(@PathVariable(value = "id") Long vehiculoId)
      throws ResourceNotFoundException {
    Vehiculo vehiculo = vehiculoRepository
        .findById(vehiculoId)
        .orElseThrow(() -> new ResourceNotFoundException("Vehiculo not found on :: " + vehiculoId));

    vehiculo.setLibre(true);
    final Vehiculo updatedVehiculo = vehiculoRepository.save(vehiculo);
    return ResponseEntity.ok(updatedVehiculo);
  } */

  @PutMapping("/vehiculo/{id}")
  public ResponseEntity<Vehiculo> cogerVehiculosById(@PathVariable(value = "id") Long vehiculoId)
      throws ResourceNotFoundException {
    Vehiculo vehiculo = vehiculoRepository
        .findById(vehiculoId)
        .orElseThrow(() -> new ResourceNotFoundException("Vehiculo not found on :: " + vehiculoId));

    vehiculo.setLibre(false);
    final Vehiculo updatedVehiculo = vehiculoRepository.save(vehiculo);
    return ResponseEntity.ok(updatedVehiculo);
  }

  /**
   * Delete vehiculo map.
   *
   * @param vehiculoId the vehiculo id
   * @return the map
   * @throws Exception the exception
   */
  @DeleteMapping("/vehiculo/{id}")
  public Map<String, Boolean> deleteVehiculo(@PathVariable(value = "id") Long vehiculoId) throws Exception {
    Vehiculo vehiculo = vehiculoRepository
        .findById(vehiculoId)
        .orElseThrow(() -> new ResourceNotFoundException("Vehiculo not found on :: " + vehiculoId));

//     vehiculoRepository.delete(vehiculo);
//     Map<String, Boolean> response = new HashMap<>();
//     response.put("deleted", Boolean.TRUE);
//     return response;
//   }
// }
