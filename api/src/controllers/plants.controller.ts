import { Request, Response } from "express";
import { pool } from "../db/connect";
import { IPlants } from "../types/typePlants";

export const getPlants = async (req: Request, res: Response) => {
  try {
    const [plants] = await pool.query<IPlants[]>("select * from plants");
    
    if (plants.length === 0) {
      res.status(200).json({
        message: "К сожалению данных нет!"
      })
      return;
    }

    res.status(200).json(plants)
  } catch(error) {
    console.log(error)
    res.status(500).json({
      message: "Не удалось получить данные!"
    })
  }
} 