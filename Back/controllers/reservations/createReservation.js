const pool = require('../../configs/db');
const { sql } = require('slonik');

const createReservation = async (req, res) => {
  try {
    const { userId, accommodationId, startResDate, endResDate } = req.body;
    
    // IMPORTANT: on peut creer plusieurs reservations pour le meme herbegement
    // Insérer une nouvelle réservation dans la base de données
    const connection = await pool;
    const query = sql.unsafe`
      INSERT INTO reservations (
        user_id, accommodation_id, start_res_date, end_res_date
      ) VALUES (
        ${userId}, ${accommodationId}, ${startResDate}, ${endResDate}
      ) RETURNING *;
    `;
    const result = await connection.query(query);
    const newReservation = result.rows[0];

    res.status(201).json({ reservation: newReservation });
  } catch (error) {
    console.error('Error during reservation creation:', error);
    res.status(500).json({ message: 'An error occurred while creating the reservation' });
  }
};

module.exports = createReservation;
