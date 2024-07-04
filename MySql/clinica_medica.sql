CREATE TABLE medico(
crm VARCHAR(30),
id_medico INT PRIMARY KEY,
nome_m VARCHAR(45),
especialidade_m VARCHAR(45),
endereço_m VARCHAR(45)
);

CREATE TABLE paciente(
id_p INT PRIMARY KEY,
cpf VARCHAR(12),
nome_p VARCHAR(45),
data_nasc DATE, 
genero CHAR(1)
);

CREATE TABLE consulta(
id_consulta INT PRIMARY KEY AUTO_INCREMENT, 
data_consulta DATE NOT NULL,
receita_consulta VARCHAR(100) NOT NULL,
hora_consulta VARCHAR(10) NOT NULL, 
FOREIGN KEY (id_medico) REFERENCES medico(id_medico),
FOREIGN KEY (id_p) REFERENCES medico(id_medico)
);

CREATE TABLE telefone_p(
telefone_idP INT PRIMARY KEY AUTO_INCREMENT,
  FOREIGN KEY (id_p) REFERENCES paciente(id_p),
  telefone_p VARCHAR(45)
);

CREATE TABLE telefone_m(
telefone_idM INT PRIMARY KEY AUTO_INCREMENT,
  FOREIGN KEY (id_medico) REFERENCES medico(id_medico),
  telefone_m VARCHAR(45)
);

SELECT * FROM consulta

