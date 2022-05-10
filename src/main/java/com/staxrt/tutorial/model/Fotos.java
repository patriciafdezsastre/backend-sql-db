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

// import javax.imageio.ImageIO;
import javax.persistence.*;

// import java.sql.Blob;
// import java.sql.Timestamp;

/**
 * The type Fotos.
 *
 * @author Givantha Kalansuriya
 */
@Entity
@Table(name = "fotos")
@EntityListeners(AuditingEntityListener.class)
public class Fotos {

    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "user_id", nullable = false)
    private long user_id;

    @Column(name = "vehiculo_id", nullable = false)
    private long vehiculo_id;

    @Lob
    @Column(name = "imagen", nullable = false)
    private String imagen;

    public Fotos() {

    }

    public Fotos( long user_id, long vehiculo_id, String imagen) {
        this.user_id = user_id;
        this.vehiculo_id = vehiculo_id;
        this.imagen = imagen;
    }
    
    //implementar getters y setters
    public long getId() {
        return this.id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getUserId() {
        return this.user_id;
    }

    public void setUserId(long user_id) {
        this.user_id = user_id;
    }

    public long getVehiculoId() {
        return this.vehiculo_id;
    }

    public void setVehiculoId(long vehiculo_id) {
        this.vehiculo_id = vehiculo_id;
    }
    
    public String getImagen() {
        return this.imagen;
    }

    public void setImagen(String imagen) {
        this.imagen = imagen;
    }
}

/* use users_database;
SHOW TABLES;
SELECT * FROM users;
*/
