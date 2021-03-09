# Práctica 1 - Redes de Computadoras 1
## Descripción
Se debe configurar y administrar los dispositivos de una infraestructura de red para una 
compañía, se les proporciona el diseño de la topología de red que será utilizado como 
infraestructura de red para dicha compañía, pero deberán de configurarla para proveer 
comunicación de acuerdo a las necesidades que se indican. 
La compañía cuenta con 3 departamentos: informática, contabilidad y ventas. Se debe 
proveer comunicación entre los usuarios del mismo departamento y con su servidor 
web, por ejemplo, los usuarios del departamento de ventas no se podrán comunicar con 
ningún otro departamento solamente con host de su mismo departamento. 

---
## Tabla de Contenido

> * [Descripción](#Descripción)
> * [Tabla de contenido](#Tabla-de-Contenido)
> * [Manual de construcción y configuración](#Manual-de-construcción-y-configuración)
>   * [Herramientas utilizadas](#Herramientas-utilizadas)
>   * [Diseño de topología](#Diseño-de-topología)
>   * [Tabla de hosts y sus direcciones IP](#Tabla-de-hosts-y-sus-direcciones-IP)
> * [Integrantes Grupo 4](#Integrantes-Grupo-4)

---
## Manual de construcción y configuración


### Herramientas utilizadas

Para el desarrolló de dicha práctica se utilizaron varias herramientas, entre ellas están:
* GNS3
* Oracle VirtualBox
    *   3 Maquinas virtuales con el SO Ubuntu 16.04 64-bits
    *   3 Maquinas virtuales con el SO Windows XP 32-bits
* OpenVPNConnect
* Google Cloud
    * VPN 

### Diseño de topología

Se utilizaron 2 maquinas físicas conectadas por medio de un VPN para poder enlazar las 2 topologías que se diseñaron.

* Topología 1 - Clientes

* Topología 2 - Servidores
![alt text](https://github.com/pablorocad/redes-p1/blob/master/img/Topologia2.JPG)


### Tabla de hosts y sus direcciones IP

* Topología 1 - Clientes

    | Virtualizada | HOST | Conectado a | Dirección IP |
    | :---: |  :---: | :---: | :---: |
    | Si | Informática 1 | SW1 | 192.168.14.15 |
    | No | Informática 2 | SW3 | 192.168.14.30 |
    | Si | Ventas 1 | SW3 | 192.168.24.15 |
    | No | Ventas 2 | SW4 | 192.168.24.30 |
    | No | Contabilidad 1 | SW1 | 192.168.4.15 |
    | Si | Contabilidad 2 | SW4 | 192.168.4.30 |


* Topología 2 - Servidores
    | Virtualizada | HOST | Conectado a | Dirección IP |
    | :---: |  :---: | :---: | :---: |
    | Si | Server Informática | SW1 | 192.168.14.150 |
    | Si | Server Ventas | SW3 | 192.168.24.150 |
    | Si | Server Contabilidad | SW1 | 192.168.4.150 |


---
## Integrantes Grupo 4

| Nombre Completo | Carnet |
| :----: | :----: |
| Luis Gerardo Chay Grijalva | 201700345 |
| Pablo Andrés Roca Dominguez | 201700584 |
| Fredy Estuadro Ramirez Moscoso | 201700350 |
| Luis Fernando Arana Arias | 201700988 | 


