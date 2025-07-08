import { RowDataPacket } from "mysql2"; 

export interface IPlants extends RowDataPacket {
  id: number
  name: string
  about: string
  image: string
}