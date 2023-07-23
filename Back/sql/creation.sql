DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS accommodations;
DROP TABLE IF EXISTS reservations;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS users (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT NOT NULL UNIQUE,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
);

-- Accommodations

CREATE TABLE IF NOT EXISTS accommodations (
    id SERIAL PRIMARY KEY,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    accommodation_name VARCHAR(100),
    description VARCHAR(300),
    location TEXT,
    price DECIMAL,
    availability BOOLEAN,
    start_avail_date DATE,
    end_avail_date DATE
);

-- Reservations

CREATE TABLE IF NOT EXISTS reservations (
    reservation_id SERIAL PRIMARY KEY,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    accommodation_id INT,
    start_res_date DATE,
    end_res_date DATE
);


