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

package com.staxrt.tutorial.controller;

import com.staxrt.tutorial.exception.ResourceNotFoundException;


import com.staxrt.tutorial.model.Viajes;
import com.staxrt.tutorial.repository.ViajesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * The type Vehiculo controller.
 *
 * @author Givantha Kalansuriya
 */
@RestController
@RequestMapping("/api/v1")
public class ViajesController {

  @Autowired
  private ViajesRepository viajesRepository;

  /**
   * Get all vehiculos list.
   *
   * @return the list
   */
  @GetMapping("/viajes/{user_id}")
  public List<Viajes> getAllViajes(@PathVariable(value = "user_id") Long user_id) {
    List<Viajes> viajes = viajesRepository.findAll();
    for(int i = 0; i < viajes.size(); i++){
      if(viajes.get(i).getUserId() != user_id){
        viajes.remove(i);
        i--;
      }
    }
    return viajes;
  }


  @GetMapping("/viaje/{id}")
  public ResponseEntity<Viajes> getViaje(@PathVariable(value = "id") Long viajeId) throws ResourceNotFoundException {
    Viajes viaje = viajesRepository
      .findById(viajeId)
      .orElseThrow(() -> new ResourceNotFoundException("Viaje not found on :: " + viajeId));
    return ResponseEntity.ok(viaje);
  }

}
