CREATE TABLE medico(
crm VARCHAR(30),
id_medico INT NOT NULL AUTO_INCREMENT,
nome_m VARCHAR(45),
especialidade_m VARCHAR(45),
endereço_m VARCHAR(45),
 PRIMARY KEY (id_medico)
);

CREATE TABLE paciente(
id_p INT NOT NULL AUTO_INCREMENT,
cpf VARCHAR(12),
nome_p VARCHAR(45),
data_nasc DATE, 
genero CHAR(1),
 PRIMARY KEY (id_p)
);

CREATE TABLE consulta(
id_consulta INT PRIMARY KEY AUTO_INCREMENT, 
data_consulta DATE NOT NULL,
receita_consulta VARCHAR(100) NOT NULL,
hora_consulta VARCHAR(10) NOT NULL,
id_p INT NOT NULL,
id_medico INT NOT NULL, 
FOREIGN KEY (id_p) REFERENCES medico(id_medico),
FOREIGN KEY (id_medico) REFERENCES medico(id_medico)
);

CREATE TABLE telefone_p(
telefone_idP INT AUTO_INCREMENT NOT NULL,
  telefone_p VARCHAR(45),
  id_p INT NOT NULL,
    PRIMARY KEY (telefone_idP),
  FOREIGN KEY (id_p) REFERENCES paciente(id_p)
);

CREATE TABLE telefone_m(
telefone_idM INT PRIMARY KEY AUTO_INCREMENT,
id_medico INT NOT NULL,
  FOREIGN KEY (id_medico) REFERENCES medico(id_medico),
  telefone_m VARCHAR(45)
);

SELECT * FROM consulta

