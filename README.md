# UCAVTOR

Online Course Platform.

## Архитектура

Project contanins 5 services:

* *site* - used for *server side rendering* for сео;
* *admin* - Admin control panel;
* *company* - Company control panel;
* *dashboard* - User control panel;
* *api* - source of data;

## Services

### Front-end

* bundler: *webpack*
* render library: *React*
* UI library: *Antd*
* store manager: *redux*
* authorization: *JWT*

### Back-end

* Database: *mongodb*
* Server: *micro*
* Instance Manager: *pm2*

## TO DO

* add *jwt* authorization for services *admin*, *dashboard*;
* add *Storybook*;
* add type defenitions, replace *any* with types;
* add docs;
* add tests;
* replace stateful components with stateless;
* add *Ramda*;
* move all services in docker containers;
