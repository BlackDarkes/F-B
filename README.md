# Wishbone

### 📜 Лицензия
Этот проект распространяется под лицензией **MIT**.  
Подробнее см. [LICENSE](LICENSE).

## Описание проекта 
Wishbone — это сайт природной коллекции растений, он написан на react(TypeScript), Express и Tailwind.

### Функционал

- Адаптивный дизайн
- На мобильных устройствах бургер меню
- Анимации при наведении, фокусировании и нажатии

### Технологии

- Frontend: React, TypeScript, Tailwind. 
  [![React](https://img.shields.io/badge/React-18-%2361DAFB?logo=react)](https://reactjs.org/)  
  ![TypeScript](https://img.shields.io/badge/TypeScript-5-%233178C6?logo=typescript)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-%2306B6D4?logo=tailwindcss)
- Server: Express [![Express](https://img.shields.io/badge/Express-4.18-%2361DAFB?logo=express)](https://expressjs.com/) 
- Дизайн: Figma
  ![Figma](https://img.shields.io/badge/Figma-2-%23F24E1E?logo=figma)

## Установка:

  1) Клониррвание репозитория:
   
  ```bash
  git clone https://github.com/BlackDarkes/F-B.git
  ```

  2) Запуск:

  Node.js >= 18.x
  npm >= 9.x
  ```bash
  npm i && npm run dev
  ```

## Пример кода

  ```TypeScript
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
  ```

## Структура проекта

     project/  
    ├── api       
    ├── frontend      
    └── README.md   
    └── LICENSE.md  

## Изображения проекта:
1. Desktop: 
   ![Главная страница (десктоп)](images/desktop.png)
  *Рис. 1: Главная страница сайта в десктопной версии.* 

2. Mobile:
   ![Главная страница (мобильный)](images/mobile.png)

   *Рис. 2: Главная страница сайта в мобильной версии.*
