-- Como criar tabelas:
-- Tipos de dados: char (exibe e aceita somente 1 caracter); varchar (exibe e aceita diversos caracteres); int (exibe e aceita numéricos inteiros); 
create table usuarios (
    nome varchar(32), 
    senha varchar(8)
);
-- Inserindo dados em uma tabela previamente criada
insert into usuarios (nome, senha) values (
    "usuarioTeste",
    "12345678"
);
-- Comandos básicos de navegação:

-- Exibindo dados de um db por completo
show databases;
-- Criando um novo db
create database nome_qualquer;
-- Acessando um db previamente criado 
use nome_qualquer;
-- Exibindo tabelas dentro de um db
show tables;
-- Exibindo conteúdos presentes em uma tabela
describe nome_qualquer;
-- Deletando dados específicos 
drop database nome_qualquer;
-- Verificando caminho específico do db
show variables like 'datadir';