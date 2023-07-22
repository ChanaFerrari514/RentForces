const { sql } = require('slonik');
const pool = require('../../configs/db');

const getAccommodation = async (req, res, next) => {
  try {
    console.log(pool);

    const connection = await pool
    console.log(connection)
    const query = sql.unsafe`SELECT * FROM accommodations`;
    const result = await connection.query(query);

    const accommodations = result.rows;

    res.status(200).json({
        success: true,
        data: accommodations,
    });

  } catch (error) {
    console.error('Error when fetching accommodations:', error);
    res.status(500).json({ message: 'An error occurred while fetching accommodations.' });
  }
  };

  module.exports = getAccommodation;

