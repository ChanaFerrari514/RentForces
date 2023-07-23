const pool = require('../../configs/db');
const { sql } = require('slonik');

const getReservation = async (req, res, next) => {
  try {
    const connection = await pool;
    const query = sql.unsafe`SELECT * FROM reservations;`;
    const result = await connection.query(query);

    const reservations = result.rows;

    if (reservations.length === 0) {
      return res.status(404).json({ message: 'No reservations found.' });
    }
    
    res.status(200).json({
        success: true,
        data: reservations,
    });

  } catch (error) {
    console.error('Error when fetching reservations:', error);
    res.status(500).json({ message: 'An error occurred while fetching reservations.' });
  }
};

module.exports = getReservation;
