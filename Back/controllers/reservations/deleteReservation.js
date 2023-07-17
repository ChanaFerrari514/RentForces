const pool = require('../../configs/db');

const deleteReservation = async (req, res) => {
  const reservationId = req.params.id;

  try {
    // Supprimer la réservation de la base de données
    const query = 'DELETE FROM reservations WHERE reservation_id = $1';
    await pool.query(query, [reservationId]);

    res.status(200).json({ message: 'The reservation has been successfully deleted' });
  } catch (error) {
    console.error('Error when deleting reservation:', error);
    res.status(500).json({ message: 'An error occurred while deleting the reservation' });
  }
};

module.exports = deleteReservation;
