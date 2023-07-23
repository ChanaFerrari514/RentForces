const pool = require('../../configs/db');
const { sql } = require('slonik');

// NOTE: il manquait le next
const deleteAccommodation = async (req, res, next) => {
  try {
    const accommodationId = req.params.id;
  
    // Supprimer l'hébergement de la base de données
    const connection = await pool;
    const query = sql.unsafe`
      DELETE FROM accommodations WHERE id = ${accommodationId};
    `;
    const result = await connection.query(query);

    // TODO: expliquer traiter cas ou on supprime un hebergement inexistant
    if (result.rowCount == 1) {
      res.status(200).json({ message: 'Hosting has been successfully deleted' });
    } else {
      return res.status(404).json({ message: 'Hosting not found for the deletion.' });
    }
  } catch (error) {
    console.error('Error when deleting hosting:', error);
    res.status(500).json({ message: 'An error occurred while deleting the hosting.' });
  }
};

module.exports = deleteAccommodation;

