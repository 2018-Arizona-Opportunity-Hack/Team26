CREATE USER username WITH PASSWORD 'notSecureAnymoreCauseYouSaw';
CREATE DATABASE volunteer_manager WITH OWNER username;

CREATE TABLE users ( /*user_id, name, phone, */
   user_id              NUMERIC           NOT NULL,
   user_name            VARCHAR(1000)     NOT NULL,
   user_phone           VARCHAR(1000)     NOT NULL,
   user_email           DATE                      ,
   CONSTRAINT employees_pk PRIMARY KEY (users_id)
);
CREATE TABLE subscriptions ( /*subscription_id, user_id, event_id, day*/
   subscription_id    NUMERIC             NOT NULL,
   user_id            VARCHAR(1000)       NOT NULL,
   event_id           VARCHAR(1000)       NOT NULL,
   subscription_day   DATE                        ,
   CONSTRAINT employees_pk PRIMARY KEY (subscription_id)
);
CREATE TABLE events ( /*event_id, name, date (hour/day)*/
   event_id           NUMERIC             NOT NULL,
   event_name         VARCHAR(1000)       NOT NULL,
   event_date          VARCHAR(1000)       NOT NULL, /*is date a keyword?*/
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
   availability_id    NUMERIC             NOT NULL,
   user_id            VARCHAR(1000)       NOT NULL,
   availability_start              VARCHAR(1000)       NOT NULL,
   availability_end      DATE                        ,
   availability_Day       VARCHAR(1000)       NOT NULL,
   CONSTRAINT employees_pk PRIMARY KEY (availability_id)
);
