
#Proyecto Bsale


##Descripcion del proyecto

El backend consta de una conexion a la base de datos, la creacion de
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

##Autor Gabriel Cárcamo