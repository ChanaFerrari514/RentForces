const pool = require('../../configs/db');

module.exports = async (req, res, next) => {
  try {
    const query = 'SELECT * FROM accommodations';
    const result = await pool.query(query);

    const accommodations = result.rows;

    res.status(200).json({
        success: true,
        data: accommodations,
    });

  } catch (error) {
    // Gestion des erreurs
    next(error)
  }
  };
  