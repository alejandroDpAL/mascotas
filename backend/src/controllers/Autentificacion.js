import { pool } from "../database/conexion.js";
import Jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


export const validar = async (req, res) => {
    try {
        let { email, password } = req.body;
        const sql = `SELECT * FROM users WHERE email = ?`;
        const [rows] = await pool.query(sql, [email]);

        if (rows.length === 0) {
            return res.status(401).json({ message: "Usuario no registrado" });
        }

        const user = rows[0];
        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            return res.status(401).json({ message: "Contraseña incorrecta" });
        }

        const token = Jwt.sign({ 
            id: user.id
        }, process.env.AUT_SECRET, {
            expiresIn: process.env.AUT_EXPIRE,
        });

        res.status(200).json({ user, token, message: 'Token generado con éxito' });
    } catch (error) {
        console.error('Error en la validación:', error);
        res.status(500).json({ status: 500, message: 'Error al conectar con el servidor: ' + error.message });
    }
};
export const validarToken = async (req, res, next) => {
    try {
        let tokenClient = req.headers['token'];
      
        if (!tokenClient) {
            return res.status(401).json({ mensaje: 'Token requerido' });
        } else {
            Jwt.verify(tokenClient, process.env.AUT_SECRET, (error, decoded) => {
                if (error) {
                    return res.status(403).json({ mensaje: 'Token inválido o ha expirado' });
                } else {
                    req.users = decoded;
                    next();
                }
            });
        }
    } catch (error) {
        return res.status(500).json({ mensaje: 'Error del servidor' + error.message });
    }
};


