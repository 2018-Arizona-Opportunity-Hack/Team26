-- http://postgrest.org/en/v5.1/tutorials/tut0.html
-- Download postgrest.exe
-- Local API for PostgreSQL
-- With PostgreSQL installed locally - open SQL Shell (psql)

-- Run this command
-- create schema api;

-- Run this to create a user table on the api schema
create table api.users (
  user_id int,
  user_name text,
  user_phone text,
  user_email text
);

insert into api.users (user_id, user_name, user_phone, user_email) values (1, 'Volunteer 1', '6021234567', 'fake@email.com');

-- Create role to access api

-- create role web_anon nologin;
-- grant web_anon to postgres;
-- grant usage on schema api to web_anon;
-- grant select on api.todos to web_anon;

-- create a configuration file for postgREST program (db.conf)
-- db-uri = "postgres://postgres:mysecretpassword@localhost/postgres"
-- db-schema = "api"
-- db-anon-role = "web_anon"

-- in file with postgrest.exe file open terminal and run
-- ./postgrest db.conf

-- Now you can get from db by going to 
-- http://localhost:3000/users
-- returns all results as json, can filter

-- Can also insert by posting a json object to the same url

create table api.attendance (
  user_name text,
  total_hours int,
);

insert into api.attendance (user_name, total_hours) values ('Volunteer 1', 4);
insert into api.attendance (user_name, total_hours) values ('Volunteer 2', 10);
insert into api.attendance (user_name, total_hours) values ('Volunteer 3', 6);
insert into api.attendance (user_name, total_hours) values ('Volunteer 4', 6);
insert into api.attendance (user_name, total_hours) values ('Volunteer 5', 1);

create table api.attendance (
  event_name text,
  start_time text,
  end_time text
);

insert into api.attendance (user_name, total_hours) values ('Volunteer 1', 4);

