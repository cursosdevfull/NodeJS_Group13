# MySQL Docker

### Para crear un contenedor con MySQL

```
docker run -d --name server-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=12345 -e MYSQL_PASSWORD=12345 -e MYSQL_USER=user -e MYSQL_DATABASE=course_nodejs mysql:8
```

### Para crear la persistencia de la base de datos (Volumen Host)

```
docker run -d --name server-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=12345 -e MYSQL_PASSWORD=12345 -e MYSQL_USER=user -e MYSQL_DATABASE=course_nodejs -v D:\\Cursos\\NodeJS_Group13\\data-mysql:/var/lib/mysql mysql:8
```

### Ruta corta usando terminales de tipo Linux

```
docker run -d --name server-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=12345 -e MYSQL_PASSWORD=12345 -e MYSQL_USER=user -e MYSQL_DATABASE=course_nodejs -v $(pwd -W)/data-mysql:/var/lib/mysql mysql:8
```

### Ruta corta usando PowerShell

```
docker run -d --name server-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=12345 -e MYSQL_PASSWORD=12345 -e MYSQL_USER=user -e MYSQL_DATABASE=course_nodejs -v ${PWD}\data-mysql:/var/lib/mysql mysql:8
```

### Para crear la persistencia de la base de datos (Volumen Nombrado)

```
docker volume create vol-course-mysql

docker run -d --name server-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=12345 -e MYSQL_PASSWORD=12345 -e MYSQL_USER=user -e MYSQL_DATABASE=course_nodejs -v vol-course-mysql:/var/lib/mysql mysql:8
```

### Para crear la persistencia de la base de datos (Volumen anónimo)

```
docker run -d --name server-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=12345 -e MYSQL_PASSWORD=12345 -e MYSQL_USER=user -e MYSQL_DATABASE=course_nodejs -v /var/lib/mysql mysql:8
```
