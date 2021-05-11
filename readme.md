
#Proyecto Bsale


##Descripcion del proyecto

Este proyecto consta en el frontend en una pagina inicial de botilleria,
con funcionalidades basicas(Buscador, Categorias, display de productos)
y **consumo de apis**. 

En el backend consta de una conexion a la base de datos, la creacion de
las rutas para las apis, sus controladores y querys. 

##Estado del proyecto 

**En desarrollo**.

##Tecnologias utilizadas

###Backend
-Node
-Express
-Javascript
-nodemon
-EJS
-CORS

###Frontend
-Javascript
-CSS
-Bootstrap

##Base de datos

-MySQL


##Informacion de apis
|api-routes|--|
|----------------|----------------|
|name|returnProducts|
|type|GET|
|path|/products|
|description|Devuelve todos los productos| 
|parameters|none| 
|----------------|----------------|
|name|returnFilterProducts|
|type|GET|
|path|/products/:search|
|description|Devuelve productos en base a nombre o parte de uno|
|parameters|search:path--[string]nombre de producto| 
|----------------|----------------|
|name|returnProductsByCategory|
|type|GET|
|path|/products/category/:category|
|description|Devuelve productos en base a categoria| 
|parameters|category:path--[Int]ID categoria| 

