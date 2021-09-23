const pool = require("../db");

// create
const createFriend = async (req, res) => {
  try {
    const { name, email } = req.body;
    const newFriend = await pool.query(
      `INSERT INTO "friendslist" (name, email) VALUES ($1, $2) RETURNING *`,
      [name, email]
    );

    res.json(newFriend.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};

// read
const getFriends = async (req, res) => {
  try {
    const allFriends = await pool.query(`SELECT * FROM "friendslist"`);

    res.json(allFriends.rows);
  } catch (err) {
    console.error(err.message);
  }
};

// read individual
const getFriend = async (req, res) => {
  try {
    const { id } = req.params;
    const friend = await pool.query(
      `SELECT * FROM "friendslist" WHERE friend_id = $1`,
      [id]
    );
    res.json(friend.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};

// update
const updateFriend = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  try {
    if (!id) {
      res.json({
        err: "No friend with that id was found!",
      });
    }
    const updateFriend = await pool.query(
      "UPDATE friendslist SET name = $1, email = $2 WHERE friend_id = $3",
      [name, email, id]
    );

    res.json(`Friend ID ${id} was updated successfully!`);
  } catch (err) {
    console.error(err.message);
  }
};

// delete
const deleteFriend = async (req, res) => {
  const { id } = req.params;

  try {
    const deleteFriend = await pool.query(
      "DELETE FROM friendslist WHERE friend_id = $1",
      [id]
    );

    res.json(`Friend ID ${id} was successfully deleted!`);
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = {
  createFriend,
  getFriends,
  getFriend,
  updateFriend,
  deleteFriend,
};
