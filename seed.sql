INSERT INTO `users_database`.`vehiculos` (`id`, `aparcadook`, `latitud`, `libre`, `longitud`, `tipo`, `tiempoalquilado`, `id_viaje_en_curso`) VALUES ('1', 1, '40.45315837994751', 1, '-3.7266484767199968', 'patinete', 0, 0);
INSERT INTO `users_database`.`vehiculos` (`id`, `aparcadook`, `latitud`, `libre`, `longitud`, `tipo`, `tiempoalquilado`, `id_viaje_en_curso`) VALUES ('2', 1, '40.44825417535705', 1, '-3.727239427533021', 'bike', 0, 0);
INSERT INTO `users_database`.`vehiculos` (`id`, `aparcadook`, `latitud`, `libre`, `longitud`, `tipo`, `tiempoalquilado`, `id_viaje_en_curso`) VALUES ('3', 1, '40.45103467433095', 0, '-3.7286027050636923', 'bike', 0, 0);
INSERT INTO `users_database`.`tarifas` (`nombre_tarifa`, `tarifa`) VALUES ('bike', '0.2');
INSERT INTO `users_database`.`tarifas` (`nombre_tarifa`, `tarifa`) VALUES ('patinete', '0.3');

INSERT INTO roles(name) VALUES('ROLE_USER');
INSERT INTO roles(name) VALUES('ROLE_MODERATOR');
INSERT INTO roles(name) VALUES('ROLE_ADMIN');

INSERT INTO `users_database`.`users` (`email`, `password`, `username`, `saldo`) VALUES ('laura@gmail.com','$2a$10$LkB/VZzE9MoFuKPAMTrfX.FBYuGFi6rK86me0d7Rty5VENTLQopcq', 'laaura_fg', 0);
INSERT INTO `users_database`.`user_roles` (`user_id`, `role_id`) VALUES (1, 3);



