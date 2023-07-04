DROP TABLE IF EXISTS users;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS users (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT NOT NULL UNIQUE,
    username TEXT NOT NULL,
    password TEXT NOT NULL
);

-- Accommodations

CREATE TABLE IF NOT EXISTS Accommodations (
    id INT PRIMARY KEY,
    owner_id INT,
    accommodation_name VARCHAR(100),
    description VARCHAR(300),
    location TEXT,
    price DECIMAL,
    availability BOOLEAN
);

-- Reservations

CREATE TABLE IF NOT EXISTS Reservations (
    reservation_id SERIAL PRIMARY KEY,
    user_id UUID REFERENCES Users(id) ON DELETE CASCADE,
    accommodation_id INT,
    start_date DATE,
    end_date DATE
);
