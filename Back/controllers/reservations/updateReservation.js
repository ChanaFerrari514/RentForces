const pool = require('../../configs/db');
const { sql } = require('slonik');

const updateReservation = async (req, res, next) => {
  try {
    // Récupérer les informations nécessaires depuis le corps de la requête
    const { accommodationId, userId, startResDate, endResDate } = req.body;

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

    if (availabilityResult.rows.length > 0) {
      // L'hébergement est déjà réservé pour les dates spécifiées
      return res.status(400).json({ 
        success: false, 
        message: 'The accommodation is already booked for the specified dates.' 
      });
    }

    // Insérer la réservation dans la base de données
    // TODO: ca devrait plutot s'appeler insertReservation.js car on n'est pas
    // entrain de updater une reservation en particulier
    const insertReservationQuery = sql.unsafe`
      INSERT INTO reservations (
        user_id, accommodation_id, start_res_date, end_res_date
      )
      VALUES (
        ${userId}, ${accommodationId}, ${startResDate}, ${endResDate}
      )
      RETURNING *;
    `;

    const insertedReservation = await connection.query(insertReservationQuery);

    // TODO: donc ca devrait etre 'The reservation has been successfully added.',
    res.status(200).json({
      success: true,
      message: 'The reservation has been successfully updated.',
      reservation: insertedReservation.rows[0] // Retourner la réservation insérée
    });
  } catch (error) {
    // Gestion des erreurs
    next(error);
  }

};

module.exports = updateReservation;
