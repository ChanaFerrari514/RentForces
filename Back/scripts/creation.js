require('dotenv').config();
const pool = require("../configs/db");
const { sql } = require("slonik");

const deleteAll = async () => {
  const connection = await pool;
  // IMPORTANT: sequence des drops est importante car accom et reser dependentde users
  // donc users doit etre delete en dernier
  await connection.transaction(async (tx) => {
    await tx.query(sql.unsafe`
      DROP TABLE IF EXISTS reservations;
    `);
    
    await tx.query(sql.unsafe`
      DROP TABLE IF EXISTS accommodations;
    `);
    
    await tx.query(sql.unsafe`
      DROP TABLE IF EXISTS users;
    `);
  });
};

const users = async () => {
  const connection = await pool;
  await connection.query(sql.unsafe`
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
  
    CREATE TABLE IF NOT EXISTS users (
      id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
      email TEXT NOT NULL UNIQUE,
      username TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  `);
};

const accommodations = async () => {
  const connection = await pool;
  await connection.query(sql.unsafe`
    CREATE TABLE IF NOT EXISTS accommodations (
      id SERIAL PRIMARY KEY,
      user_id UUID REFERENCES users(id) ON DELETE CASCADE,
      accommodation_name VARCHAR(100),
      description VARCHAR(300),
      location TEXT,
      price DECIMAL,
      availability BOOLEAN,
      start_avail_date DATE,
      end_avail_date DATE,
      picture_path VARCHAR(300)
    );
  `);
};

const reservations = async () => {
  const connection = await pool;
  await connection.query(sql.unsafe`
    CREATE TABLE IF NOT EXISTS reservations (
      reservation_id SERIAL PRIMARY KEY,
      user_id UUID REFERENCES users(id) ON DELETE CASCADE,
      accommodation_id SERIAL REFERENCES accommodations(id) ON DELETE CASCADE,
      start_res_date DATE,
      end_res_date DATE
    );
  `);
};

const main = async () => {
  try {
    await deleteAll();
    console.info("> tables dropped!");
    await users();
    console.info("> users created!");
    await accommodations();
    console.info("> accommodations created");
    await reservations();
    console.info("> reservations created");
  } catch (error) {
    console.info("> something went wrong creating a table!");
    console.error(error);
  }
};

main();

