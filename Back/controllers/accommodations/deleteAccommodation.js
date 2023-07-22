const { sql } = require('slonik');
const pool = require('../../configs/db');

const deleteAccommodation = async (req, res) => {
  const accommodationId = req.params.id;

  try {
    // Supprimer l'hébergement de la base de données
    const query = 'DELETE FROM accommodations WHERE id = $1';
    await pool.query(query, [accommodationId]);

    res.status(200).json({ message: 'Hosting has been successfully deleted' });
  } catch (error) {
    console.error('Error when deleting hosting:', error);
    res.status(500).json({ message: 'An error occurred while deleting the hosting.' });
  }
};

module.exports = deleteAccommodation;
