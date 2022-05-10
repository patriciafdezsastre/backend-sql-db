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
@Table(name = "viajes")
@EntityListeners(AuditingEntityListener.class)
public class Viajes {

    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id_viaje;

    //@ManyToOne
    //@JoinColumn(name="user_id")
    //private User user;

    @Column(name = "fecha", nullable = false)
    private Timestamp fecha;

    @Column(name = "tiempo", nullable = true)
    private float tiempo;

    @Column(name = "longitudinicio", nullable = false)
    private Double longitudinicio;

    @Column(name = "latitudinicio", nullable = false)
    private Double latitudinicio;

    @Column(name = "longitudfinal", nullable = true)
    private Double longitudfinal;

    @Column(name = "latitudfinal", nullable = true)
    private Double latitudfinal;

    @Column(name = "tiempoalquilado", nullable = true)
    private long tiempoalquilado;

    @Column(name = "coste", nullable = true)
    private double coste;

    public Viajes() {
    }

    public Viajes(Timestamp fecha, Double longitudinicio, Double latitudinicio) {
        this.fecha = fecha;
        this.longitudinicio = longitudinicio;
        this.latitudinicio = latitudinicio;
        this.latitudfinal = 0.0;
        this.longitudfinal = 0.0;
    }

    public long getId(){
        return this.id_viaje;
    }

    public void setId(long id) {
        this.id_viaje = id;
    }
    
    public Timestamp getFecha() {
        return this.fecha;
    }

    public void setFecha(Timestamp fecha) {
        this.fecha = fecha;
    }

    public float getTiempo() {
        return this.tiempo;
    }

    public void setTiempo(float tiempo) {
        this.tiempo = tiempo;
    }

    public Double getLatitudinicio() {
        return this.latitudinicio;
    }

    public void setLatitudinicio(Double latitudinicio) {
        this.latitudinicio = latitudinicio;
    }

    public Double getLongitudinicio() {
      return this.longitudinicio;
    }

    public void setLongitudinicio(Double longitudinicio) {
        this.longitudinicio = longitudinicio;
    }

    public long getTiempoAlquilado() {
        return this.tiempoalquilado;
    }

    public void setTiempoAlquilado(long tiempoalquilado) {
        this.tiempoalquilado = tiempoalquilado;
    }

    public double getCoste() {
        return this.coste;
    }

    public void setCoste (double coste) {
        this.coste = coste;
    }
    //implementar getters y setters

}

/* use users_database;
SHOW TABLES;
SELECT * FROM users;
*/
