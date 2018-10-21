CREATE USER username WITH PASSWORD 'notSecureAnymoreCauseYouSaw';
CREATE DATABASE volunteer_manager WITH OWNER username;

CREATE TABLE users ( /*user_id, name, phone, */
   user_id              INT,
   user_name            TEXT,
   user_phone           TEXT,
   user_email           TEXT, --__ NOT NULL
   CONSTRAINT employees_pk PRIMARY KEY (user_id)
);
CREATE TABLE subscriptions ( /*subscription_id, user_id, event_id, day*/
   subscription_id    NUMERIC,
   user_id            VARCHAR(1000),
   event_id           VARCHAR(1000),
   subscription_day   DATE,
   CONSTRAINT employees_pk PRIMARY KEY (subscription_id)
);
CREATE TABLE events ( /*event_id, name, date (hour/day)*/
   event_id           NUMERIC             NOT NULL,
   event_name         VARCHAR(1000)       NOT NULL,
   event_date          timestamp,
   CONSTRAINT employees_pk PRIMARY KEY (event_id)
);
CREATE TABLE events_attended ( /*events_attended_id, event_id, user_id, volunteer_hours */
   events_Attended_id   NUMERIC             NOT NULL,
   event_id             VARCHAR(1000)       NOT NULL,
   user_id              VARCHAR(1000)       NOT NULL,
   volunteer_hours      DATE                        ,
   CONSTRAINT employees_pk PRIMARY KEY (events_Attended_id)
);
CREATE TABLE availability ( /*availability_id, user_id, start, end, Day*/
   availability_id        int,
   user_id                int,
   availability_Day       text,
   availability_start     time,
   availability_end       time,
   CONSTRAINT employees_pk PRIMARY KEY (availability_id)
);
