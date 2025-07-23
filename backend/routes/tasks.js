const express = require("express");
const router = express.Router();
const pool = require("../db");

// Create a task
router.post("/", async (req, res) => {
  const { title, description } = req.body;
  const result = await pool.query(
    "INSERT INTO task (title, description) VALUES ($1, $2) RETURNING *",
    [title, description]
  );
  res.json(result.rows[0]);
});

// Get recent 5 uncompleted tasks
router.get("/", async (req, res) => {
  const result = await pool.query(
    "SELECT * FROM task WHERE completed = false ORDER BY created_at DESC LIMIT 5"
  );
  res.json(result.rows);
});

// Mark a task as completed
router.put("/:id/done", async (req, res) => {
  const { id } = req.params;
  await pool.query("UPDATE task SET completed = true WHERE id = $1", [id]);
  res.sendStatus(204);
});

module.exports = router;
