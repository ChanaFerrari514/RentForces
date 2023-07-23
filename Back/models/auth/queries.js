const { sql } = require('slonik');

const insertUser = (email, username, password) => sql.unsafe`
  INSERT INTO users (
    email, username, password
  ) VALUES (
    ${email}, ${username}, ${password}
  );
`

const selectByUsername = (username) => sql.unsafe`
  SELECT email, username, password
  FROM users
  WHERE username LIKE ${username};
`

const selectByEmail = (email) => sql.unsafe`
  SELECT email, username, password
  FROM users
  WHERE email LIKE ${email};
`

module.exports = {
  insertUser,
  selectByUsername,
  selectByEmail,
}
