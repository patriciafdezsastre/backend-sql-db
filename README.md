[![Build Status](https://travis-ci.com/givanthak/spring-boot-rest-api-tutorial.svg?branch=master)](https://travis-ci.com/givanthak/spring-boot-rest-api-tutorial)
[![Known Vulnerabilities](https://snyk.io/test/github/givanthak/spring-boot-rest-api-tutorial/badge.svg)](https://snyk.io/test/github/givanthak/spring-boot-rest-api-tutorial)



# HIGO Fullstack

## Steps to Setup

**1. Clone the application**

```bash
https://github.com/aserrano3198/backend-sql-db.git
```

**2. Create Mysql database**
```bash
create database users_database
```

**3. Change mysql username and password as per your installation**

+ open `src/main/resources/application.properties`

+ change `spring.datasource.username` and `spring.datasource.password` as per your mysql installation

To run the application, you have to search the direction IP 127.20.10.2 and change it for the device's IP.

**4. Build and run the app**

```bash
mvn spring-boot:run

```


```bash
yarn start
```

The app will start running at <http://localhost:8080>.

## Add rows to the database

```bash
INSERT INTO `users_database`.`users` (`id`, `aparcadook`, `latitud`, `libre`, `longitud`, `tipo`) VALUES ('2', 1, '1222', 1, '1222', 'patinete');
```

## Explore Rest APIs

The app defines following CRUD APIs.

    GET /api/v1/vehiculos/{id}

You can find the tutorial for this application on my blog -

<https://www.prathapgivantha.wordpress.com>
