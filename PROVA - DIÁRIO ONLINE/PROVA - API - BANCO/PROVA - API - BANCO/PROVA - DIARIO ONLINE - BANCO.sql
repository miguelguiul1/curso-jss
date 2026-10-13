create database diario;
use diario;

create table usuarios (
id int primary key auto_increment,
login varchar (30) not null unique,
senha varchar (200) not null,
criado datetime default current_timestamp
);

create table nota(
id int primary key auto_increment,
usuarios_id int,
data_nota date,
titulo varchar (100),
conteudo text,
criado datetime default current_timestamp,
atualizado datetime,
foreign key (usuarios_id) references usuarios(id) on delete cascade
);