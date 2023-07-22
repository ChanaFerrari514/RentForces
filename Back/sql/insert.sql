INSERT INTO users (id, email, username, password) VALUES ('12345678-1234-1234-1234-1234567890AB', 'new@example.com', 'example_user', 'password123');


INSERT INTO Accommodations (id, user_id, accommodation_name, description, location, price, availability,start_disp_date, end_disp_date) VALUES (2, 1, 'accomodation name', 'Description', 'Location', 100.00, true);


INSERT INTO Reservations (reservation_id, user_id, accommodation_id, start_date, end_date) VALUES (1, '12345678-1234-1234-1234-1234567890AB', 1, '2023-07-01', '2023-07-10');
