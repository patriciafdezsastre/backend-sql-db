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

package com.staxrt.tutorial.model;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.sql.Timestamp;

/**
 * The type Viajes.
 *
 * @author Givantha Kalansuriya
 */
@Entity
@Table(name = "tarifas")
@EntityListeners(AuditingEntityListener.class)
public class Tarifas {

    @Id
    private String nombre_tarifa;

    @Column(name = "tarifa", nullable = false)
    private Double tarifa;

    public Tarifas() {

    }
    
    //implementar getters y setters
    public Double getTarifa() {
        return this.tarifa;
    }

    public void setTarifa(Double tarifa) {
        this.tarifa = tarifa;
    }

    public String getNombreTarifa() {
        return this.nombre_tarifa;
    }

    public void setNombreTarifa(String nombre_tarifa) {
        this.nombre_tarifa = nombre_tarifa;
    }
}