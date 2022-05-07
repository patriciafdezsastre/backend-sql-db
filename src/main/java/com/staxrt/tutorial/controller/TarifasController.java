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
import com.staxrt.tutorial.model.Tarifas;
import com.staxrt.tutorial.repository.TarifasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * The type Tarifas controller.
 *
 * @author Givantha Kalansuriya
 */
@RestController
@RequestMapping("/api/v1")
public class TarifasController {

  @Autowired
  private TarifasRepository tarifasRepository;

  /**
   * Get tarifa by tipo vehiculo
   *
   * @return the tarifa
   */
  @GetMapping("/tarifas/{tipo}")
  public Double getTarifaByTipo(@PathVariable(value = "tipo") String tipoVeh) throws ResourceNotFoundException {
    Tarifas tarifa = tarifasRepository.findById(tipoVeh)
      .orElseThrow(() -> new ResourceNotFoundException("Tarifa not found on :: " + tipoVeh));

    return tarifa.getTarifa();
  }

}