const pool = require('../../configs/db');

const createReservation = async (req, res) => {
  const { userId, accommodationId, startDate, endDate } = req.body;

  try {
    // Insérer une nouvelle réservation dans la base de données
    const query = 'INSERT INTO reservations (user_id, accommodation_id, start_date, end_date) VALUES ($1, $2, $3, $4) RETURNING *';
    const values = [userId, accommodationId, startDate, endDate];
    const result = await pool.query(query, values);

    const newReservation = result.rows[0];

    res.status(201).json({ reservation: newReservation });
  } catch (error) {
    console.error('Error during reservation creation:', error);
    res.status(500).json({ message: 'An error occurred while creating the reservation' });
  }
};

module.exports = createReservation;
