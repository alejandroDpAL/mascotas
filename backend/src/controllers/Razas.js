import { pool } from "../database/conexion.js"

export const ListarRazas = async (req,res ) => {
    try {
        const [result] = await pool.query('SELECT * FROM races')
        if (result.length > 0) {
            return res.status(200).json(result)
        }
        return res.status(404).json({
            message: 'No se encontraron razas.'
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Error al conectar con el server' + error
        })
    }
}

export const CrearRazas = async (req, res) => {
    try {
        const { name } = req.body;
        const [ result ] = await pool.query('INSERT INTO races SET name= ? ', [name]);

        if (result.affectedRows > 0) {
            return res.status(200).json({ message: 'Raza creada con éxito' });
        }
        return res.status(404).json({ message: 'No se pudo crear la raza' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}