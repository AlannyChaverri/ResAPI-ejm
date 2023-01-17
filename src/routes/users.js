const { Router } = require("express");
const router = Router();

const fetch = require("node-fetch");

router.get("/", async (req, res) => {
  const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await respuesta.json();
  console.log(users);
  res.send("users");
});

module.exports = router;
