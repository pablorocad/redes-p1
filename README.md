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
>   * [Procedimiento](#Procedimiento)
>      * [Creación de VPN en Google Cloud](#Creación-de-VPN-en-Google-Cloud)
>      * [Configuración de topología 1](#Configuración-de-topología-1)
>      * [Configuración de topología 2](#Configuración-de-topología-2)
>      * [Configuración del server](#Configuración-del-server)
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
* Apache2

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

### Procedimiento

#### Creación de VPN en Google Cloud

#### Configuración de topología 1

#### Configuración de topología 2

#### Configuración del server
Se utilizó Apache2 para poder crear un servidor en las maquinas Ubuntu.

1. Primero debemos actualizar los repositorios que definimos en el archivo /etc/apt/sources:

    ```
    sudo apt-get update
    ```

2. Ahora instalamos el paquete apache2:

    ```
    sudo apt-get install apache2
    ```

3. Podemos ver el perfil de aplicación dentro de ufw con el comando:

    ```
    sudo ufw app list
    ```

    Debe mostrar una salida como la siguiente:

    ```
    Available applications:
        Apache
        Apache Full
        Apache Secure
        Curl
    ```

4. Permitiremos el tráfico a través del puerto 80 con el siguiente comando:

    ```
    sudo ufw allow 'Apache'
    ```

5. Podemos verificar que ha sido correcto el comando ingresando:

    ```
    sudo ufw status
    ```

6. Debe retornar que el tráfico HTTP se encuentra permitido:

    ```
    Status: active

    To                         Action      From
    --                         ------      ----
    OpenSSH                    ALLOW       Anywhere                  
    Apache                     ALLOW       Anywhere                  
    OpenSSH (v6)               ALLOW       Anywhere (v6)             
    Apache (v6)                ALLOW       Anywhere (v6)
    ```

7. Puedes verificar el estado del servidor de Apache con el siguiente comando:

    ```
    sudo systemctl status apache2
    ```

    Dicho comando tiene una respuesta como la siguiente:

    ```
    ● apache2.service - The Apache HTTP Server
    Loaded: loaded (/lib/systemd/system/apache2.service; enabled; vendor preset: enabled)
    Drop-In: /lib/systemd/system/apache2.service.d
           └─apache2-systemd.conf
    Active: active (running) since Tue 2018-04-24 20:14:39 UTC; 9min ago
    Main PID: 2583 (apache2)
    Tasks: 55 (limit: 1153)
    CGroup: /system.slice/apache2.service
           ├─2583 /usr/sbin/apache2 -k start
           ├─585 /usr/sbin/apache2 -k start
           └─2586 /usr/sbin/apache2 -k start
    ```

    Donde podemos ver que el estado del servidor de apache se encuentra corriendo.

8. Si ingresamos a la dirección IP desde un navegador web, en una computadora del lado del cliente. Podemos observar que efectivamente el servidor de apache se está ejecutando correctamente.

    ![alt text](https://github.com/pablorocad/redes-p1/blob/master/img/apache.png)

    Podemos dirigirnos a la carpeta ``` /var/www/html ``` para poder ver la página que se muestra en nuestro servidor.

---
## Integrantes Grupo 4

| Nombre Completo | Carnet |
| :----: | :----: |
| Luis Gerardo Chay Grijalva | 201700345 |
| Pablo Andrés Roca Dominguez | 201700584 |
| Fredy Estuadro Ramirez Moscoso | 201700350 |
| Luis Fernando Arana Arias | 201700988 | 


