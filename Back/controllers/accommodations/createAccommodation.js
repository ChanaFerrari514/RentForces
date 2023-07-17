  const pool = require('../../configs/db');

  const createAccommodation = async (req, res, next) => {
  try {
    const { accommodation_name, description, location, price, availability } = req.body;

    const query = `
      INSERT INTO accommodations (accommodation_name, description, location, price, availability)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;
    const values = [accommodation_name, description, location, price, availability];

    const result = await pool.query(query, values);

    res.status(201).json({
      success: true,
      data: result.rows[0],
    });
  } catch (error) {
    console.error('Error when creating a hosting account :', error);
    res.status(500).json({ message: 'An error occurred during the creation of the hosting.' });
  }
};

module.exports = createAccommodation;
