CREATE USER jaykay WITH PASSWORD 'notSecureAnymoreCauseYouSaw';

CREATE DATABASE volunteer_manager WITH OWNER jaykay;

CREATE TABLE users ( -- user_id, name, phone, email
   user_id              INT, --NOTE: NEEDED?
   user_name            varchar(50),
   user_phone           varchar(50),
   user_email           varchar(50), --__ NOT NULL
   PRIMARY KEY (user_id)  -- CONSTRAINT employees_pk ...;  --id serial PRIMARY KEY,
);
/*
CREATE TABLE subscriptions ( -- subscription_id, user_id, event_id, day
   subscription_id      INT,
   -- user_id              INT,
   -- event_id             INT,
   subscription_day     TEXT, -- TEXT of day is fine.
   FOREIGN KEY (user_id) REFERENCES users (user_id),
   FOREIGN KEY (event_id) REFERENCES events (event_id),
   PRIMARY KEY (subscription_id)
);
*/
CREATE TABLE events ( -- event_id, name, event_start_date (hour/day), event_end_date
   event_id           INT,
   event_name         TEXT,
   event_start_date   timestamp, -- want day and time.; ex: 1995-04-01 08:10:02
   event_end_date     timestamp, -- want day and time.
   PRIMARY KEY (event_id)
);
CREATE TABLE events_attended ( -- events_attended_id, volunteer_hours, event_id, user_id
   events_attended_id   INT,
   event_id             INT,
   user_id              INT,
   volunteer_hours      INT,
   PRIMARY KEY (events_attended_id),
   FOREIGN KEY (event_id) REFERENCES events (event_id),
   FOREIGN KEY (user_id) REFERENCES users (user_id)
);
CREATE TABLE availability ( -- availability_id, user_id, start, end, Day
   availability_id        INT,
   user_id                INT,
   availability_day       TEXT,
   availability_start     TIME, -- 08:10:02
   availability_end       TIME,
   PRIMARY KEY (availability_id),
   FOREIGN KEY (user_id) REFERENCES users (user_id)
);
