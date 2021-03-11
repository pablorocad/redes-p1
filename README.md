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

  ![alt text](https://github.com/pablorocad/redes-p1/blob/master/img/Topologia1.PNG)

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
Para la creacion de una VPN en GCP (Google Cloud Platform) debemos seguir los siguientes pasos:
  1. Crear una instancia de 2 GB de RAM con 10 GB de memoria
  2. Configurar la instalación de Ubuntu 20.04 en la nueva instancia
  3. Abrir el puerto 1194 con el protocolo 'udp'
  4. Acceder a la instancia mediante el protocolo SSH
  5. Ahora debemos actualizar los paquetes del SO:
        ```
        sudo apt-get update
        ```
  6. Instalar OpenVPN dentro de la maquina con el siguiente comando:
        ```
        sudo wget https://cubaelectronica.com/OpenVPN/openvpn-install && sudo bash openvpn-install.sh
        ```
  7. Nos pedira configurar nuestra VPN de la siguiente manera:
      - IP address: [IP interna] //verificar que sea nuestra IP interna
      - Direccion IP pública: [IP publica] //Colocar IP publica de la instancia
      - Procoloto: UDP
      - Puerto: 1194
      - DNS: Google
      - Cliente: nombreCliente1
  
  8. Esperamos que se instale el programa
  9. Nos muestra que ha creado un cliente y que se encuentra en la ruta /home/nombreCliente1.ovpn
  10. Descargamos el archivo en esa ruta
  11. Descargar e instalamos OpenVPN connect en nuestra maquina fisica
  12. Subimos nuestro archivo .ovpn a OpenVPN connect
  13. Nos conectamos a la VPN

#### Configuración de topología 1

Se utilizaron tres maquinas virtuales, tres VPCS, cuatro switches y un cloud.

Para la configuración de cada maquina virtual se realizo el mismo procedimiento como se puede observar en la imagen, esto se realizo en virual box.

![alt text](https://github.com/pablorocad/redes-p1/blob/master/img/ConfigracionVM.PNG)

Se configuro de esta manera en GNS3 cada maquina virtual

![alt text](https://github.com/pablorocad/redes-p1/blob/master/img/configuracionGN.PNG)

En cada maquina virtual se utilizo Windows XP

1. Cambiar la IP de la maquina virtual de Windows XP.

   1.1 Presionar el botón de inicio y después presionar el panel de control.

   ![alt text](https://github.com/pablorocad/redes-p1/blob/master/img/ConfigurarXP1.PNG)

   1.2 Presionar en conexiones de red e internet. 

   ![alt text](https://github.com/pablorocad/redes-p1/blob/master/img/configuracionXP2.PNG)

   1.3 Presionar en conexiones de red.

   ![alt text](https://github.com/pablorocad/redes-p1/blob/master/img/configurarXP3.PNG)

   1.4 Presionar en sobre la conexión que este activa.

   ![alt text](https://github.com/pablorocad/redes-p1/blob/master/img/configurarXP4.PNG)

   1.5 Presionar en propiedades, después en protocolo internet (TCP/IP) y se agrega la direccion IP, la mascara de red, y la puerta de enlace predeterminado.

   ![alt text](https://github.com/pablorocad/redes-p1/blob/master/img/configuracionXP5.PNG)

   Se agregaron los siguientes datos a cada maquina virtual.

   |   Servidor   |   Dirección   | Máscara de Red | Puerta de Enlace |
   | :----------: | :-----------: | :------------: | :--------------: |
   | Informática  | 192.168.14.15 |       24       |   192.168.14.1   |
   |    Ventas    | 192.168.24.15 |       24       |   192.168.24.1   |
   | Contabilidad | 192.168.4.30  |       24       |   192.168.4.1    |

2. Configurar la Cloud en GNS3

   2.1 Ingresar a la configuración de Cloud, ir a la pestaña ``` UDP tunnels ``` y agregar una nueva configuración con los siguientes datos:

   | Local port | Remote host | Remote port |
   | :--------: | :---------: | :---------: |
   |   20000    |  10.8.0.2   |    30000    |

   ![alt text](https://github.com/pablorocad/redes-p1/blob/master/img/configuracionNubeCliente.PNG)

3. Configuración de switchs

   3.1 Los diferentes switchs se deben configurar de la siguiente manera, para poder manejar la conexión truncal y las vlans.

   #### Switch 1

   | Port | VLAN |  type  |
   | :--: | :--: | :----: |
   |  0   |  1   | dot1q  |
   |  1   |  1   | dot1q  |
   |  2   |  14  | access |
   |  3   |  34  | access |

   #### Switch 2

   | Port | VLAN | type  |
   | :--: | :--: | :---: |
   |  0   |  1   | dot1q |
   |  1   |  1   | dot1q |
   |  2   |  1   | dot1q |

   #### Switch 3

   | Port | VLAN |  type  |
   | :--: | :--: | :----: |
   |  0   |  1   | dot1q  |
   |  1   |  24  | access |
   |  2   |  14  | access |

   #### Switch 4

   | Port | VLAN |  type  |
   | :--: | :--: | :----: |
   |  0   |  1   | dot1q  |
   |  1   |  34  | access |
   |  2   |  24  | access |

4. Configuración de las VPCS

   ​	4.1 Para eso se utilizaron los siguientes datos

   |   Servidor   |   Dirección   | Máscara de Red | Puerta de Enlace |
   | :----------: | :-----------: | :------------: | :--------------: |
   | Informática  | 192.168.14.30 |       24       |   192.168.14.1   |
   |    Ventas    | 192.168.24.30 |       24       |   192.168.24.1   |
   | Contabilidad | 192.168.4.15  |       24       |   192.168.4.1    |

#### Configuración de topología 2

Como se pudo observar en el diagrama de la topología 2, se utilizaron 3 maquinas virtuales, con el sistema virtual Ubuntu 16.04.

1. Cambiar la IP de la maquina virtual de Ubuntu.

    1.1 Abrir la ventana de configuración de Red.

    ![alt text](https://github.com/pablorocad/redes-p1/blob/master/img/Configuracion_Red1.JPG)

    1.2 Seleccionar la configuración de la red cableada, ajustes de IPV4. 

    ![alt text](https://github.com/pablorocad/redes-p1/blob/master/img/ManualUbuntu.JPG)

    1.3 Seleccionar el método Manual y agregar la dirección dependiendo la maquina que se está configurando. Con los siguientes datos:

    | Servidor | Dirección | Máscara de Red | Puerta de Enlace |
    | :---: | :---: | :---: | :---: |
    | Informática | 192.168.14.150 | 24 | 192.168.14.1 |
    | Ventas | 192.168.24.150 | 24 | 192.168.24.1 |
    | Contabilidad | 192.168.4.150 | 24 | 192.168.4.1 |

2. Configurar la Cloud en GNS3

    2.1 Ingresar a la configuración de Cloud, ir a la pestaña ``` UDP tunnels ``` y agregar una nueva configuración con los siguientes datos:

    | Local port | Remote host | Remote port |
    | :---: | :---: | :---: |
    | 30000 | 10.8.0.2 | 20000 |

    ![alt text](https://github.com/pablorocad/redes-p1/blob/master/img/CloudUbuntu.JPG)

3. Configuración de switchs

    3.1 Los diferentes switchs se deben configurar de la siguiente manera, para poder manejar la conexión truncal y las vlans.

    #### Switch 1

    | Port | VLAN | type |
    | :---: | :---: | :---: |
    | 0 | 1 | dot1q |
    | 1 | 34 | access |
    | 2 | 14 | access |

    #### Switch 2

    | Port | VLAN | type |
    | :---: | :---: | :---: |
    | 0 | 1 | dot1q |
    | 1 | 1 | dot1q |
    | 2 | 1 | dot1q |

    #### Switch 3

    | Port | VLAN | type |
    | :---: | :---: | :---: |
    | 0 | 1 | dot1q |
    | 1 | 24 | access |

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


