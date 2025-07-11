-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Июл 11 2025 г., 20:24
-- Версия сервера: 9.1.0
-- Версия PHP: 8.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `fnb`
--

-- --------------------------------------------------------

--
-- Структура таблицы `knex_migrations`
--

CREATE TABLE `knex_migrations` (
  `id` int UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `batch` int DEFAULT NULL,
  `migration_time` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `knex_migrations`
--

INSERT INTO `knex_migrations` (`id`, `name`, `batch`, `migration_time`) VALUES
(1, '20250708190404_plants.ts', 1, '2025-07-09 14:23:09');

-- --------------------------------------------------------

--
-- Структура таблицы `knex_migrations_lock`
--

CREATE TABLE `knex_migrations_lock` (
  `index` int UNSIGNED NOT NULL,
  `is_locked` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `knex_migrations_lock`
--

INSERT INTO `knex_migrations_lock` (`index`, `is_locked`) VALUES
(1, 0);

-- --------------------------------------------------------

--
-- Структура таблицы `plants`
--

CREATE TABLE `plants` (
  `id` int UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `about` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `rating` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `plants`
--

INSERT INTO `plants` (`id`, `name`, `about`, `rating`, `image`) VALUES
(1, 'Fig. 1 (plant)', 'Имеется спорная точка зрения, гласящая примерно следующее: активно развивающиеся страны третьего мира своевременно верифицированы.', '2.4', 'http://192.168.0.103:8000/public/uploads/fig1.png'),
(2, 'Fig. 2 (flower)', 'Прежде всего, синтетическое тестирование влечет за собой процесс внедрения и модернизации условий.', '3.1', 'http://192.168.0.103:8000/public/uploads/fig2.png'),
(3, 'Fig. 3 (leaf)', 'Лишь непосредственные участники прогресса неоднозначны и будут в равной степени предоставлены сами себе для работы.', '1.2', 'http://192.168.0.103:8000/public/uploads/fig3.png'),
(4, 'Fig. 4 (wood)', 'Базовый вектор развития не даёт нам иного выбора, кроме определения новых предложений.', '1.4', 'http://192.168.0.103:8000/public/uploads/fig4.png'),
(5, 'Fig. 1 (plant)', 'Имеется спорная точка зрения, гласящая примерно следующее: активно развивающиеся страны третьего мира своевременно верифицированы.', '2.4', 'http://192.168.0.103:8000/public/uploads/fig1.png'),
(6, 'Fig. 2 (flower)', 'Прежде всего, синтетическое тестирование влечет за собой процесс внедрения и модернизации условий.', '3.1', 'http://192.168.0.103:8000/public/uploads/fig2.png');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `knex_migrations`
--
ALTER TABLE `knex_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `knex_migrations_lock`
--
ALTER TABLE `knex_migrations_lock`
  ADD PRIMARY KEY (`index`);

--
-- Индексы таблицы `plants`
--
ALTER TABLE `plants`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `knex_migrations`
--
ALTER TABLE `knex_migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `knex_migrations_lock`
--
ALTER TABLE `knex_migrations_lock`
  MODIFY `index` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `plants`
--
ALTER TABLE `plants`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
