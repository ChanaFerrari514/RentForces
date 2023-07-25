const pool = require('../../configs/db');
const { sql } = require('slonik');

const updateReservation = async (req, res, next) => {
  try {
    const reservationId = req.params.id;
    // Récupérer les informations nécessaires depuis le corps de la requête
    const { accommodationId, startResDate, endResDate } = req.body;

    // Vérifier si l'hébergement est disponible pour les dates spécifiées
    // TODO2: verifier aussi si les dates entrees sont valides car sinon il y erreur 
    // par exemple, startDate = '2023-13-23'
    const connection = await pool;
    
    const checkAvailabilityQuery = sql.unsafe`
      SELECT *
      FROM reservations
      WHERE accommodation_id = ${accommodationId}
        AND (${startResDate}::DATE, ${endResDate}::DATE) OVERLAPS (start_res_date, end_res_date)
    `;
    
    const availabilityResult = await connection.query(checkAvailabilityQuery);

    console.log(availabilityResult);

    if (availabilityResult.rows.length > 0) {
      // L'hébergement est déjà réservé pour les dates spécifiées
      return res.status(400).json({ 
        success: false, 
        message: 'The accommodation is already booked for the specified dates.' 
      });
    }

    // Mettre a jour la réservation dans la base de données
    const updateReservationQuery = sql.unsafe`
      UPDATE reservations
      SET  
        start_res_date = ${startResDate}, end_res_date = ${endResDate}
      WHERE reservation_id = ${reservationId}
      RETURNING *;
    `;
    const result = await connection.query(updateReservationQuery);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Reservation not found for the update.' });
    }

    res.status(200).json({
      success: true,
      message: 'The reservation has been successfully updated.',
      reservation: result.rows[0] // Retourner la réservation mise a jour
    });
  } catch (error) {
    // Gestion des erreurs
    next(error);
  }

};

module.exports = updateReservation;
