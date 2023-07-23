-- id se genere automatiquement
INSERT INTO users (id, email, username, password) VALUES ('12345678-1234-1234-1234-1234567890AB', 'new@example.com', 'example_user', 'password123');


-- id s'incremente automatiquement
INSERT INTO Accommodations (owner_id, accommodation_name, description, location, price, availability) VALUES (2, 1, 'accomodation name', 'Description', 'Location', 100.00, true);

-- reservation_id s'incremente automatiquement
INSERT INTO Reservations (user_id, accommodation_id, start_date, end_date) VALUES (1, '12345678-1234-1234-1234-1234567890AB', 1, '2023-07-01', '2023-07-10');
