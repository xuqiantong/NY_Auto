# NY Automotive Dealership Website and Data Management

## Introduction
New York Auto Depot, Inc. is an entrepreneurial automotive dealership founded in 2012 by a group of college graduates who are also automotive enthusiasts. The company aims to provide personalized vehicle purchase consultation for college students at a lower price than traditional dealerships by making use of e-business technologies and new media platforms. It also connects car enthusiasts in various colleges and create a network of people who love or hope to learn about cars.

This website project includes:
- Clinent Side Interfaces: browsing, selling vehicles on desktop and mobile devices for customers.
- Data Management System: administration and different levels of accesses of vehicle data for employees.

## Requirements
- Linux OS
- Python 2.7
- Django
- Rest

## Install and Run
- Install pip and npm:
  ```sh
  apt-get install python-pip
  apt-get install npm
  ```
- Install Dependencies:
  ```
  npm install

  pip install Django
  pip install djangorestframework
  pip install markdown
  pip install django-filter 
  pip install django-webpack-loader
  ```
  See https://docs.djangoproject.com/en/1.11/topics/install/ for more details.
- `cd` to the folder you want to place this project and clone this repo:
  ```
  git clone git@github.com:oka2/ny-auto-backend.git
  ```
- `cd` to the `ny-auto-backend/web` folder which includes all the sorce codes.
- Complie front-end renders:
  ```
  ./node_modules/.bin/webpack --config webpack.config.js
  ```
- Run Django server:
  ```
  python manage.py runserver
  ```
  If the server is successfully running, you should see somthing like this:
  ```
  Performing system checks...

  System check identified no issues (0 silenced).
  May 17, 2017 - 18:00:51
  Django version 1.9.4, using settings 'mysite.settings'
  Starting development server at http://127.0.0.1:8000/
  Quit the server with CONTROL-C.
  ```
  Then you can have look at the homepage at http://127.0.0.1:8000/home.
  
## Administraion System
- 


## 
