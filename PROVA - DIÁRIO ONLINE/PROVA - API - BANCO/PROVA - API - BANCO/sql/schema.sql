create database if not exists livraria;
use livraria;

create table if not exists livro (
  id int primary key auto_increment,
  genero varchar(100),
  autor varchar(150),
  nome varchar(200),
  data_livro date
);

create table if not exists cliente (
  id int primary key auto_increment,
  nome varchar(150),
  genero varchar(20),
  idade int,
  cidade varchar(100)
);

create table if not exists venda (
  id int primary key auto_increment,
  cliente_id int not null,
  data_venda date,
  valor_total decimal(10,2),
  foreign key (cliente_id) references cliente(id)
);

create table if not exists venda_item (
  id int primary key auto_increment,
  venda_id int not null,
  livro_id int not null,
  quantidade int not null,
  preco_unitario decimal(10,2) not null,
  foreign key (venda_id) references venda(id),
  foreign key (livro_id) references livro(id)
);
