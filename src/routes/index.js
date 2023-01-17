const { Router } = require("express");
const router = Router();

// routes
router.get("/", (req, res) => {
  //   res.send("Hola mundo");
  res.json({ Title: "Hello word" });
});

router.get("/test", (req, res) => {
  const data = {
    name: "Alanny",
  };
  res.json(data);
});

module.exports = router;
