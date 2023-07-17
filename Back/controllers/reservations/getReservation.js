const pool = require('../../configs/db');


module.exports = async (req, res, next) => {
  try {
    const query = 'SELECT * FROM reservations';
    const result = await pool.query(query);

    const reservations = result.rows;

    res.status(200).json({
        success: true,
        data: reservations,
    });

  } catch (error) {
    // Gestion des erreurs
    next(error)
  }
  };