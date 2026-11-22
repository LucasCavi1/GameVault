CREATE DATABASE IF NOT EXISTS gamevault CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE gamevault;

CREATE TABLE IF NOT EXISTS jogos (
  id INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(120) NOT NULL,
  genero VARCHAR(60) NOT NULL,
  plataforma VARCHAR(60) NOT NULL,
  ano INT NOT NULL,
  nota DECIMAL(3,1) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO jogos (nome, genero, plataforma, ano, nota) VALUES
('Minecraft', 'Sandbox', 'PC', 2011, 9.5),
('Valorant', 'FPS', 'PC', 2020, 8.8),
('The Witcher 3', 'RPG', 'PC', 2015, 9.7);
