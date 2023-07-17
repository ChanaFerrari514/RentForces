
    const pool = require('../../configs/db');

    module.exports = async (req, res, next) => {
      try {
        const accommodationId = req.params.id;
        const { accommodation_name, description, location, price, availability } = req.body;
    
        const query = `
          UPDATE accommodations
          SET accommodation_name = $1, description = $2, location = $3, price = $4, availability = $5
          WHERE id = $6
          RETURNING *;
        `;
        const values = [accommodation_name, description, location, price, availability, accommodationId];
    
        const result = await pool.query(query, values);
    
        res.status(200).json({
          success: true,
          data: result.rows[0],
        });
      } catch (error) {
        console.error('Error when updating hosting:', error);
        res.status(500).json({ message: 'An error occurred while updating the hosting.' });
      }
    };
    