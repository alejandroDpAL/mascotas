
import { pool } from "../database/conexion.js";
import fs from 'fs';
import multer from "multer";
import path from 'path';

export const ListarMascotas = async (req, res) => {
  try {

    const [result] = await pool.query(`
      SELECT 
        pets.id, 
        pets.name, 
        pets.photo,
        races.name as race_name, 
        categories.name as category_name, 
        genders.name as gender_name 
      FROM pets
      JOIN races ON pets.race_id = races.id
      JOIN categories ON pets.category_id = categories.id
      JOIN genders ON pets.gender_id = genders.id;
    `);

    if (result.length > 0) {
      return res.status(200).json(result);
    }

    return res.status(404).json({
      message: 'No se encontraron mascotas'
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Error al conectar con el servidor ' + error.message
    });
  }
};

// Configuración de multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    // Mantener el nombre original de la imagen
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

export const CrearMascotas = async (req, res) => {
  try {

    upload.single('photo')(req, res, async function (err) {
      if (err) {
        console.error('Error al cargar la imagen:', err);
        return res.status(500).json({ message: 'Error al cargar la imagen' });
      }

      const { name, race_id, category_id, gender_id} = req.body;

      if (!race_id || !category_id || !gender_id) {
        return res.status(400).json({ mensaje: "Los campos race_id, category_id y gender_id son obligatorios" });
      }

      const photo = req.file ? req.file.path : null;

      try {
        const [resultado] = await pool.query(
          "INSERT INTO pets (name, race_id, category_id, gender_id, photo) VALUES (?, ?, ?, ?, ?)",
          [name, race_id, category_id, gender_id, photo]
        );

        if (resultado.affectedRows > 0) {
          return res.status(200).json({ mensaje: "Mascota registrada con éxito" });
        } else {
          return res.status(400).json({ mensaje: "Hubo un error, no se pudo guardar la mascota" });
        }
      } catch (dbError) {
        console.error('Error al registrar la mascota en la base de datos:', dbError);
        return res.status(500).json({ mensaje: 'Error interno del servidor' + dbError });
      }
    });
  } catch (error) {
    console.error('Error al registrar la mascota:', error);
    return res.status(500).json({ mensaje: 'Error interno del servidor' + error});
  }
};


export const ActualizarMascotas = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, race_id, category_id, gender_id } = req.body;
    const photo = req.file ? req.file.path : req.body.photo;

    const [result] = await pool.query('UPDATE pets SET name = ?, photo = ?, race_id = ?, category_id = ?, gender_id = ? WHERE id = ?', [name, photo, race_id, category_id, gender_id, id]);

    if (result.affectedRows > 0) {
      return res.status(200).json({
        message: 'Mascota actualizada con éxito'
      });
    }
    return res.status(404).json({
      message: 'No se pudo actualizar la mascota'
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Error al conectar con el servidor ' + error.message
    });
  }
};

export const EliminarMascotas = async (req, res) => {
  try {
    const { id } = req.params;

    const [rows] = await pool.query('SELECT photo FROM pets WHERE id = ?', [id]);
    const photoPath = rows[0]?.photo;

    if (photoPath) {
      fs.unlink(path.resolve(photoPath), (err) => {
        if (err) console.error('Error al eliminar el archivo:', err);
      });
    }

    const [result] = await pool.query('DELETE FROM pets WHERE id = ?', [id]);

    if (result.affectedRows > 0) {
      return res.status(200).json({
        message: 'Mascota eliminada con éxito'
      });
    }
    return res.status(404).json({
      message: 'No se pudo eliminar la mascota.'
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Error al conectar con el servidor ' + error.message
    });
  }
};
