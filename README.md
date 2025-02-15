# `CovidVaccination`

📄 Descripción
==================
CovidVaccination Es un contrato inteligente que puede crear vacunas, personas a vacunar, certificados de vacunación, y contagios entre personas vacunadas y registradas, todos lo sdatos son almacenados mediante el protocolo de NEAR.
El listado siguiente estan las principales funcionalidades de este contrato inteligente.

Listado:

VACUNAS
=============
1. Crear vacunas.
2. Listado de Vacunas.
3. Buscar vacuna por ID.


PERSONAS
=============
1. Crear personas.
2. Listar todas las personas.
3. Buscar persona por ID.


CERTIFICADOS DE VACUNACIÓN
=============
1. Crear certificado de vacunación.
2. Listar todos los certificados de vacunación.
3. Buscar certificado de vacunación por ID.
4. Buscar certificado de vacunación por persona_id.
5. Buscar certificado de vacunación por vacuna_id.
6. Buscar certificado de vacunación por país.


CONTAGIOS COVID
=============
1. Crear contagios COVID.
2. Listar todos los contagios COVID.
3. Buscar contagio por ID.
4. Buscar contagio por persona_id.
5. Buscar contagio por nivel de infección.


📦 Instalación
================

Para ejecutar este proyecto localmente, debe seguir los siguientes pasos:

Paso 1: Prerequisitos
------------------------------

1. Asegúrese de haber instalado [Node.js] ≥ 12 (recomendamos usar [nvm])
2. Asegúrese de haber instalado yarn: `npm install -g yarn`
3. Instalar dependencias: `yarn install`
4. Cree una cuenta de prueba NEAR [https://wallet.testnet.near.org/]
5. Instale NEAR CLI globalmente: [near-cli] es una interfaz de línea de comandos (CLI) para interactuar con NEAR blockchain

    yarn install --global near-cli

Step 2: Configuración de NEAR CLI
-------------------------------

Configure su near-cli para autorizar su cuenta de prueba creada recientemente:

    near login

Paso 3: Cree y realice una implementación de desarrollo de contrato inteligente
--------------------------------

Cree el código del contrato inteligente de CovidVaccination e implemente el servidor de desarrollo local: `yarn buil` (consulte` package.json` para obtener una lista completa de `scripts` que puede ejecutar con` yarn`). Este script le devuelve un contrato inteligente provisional implementado (guárdelo para usarlo más tarde). Para desplegar el contrato generado con `yarn buil` en testnet [https://wallet.testnet.near.org/], ejecutar el comando `yarn deploy` el cual nos regresará el id del contrato desplegado el cuál usaremos para ejecutar cada uno de los métodos que contiene el contrato.

📑 Explorando los métodos de contrato inteligente CovidVaccination
==================

Los siguientes comandos le permiten interactuar con los métodos del contrato inteligente utilizando NEAR CLI (para esto, debe tener implementado un contrato inteligente provisional).

VACUNAS
=================
Comando para crear Vacuna: 
--------------------------------------------
    near call $CONTRACT addVaccine '{ "id": "string", "name": "string", "manufacturer": "string", "type": "string", "administration": "string", "dosis": "string" }' --account-id <your test account>

Comando para consultar todas las vacunas:
--------------------------------------------
    near view $CONTRACT getVaccines

Comando para consultar una vacuna por id:
--------------------------------------------
    near view $CONTRACT getVaccineByID '{"id":"id"}'


PERSONAS
=================
Comando para crear una Persona: 
--------------------------------------------
    near call $CONTRACT setPerson '{ "id": "string", "nationality": "string", "name": "string", "photo": "string", "birthdate":"string" }' --account-id <your test account>

Comando para consultar todas las pesonas:
--------------------------------------------
    near view $CONTRACT getPersons

Comando para consultar una persona por id:
--------------------------------------------
    near view $CONTRACT getPersonByID '{"id":"id"}'


CERTIFICADOS DE VACUNACIÓN
=================
Comando para crear una Certificado de Vacunación: 
--------------------------------------------
    near call $CONTRACT addCertificate '{ "id": "string", "vaccine_id": "string", "person_id": "string", "country": "string", "application_date": "string", "vaccine_lot": "string", "digital_stamp": "u64" }' --account-id <your test account>

Comando para consultar todos los Certificados de Vacunación:
--------------------------------------------
    near view $CONTRACT getCertificates

Comando para consultar una persona por id:
--------------------------------------------
    near view $CONTRACT getCertificateByID '{"id":"id"}'


CONTAGIOS DE COVID
=================
Comando para crear Contagios de Covid: 
--------------------------------------------
    near call $CONTRACT addInfection '{ "id":"string", "person_id": "string", "certificate_id": "string", "infection_date": "string", "recovery_date": "string", "infection_level": "string" }' --account-id <your test account>

Comando para consultar todos los Certificados de Vacunación:
--------------------------------------------
    near view $CONTRACT getInfections

Comando para consultar una persona por id:
--------------------------------------------
    near view $CONTRACT getInfectionByID '{"id":"id"}'



🤖 Pruebas
--------------------------------
Utilice el siguiente comando para ejecutar las pruebas:

    yarn test

🖥️ Mokups
--------------------------------
https://www.figma.com/file/8Q2xrTtygnwgQsy9YcVcqH/CovidVaccination?node-id=0%3A1

🎬 Video
--------------------------------
https://www.loom.com/share/0de6381903034e7ba5148744f60cd0fb?sharedAppSource=personal_library