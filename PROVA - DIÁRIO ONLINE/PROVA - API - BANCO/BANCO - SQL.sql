CREATE DATABASE livraria;

USE livraria;

CREATE TABLE livro (
  id         INT AUTO_INCREMENT PRIMARY KEY,
  genero     VARCHAR(50),
  autor      VARCHAR(150) NOT NULL,
  nome       VARCHAR(200) NOT NULL,
  data_livro DATE
);

CREATE TABLE cliente (
  id     INT AUTO_INCREMENT PRIMARY KEY,
  nome   VARCHAR(150) NOT NULL,
  genero VARCHAR(20),
  idade  INT,
  cidade VARCHAR(100)
);

CREATE TABLE venda (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  cliente_id  INT NOT NULL,
  data_venda  DATE NOT NULL,
  valor_total DECIMAL(10,2) NOT NULL
);

CREATE TABLE venda_item (
  id             INT AUTO_INCREMENT PRIMARY KEY,
  venda_id       INT NOT NULL,
  livro_id       INT NOT NULL,
  quantidade     INT NOT NULL,
  preco_unitario DECIMAL(10,2) NOT NULL
);
