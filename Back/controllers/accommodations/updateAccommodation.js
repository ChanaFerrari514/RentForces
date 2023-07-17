
    const pool = require('../../configs/db');

    const updateAccommodation = async (req, res, next) => {
      try {
        const accommodationId = req.params.id;
        const { accommodation_name, description, location, price, availability } = req.body;
        
        // Vérifier si les données requises sont présentes
        if (!accommodation_name || !description || !location || !price || !availability) {
        return res.status(400).json({ message: 'All fields are required for the update.' });    
      }
        const query = `
          UPDATE accommodations
          SET accommodation_name = $1, description = $2, location = $3, price = $4, availability = $5
          WHERE id = $6
          RETURNING *;
        `;
        const values = [accommodation_name, description, location, price, availability, accommodationId];
    
        const result = await pool.query(query, values);
        
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