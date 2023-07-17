const pool = require('../../configs/db');

const updateReservation = async (req, res, next) => {
  try {
    // Récupérer les informations nécessaires depuis le corps de la requête
    const { accommodationId, userId, startDate, endDate } = req.body;

    // Vérifier si l'hébergement est disponible pour les dates spécifiées
    const checkAvailabilityQuery = `
      SELECT *
      FROM reservations
      WHERE accommodation_id = $1
        AND ($2::DATE, $3::DATE) OVERLAPS (start_date, end_date)
    `;
    const checkAvailabilityValues = [accommodationId, startDate, endDate];
    const availabilityResult = await pool.query(checkAvailabilityQuery, checkAvailabilityValues);

    if (availabilityResult.rows.length > 0) {
      // L'hébergement est déjà réservé pour les dates spécifiées
      return res.status(400).json({ success: false, message: 'The accommodation is already booked for the specified dates.' });
    }

    // Insérer la réservation dans la base de données
    const insertReservationQuery = `
      INSERT INTO reservations (user_id, accommodation_id, start_date, end_date)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `;
    const insertReservationValues = [userId, accommodationId, startDate, endDate];
    const insertedReservation = await pool.query(insertReservationQuery, insertReservationValues);

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