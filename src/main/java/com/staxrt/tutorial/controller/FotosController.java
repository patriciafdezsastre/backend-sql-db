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

import java.util.List;

import com.staxrt.tutorial.exception.ResourceNotFoundException;
import com.staxrt.tutorial.model.Fotos;
import com.staxrt.tutorial.repository.FotosRepository;
import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

// import javax.validation.Valid;

// import java.sql.Blob;
// import java.util.Date;
// import java.util.HashMap;
// import java.util.List;
// import java.util.Map;

/**
 * The type Fotos controller.
 *
 * @author Givantha Kalansuriya
 */
@RestController
@RequestMapping("/api/v1")
public class FotosController {

  @Autowired
  private FotosRepository fotosRepository;

  @PostMapping("/fotos/{user_id}/{vehiculo_id}")
  public void addFotos(@PathVariable(value = "user_id") Long user_id, @PathVariable(value = "vehiculo_id") Long vehiculo_id, @RequestBody String imagen) {
    System.out.println("hola");
    // Long id = fotosRepository.count()+1;
    Fotos foto = new Fotos( user_id, vehiculo_id, imagen);
    fotosRepository.save(foto);
  }

  @GetMapping("/fotos")
  public List<Fotos> getFotos()  {
    return fotosRepository.findAll();
  }

  @GetMapping("/fotos/{vehiculo_id}")
  public boolean isFotoAlready(@PathVariable(value = "vehiculo_id") Long vehiculo_id)  {
    List<Fotos> fotos = fotosRepository.findAll();
    for (int i=0; i<fotos.size(); i++) {
      if (fotos.get(i).getVehiculoId() == vehiculo_id) {
        return true;
      }
    }
    return false;
  }

  @DeleteMapping("/fotos/{id}")
  public void deleteFoto(@PathVariable(value = "id") Long fotoId) throws ResourceNotFoundException {
    Fotos foto = fotosRepository
      .findById(fotoId)
      .orElseThrow(() -> new ResourceNotFoundException("Vehiculo not found on :: " + fotoId));
    fotosRepository.delete(foto);    
  }
}
