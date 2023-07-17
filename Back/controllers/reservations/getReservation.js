const pool = require('../../configs/db');

const getReservation = async (req, res, next) => {
  try {
    const query = 'SELECT * FROM reservations';
    const result = await pool.query(query);

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