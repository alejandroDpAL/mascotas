import { pool } from "../database/conexion.js"

export const ListarCategorias = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM categories')
        if (result.length > 0) {
            return res.status(200).json(result)
        }
        return res.status(404).json({
            message: 'No se encontraron categorias'
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Error al conectar con el server' + error
        })
    }
}

export const CrearCategorias = async (req, res) => {
    try {
        const { name } = req.body;
        const [ result ] = await pool.query('INSERT INTO categories SET name= ? ', [name]);

        if (result.affectedRows > 0) {
            return res.status(200).json({ message: 'Categoria creada con éxito' });
        }
        return res.status(404).json({ message: 'No se pudo crear la categoria' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}