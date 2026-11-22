create database if not exists gamevault;

use gamevault;

create table if not exists itens (
    id int auto_increment primary key,
    nome varchar(100) not null,
    genero varchar(50) not null,
    plataforma varchar(50) not null,
    ano int not null,
    nota decimal(3,1) not null
);

insert into itens (nome, genero, plataforma, ano, nota) values
('Minecraft', 'Sandbox', 'PC', 2011, 10.0),
('Valorant', 'FPS', 'PC', 2020, 9.0),
('The Witcher 3', 'RPG', 'PC', 2015, 9.5);

select * from itens;
