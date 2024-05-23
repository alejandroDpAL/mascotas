import { check } from "express-validator";

// REGISTRAR
export const validarRCategories = [
  check(
    "name",
    "El nombre es obligatorio y debe contener solo letras, máximo 32 caracteres"
  )
    .optional()
    .trim()
    .isLength({ max: 50 })
    .not()
    .isEmpty()
    .isLength({ max: 20 })
    .matches(/^[A-Za-z\s]+$/),
];

// ACTUALIZAR
export const validarACategories = [
  check(
    "nombre",
    "El nombre es obligatorio y debe contener solo letras, máximo 32 caracteres"
  )
    .optional()
    .trim()
    .isLength({ max: 32 }) 
    .matches(/^[A-Za-z\s]+$/),
];
