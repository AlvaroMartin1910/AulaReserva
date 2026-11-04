# AulaReserva

AulaReserva será una aplicación web para consultar las aulas del centro y gestionar sus reservas.

Este repositorio contiene la primera fase del proyecto: una API en PHP que devuelve las aulas disponibles en formato JSON y una interfaz web que las muestra.

## Tecnologías

- **Backend:** PHP
- **Frontend:** HTML y JavaScript

## Estructura

AulaReserva/
├── README.md
├── frontend/
│   ├── index.html   # Página principal
│   └── app.js       # Pide las aulas a la API y las muestra
└── backend/
    └── public/
        └── index.php   # API que devuelve las aulas en JSON