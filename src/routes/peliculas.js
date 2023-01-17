const { Router } = require("express");
const router = Router();
const _ = require("underscore");

const peliculas = require("../ejemplo.json");
console.log(peliculas);

// route ver pelicula
router.get("/", (req, res) => {
  //   res.send("peliculas");
  res.json(peliculas);
});

// route agregar pelicula
router.post("/", (req, res) => {
  //   console.log(req.body);
  const { titulo, director, anno } = req.body;
  if (titulo && director && anno) {
    // insertar
    const id = peliculas.length + 1;
    const newPelicula = { ...req.body, id };
    console.log(newPelicula);
    peliculas.push(newPelicula);
    res.json(peliculas);
    // res.json("Guardado");
  } else {
    // estado de error
    res.status(500).json({ error: "error al insertar" });
  }
});

// actualizar
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { titulo, director, anno } = req.body;

  if (titulo && director && anno) {
    _.each(peliculas, (pelicula, i) => {
      if (pelicula.id == id) {
        pelicula.titulo = titulo;
        pelicula.director = director;
        pelicula.anno = anno;
      }
    });
    res.json(peliculas);
  } else {
    res.status(500).json({ error: "error al actualizar" });
  }
});

// route para eliminar
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  //   console.log(req.params);
  _.each(peliculas, (pelicula, i) => {
    if (pelicula.id == id) {
      peliculas.splice(i, 1);
    }
  });
  //   res.send("eliminado");
  res.send(peliculas);
  // const {}
});
module.exports = router;
