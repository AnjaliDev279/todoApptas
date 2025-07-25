// const express = require("express");
// const router = express.Router();
// const pool = require("../db");

// // Create a task
// router.post("/", async (req, res) => {
//   const { title, description } = req.body;
//   const result = await pool.query(
//     "INSERT INTO task (title, description) VALUES ($1, $2) RETURNING *",
//     [title, description]
//   );
//   res.json(result.rows[0]);
// });

// // Get recent 5 uncompleted tasks
// router.get("/", async (req, res) => {
//   const result = await pool.query(
//     "SELECT * FROM task WHERE completed = false ORDER BY created_at DESC LIMIT 5"
//   );
//   res.json(result.rows);
// });

// // Mark a task as completed
// router.put("/:id/done", async (req, res) => {
//   const { id } = req.params;
//   await pool.query("UPDATE task SET completed = true WHERE id = $1", [id]);
//   res.sendStatus(204);
// });

// module.exports = router;


const express = require("express");
const router = express.Router();
const pool = require("../db");

// Create a task
router.post("/", async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title) {
      // validation: title required
      return res.status(400).json({ error: "Title is required" });
    }
    const result = await pool.query(
      "INSERT INTO task (title, description) VALUES ($1, $2) RETURNING *",
      [title, description]
    );
    res.status(200).json(result.rows[0]);
    //res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get recent 5 uncompleted tasks
router.get("/", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM task WHERE completed = false ORDER BY created_at DESC LIMIT 5"
    );
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Mark a task as completed
router.put("/:id/done", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      "UPDATE task SET completed = true WHERE id = $1 RETURNING *",
      [id]
    );
    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Task not found" });
    }
    // Return 200 with updated task, so tests expecting 200 pass
    res.status(204).json(result.rows[0]);
     //res.sendStatus(204);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;

