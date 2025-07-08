import { Request, Response } from "express";
import { pool } from "../db/connect";

export const getPlants = async (req: Request, res: Response) => {
  try {
    const [plants] = await pool.query("select * from ");
  } catch(error) {
    console.log(error)
    res.status(500).json({
      message: "Не удалось получить данные!"
    })
  }
} 