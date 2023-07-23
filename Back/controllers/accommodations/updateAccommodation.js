const pool = require('../../configs/db');
const { sql } = require('slonik');

const updateAccommodation = async (req, res, next) => {
  try {
    const accommodationId = req.params.id;
    const { accommodation_name, description, location, price, availability,
            start_avail_date, end_avail_date} = req.body;
    
    const connection = await pool;
    const query = sql.unsafe`
      UPDATE accommodations
      SET 
        accommodation_name = ${accommodation_name}, 
        description = ${description}, location = ${location}, price = ${price}, 
        availability = ${availability}, start_avail_date = ${start_avail_date}, 
        end_avail_date = ${end_avail_date}
      WHERE id = ${accommodationId}
      RETURNING *;
    `;
    const result = await connection.query(query);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Accommodation not found for the update.' });
    }

    res.status(200).json({
      success: true,
      data: result.rows[0],
    });
  } catch (error) {
    console.error('Error when updating hosting:', error);
    res.status(500).json({ message: 'An error occurred while updating the hosting.' });
  }
};

module.exports = updateAccommodation;
