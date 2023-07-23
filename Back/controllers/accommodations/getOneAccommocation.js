getconst pool = require('../../configs/db');
const { sql } = require('slonik');

const getAccommodation = async (req, res, next) => {
  try {
    const accommodationId = req.params.id;
    const connection = await pool;
    const query = sql.unsafe`SELECT * FROM accommodations WHERE id = ${accommodationId};`;
    const result = await connection.query(query);

    const accommodations = result.rows;

    if (accommodations.length === 0) {
      return res.status(404).json({ message: 'Accommodation not found.' });
    }

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

