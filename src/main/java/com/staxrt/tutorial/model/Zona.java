package com.staxrt.tutorial.model;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;

/**
 * The type Viajes.
 *
 * @author Givantha Kalansuriya
 */
@Entity
@Table(name = "zona")
@EntityListeners(AuditingEntityListener.class)
public class Zona {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id_zona;
    @Column(name = "latitud", nullable = false)
    private Double latitud;

    @Column(name = "longitud", nullable = false)
    private Double longitud;

    public Zona(Double latitud, Double longitud) {
        this.longitud = longitud;
        this.latitud = latitud;

    }

    public long getId() {
        return this.id_zona;
    }

    public void setId(long id) {
        this.id_zona = id;
    }

    public Double getLatitud() {
        return this.latitud;
    }

    public void setLatitud(Double latitud) {
        this.latitud = latitud;
    }

    public Double getLongitud() {
        return this.longitud;
    }

    public void setLongitud(Double longitud) {
        this.longitud = longitud;
    }

}
