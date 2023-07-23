  const pool = require('../../configs/db');
  const { sql } = require('slonik');


  const createAccommodation = async (req, res, next) => {
    try {   
      // TODO: recevoir photo (du body?)
      const { user_id, accommodation_name, description, location, price, 
              availability, start_avail_date, end_avail_date } = req.body;
  
      console.log('test1');
      console.log(req.body);
      const connection = await pool;
      const query = sql.unsafe`
        INSERT INTO accommodations (
          user_id, accommodation_name, description, location, price, 
          availability, start_avail_date, end_avail_date
        ) VALUES (
          ${user_id}, ${accommodation_name}, ${description}, ${location}, 
          ${price}, ${availability}, ${start_avail_date}, ${end_avail_date}
        ) RETURNING *;
      `;
      const result = await connection.query(query);
  
      res.status(200).json({
        success: true,
        data: result.rows[0],
      });
    } catch (error) {
      console.error('Error when creating a hosting account :', error);
      res.status(500).json({ message: 'An error occurred during the creation of the hosting account.' });
    }
  };
  
  module.exports = createAccommodation;
  
