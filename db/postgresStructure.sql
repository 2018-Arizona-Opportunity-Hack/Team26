CREATE USER username WITH PASSWORD 'notSecureAnymoreCauseYouSaw';
CREATE DATABASE Volunteer_Manager WITH OWNER username;

CREATE TABLE Users (
   employee_id   NUMERIC       NOT NULL,
   first_name    VARCHAR(1000) NOT NULL,
   last_name     VARCHAR(1000) NOT NULL,
   date_of_birth DATE                   ,
   phone_number  VARCHAR(1000) NOT NULL,
   junk          CHAR(1000)             ,
   CONSTRAINT employees_pk PRIMARY KEY (employee_id)
);
CREATE TABLE Subscription (
   employee_id   NUMERIC       NOT NULL,
   first_name    VARCHAR(1000) NOT NULL,
   last_name     VARCHAR(1000) NOT NULL,
   date_of_birth DATE                   ,
   phone_number  VARCHAR(1000) NOT NULL,
   junk          CHAR(1000)             ,
   CONSTRAINT employees_pk PRIMARY KEY (employee_id)
);
CREATE TABLE Event (
   employee_id   NUMERIC       NOT NULL,
   first_name    VARCHAR(1000) NOT NULL,
   last_name     VARCHAR(1000) NOT NULL,
   date_of_birth DATE                   ,
   phone_number  VARCHAR(1000) NOT NULL,
   junk          CHAR(1000)             ,
   CONSTRAINT employees_pk PRIMARY KEY (employee_id)
);
CREATE TABLE Events_Attended (
   employee_id   NUMERIC       NOT NULL,
   first_name    VARCHAR(1000) NOT NULL,
   last_name     VARCHAR(1000) NOT NULL,
   date_of_birth DATE                   ,
   phone_number  VARCHAR(1000) NOT NULL,
   junk          CHAR(1000)             ,
   CONSTRAINT employees_pk PRIMARY KEY (employee_id)
);
CREATE TABLE Availability (
   employee_id   NUMERIC       NOT NULL,
   first_name    VARCHAR(1000) NOT NULL,
   last_name     VARCHAR(1000) NOT NULL,
   date_of_birth DATE                   ,
   phone_number  VARCHAR(1000) NOT NULL,
   junk          CHAR(1000)             ,
   CONSTRAINT employees_pk PRIMARY KEY (employee_id)
);
