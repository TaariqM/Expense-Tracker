# Expense Tracker

## Introduction
Expense Tracker is a web application, and as the name suggests, it is a platform that enables users to keep track of their expenses. This will help users know the amount of money they are spending, and what they are spending their money on.

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