const pool = require('../../configs/db');
const { sql } = require('slonik');

// TODO2: il manquait le next
const deleteReservation = async (req, res, next) => {
  try {
    const reservationId = req.params.id;  
  
    // Supprimer la réservation de la base de données
    const connection = await pool;
    const query = sql.unsafe`
      DELETE FROM reservations WHERE reservation_id = ${reservationId};
    `;
    const result = await connection.query(query);
    console.log(result);

    // TODO2: expliquer traiter cas ou on supprime une reservation inexistante
    if (result.rowCount == 1) {
      res.status(200).json({ message: 'The reservation has been successfully deleted' });
    } else {
      return res.status(404).json({ message: 'Reservation not found for the deletion.' });
    }
  } catch (error) {
    console.error('Error when deleting reservation:', error);
    res.status(500).json({ message: 'An error occurred while deleting the reservation' });
  }
};

module.exports = deleteReservation;
