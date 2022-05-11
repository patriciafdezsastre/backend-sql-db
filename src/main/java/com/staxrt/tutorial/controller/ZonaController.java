package com.staxrt.tutorial.controller;

import java.util.List;

import com.staxrt.tutorial.exception.ResourceNotFoundException;
import com.staxrt.tutorial.model.Zona;
import com.staxrt.tutorial.repository.ZonaRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v3")

public class ZonaController {

    @Autowired
    private ZonaRepository zonaRepository;

    @GetMapping("/zona/{latitud}/{longitud}")
    public Boolean getZona(@PathVariable(value = "latitud") Double latitud,
            @PathVariable(value = "longitud") Double longitud) throws ResourceNotFoundException {
        List<Zona> lista = zonaRepository.findAll();

        boolean recomendado = false;
        for (int i = 0; i < lista.size(); i++) {
            if (lista.get(i).getLatitud() == latitud && lista.get(i).getLongitud() == longitud) {
                recomendado = true;
            }
        }
        return recomendado;

    }

}
