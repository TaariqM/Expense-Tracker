# Expense Tracker

## Table of Contents
* [Introduction](#introduction)
* [Features](#features)
* [Installation Guide](#installation-guide)
	* [Database Installation Guide](#database-installation-guide)
	* [Database Tables](#database-tables)
		* [User Table](#user-table)
		* [Expense Folder Table](#expense-folder-table)
		* [Expense Table](#expense-table)
	* [Web App Installation](#web-app-installation)
* [API Endpoints](#api-endpoints)
* [Technologies Used](#technologies-used)
	* [Frontend](#frontend)
	* [Backend](#backend)
	* [Database](#database)

## Introduction
Expense Tracker is a web application, and as the name suggests, it is a platform that enables users to keep track of their expenses. This will help users know the amount of money they are spending, and what they are spending their money on. As of now, this project is still under development.

## Features
* Users can signup and login to their accounts
* Users can create different expense folders for different expense purposes
* Users can add and delete expenses from an expense folder
* Users can modify/update an expense
* Users can sign out of their accounts

## Installation Guide

### Database Installation Guide
* Download and install MySQL and MySQL Workbench. MySQL is used to creat database tables to store data, and MYSQL Workbench provides a User Interface to create database tables easier
* Once installed, double click on your ```Local Instance```, and enter the password that was created during the installation ![image](https://i.postimg.cc/fRYTWsVV/Double-Click-Local-Instance2.png)
* Right click in the ```SCHEMAS``` section on the left side panel, and select ```Create Schema```. Name it ```expensedb```, and click apply ![image](https://i.postimg.cc/FRH9xJDS/Create-Shema.png)
* Once the Database is created, create 3 tables: ```user```, ```expense_folder```, and ```expense```
* ```user``` table contains the following columns: ```user_id```, ```email```, ```password```, ```first_name```, and ```last_name```
* ```expense_folder``` table contains the following columns: ```expense_folder_id```, ```user_id```, and ```name```
* ```expense``` table contains the following columns: ```expense_id```, ```user_id```, ```expense_folder_id```, ```title```, ```amount```, ```category```, ```desc```, and ```date```

### Database Tables
The Database tables created during the Database Installation Guide will look like this. These tables contain example data.

#### User Table
| user_id | email | password | first_name | last_name |
| --- | --- | --- | --- | --- |
| 1 | johndoe@gmail.com | randomPassword | John | Doe |
| 2 | janedoe@gmail.com | randomPassword2 | Jane | Doe |

* ```user_id``` - this column is of INT datatype, and serves as the Primary Key for this table
* ```email``` -  this column is of VARCHAR datatype, cannot be NULL, and must be Unique
* ```password``` - this column is of VARCHAR datatype, and cannot be NULL
* ```first_name``` - this column is of VARCHAR datatype, and cannot be NULL
* ```last_name``` - this column is of VARCHAR datatype, and cannot be NULL

#### Expense Folder Table
| expense_folder_id | user_id | name |
| --- | --- | --- |
| 1 | 1 | Bills |
| 2 | 1 | Savings |

* ```expense_folder_id``` - this column is of INT datatype, serves as the Primary Key for this table, and cannot be NULL
* ```user_id``` - this column is of INT datatype
* ```name``` - this column is of VARCHAR datatype, and cannot be NULL

#### Expense Table 
| expense_id | user_id | expense_folder_id | title | amount | category | desc | date |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 1 | 1 | Hydro One | 50.00 | Utilities | Water Bill | 17/10/2023 |
| 2 | 1| 1| Rent | 1200.00 | Rent Bill | Monthly Rent | 17/10/2023 |

* ```expense_id``` - this column is of INT datatype, serves as the Primary Key for this table, and cannot be NULL
* ```user_id``` - this column is of INT datatype, and cannot be NULL
* ```expense_folder_id``` - this column is of INT datatype, and cannot be NULL
* ```title``` - this column is of VARCHAR datatype, and cannot be NULL
* ```amount``` - this column is of INT datatype, and cannot be NULL
* ```category``` - this column is of VARCHAR datatype
* ```desc``` - this column is of VARCHAR datatype
* ```date``` - this column is of DATE datatype

### Web App Installation
* Clone this repository
* The 'backend' folder contains files related to the backend, and the 'frontend' folder contains files related to the frontend
* Open a terminal, navigate to the backend folder, and run ```npm i express cors mysql nodemon```. This will install Express, cors, mysql, and nodemon packages
* Once thats finished, run ```npm start``` to start the backend server
* Open the ```index.js``` file under the backend folder, and within the ```mysql.createConnection({})```, change the password to the password that was created when installing MySQL
* Open a new terminal, and navigate to the frontend folder
* Run ```npm i react-router-dom```. This will install the React Router DOM package that will allow you to route and navigate to web pages
* Run ```npm i axios```. This will install the axios package. Axios will allow you to make API requests using a React application

## API Endpoints
Below are the current API Endpoints. More endpoints will be added later on.

| HTTP Request Method | Endpoints | Action |
| --- | --- | --- |
| POST | /api/v1/register | Creates and adds a new user account |
| POST | /api/v1/login | Passes user login information, to login an existing user account |
| POST | /api/v1/forgot_password | To let an existing user to reset their password for their account |
| GET | /api/v1/user/:id | Gets existing user information based off of a user id |
| POST | /api/v1/addExpenseFolder | Creates and adds an expense folder |
| GET | /api/v1/expenseFolder/:id | Gets all of the expense folders based off of a user id |
| GET | /api/v1/expenseFolder/:id/:expId | Gets a specific expense folder based off of a user id and expense folder id |
| POST | /api/v1/expense | Creates and adds a new expense |
| GET | /api/v1/expense/:id/:expId | Get all expenses based off of the specifice user id and expense folder id |
| POST | /api/v1/expense/:expenseId | Lets an existing user edit/update an expense. This is based off that expenses specific id |
| DELETE | /api/v1/expense/:expenseId | Lets an existing user delete an expense. This is based off that expenses specific id |
| POST | /api/v1/expenseFolder/:expId | Lets an existing user modify and update the name of an expense folder |
| DELETE | /api/v1/expenseFolder/:expId | Lets an existing user delete an expense folder based off of the expense folder id |

## Technologies Used 

### Frontend 
* React
* JavaScript
* HTML 
* CSS 

### Backend 
* Express 
* NodeJS
* JavaScript

### Database
* MySQL
* MySQL Workbench
