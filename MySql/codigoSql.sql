SELECT * FROM membros;

INSERT INTO membros (membros_id, nome, cargo, genero) VALUES (2, 'Joao Silva', 'Dev Full S', 'M');
INSERT INTO membros (membros_id, nome, cargo, genero) VALUES (3, 'Maria Santos', 'Analista de dados', 'F');
INSERT INTO membros (membros_id, nome, cargo, genero) VALUES (4, 'Pedro Oliveira', 'Engenheiro de Soft', 'M');
INSERT INTO membros (membros_id, nome, cargo, genero) VALUES (5, 'Ana Costa', 'Adm de Redes', 'F');
INSERT INTO membros (membros_id, nome, cargo, genero) VALUES (6, 'Carlos Souza', 'Segurança', 'M');

SELECT * FROM tarefas;

INSERT INTO tarefas(tarefas_id, descricao,data_inicio, data_finalizacao, membros_id)
VALUES (3, 'Desenvolver novo módulo de login para o sistema.', '2024-06-19', '2024-06-19',2);
INSERT INTO tarefas(tarefas_id, descricao,data_inicio, data_finalizacao, membros_id)
VALUES (4, ' Implementar melhorias na interface do usuário', '2024-06-19', '2024-06-19',6);
INSERT INTO tarefas(tarefas_id, descricao,data_inicio, data_finalizacao, membros_id)
VALUES (5, 'Testar e validar integração com API externa..', '2024-06-19', '2024-06-19',3);
INSERT INTO tarefas(tarefas_id, descricao,data_inicio, data_finalizacao, membros_id)
VALUES (6, ' Realizar manutenção preventiva nos servidores.', '2024-06-19', '2024-06-19',4);
INSERT INTO tarefas(tarefas_id, descricao,data_inicio, data_finalizacao, membros_id)
VALUES (7, ' Realizar manutenção preventiva na AWS.', '2024-06-19', '2024-06-19',2);

SELECT nome, cargo, genero
FROM membros
WHERE genero = 'M';

SELECT * FROM membros WHERE nome LIKE 'A%';	 #CONSULTAR NOMES QUE COMEÇAM COM LETRA A

SELECT * FROM membros WHERE cargo LIKE 'E%'; #CONSULTAR CARGOS QUE COMEÇAM COM A LETRA E 

SELECT * FROM membros WHERE nome LIKE '%A' AND cargo LIKE 'D%' 






