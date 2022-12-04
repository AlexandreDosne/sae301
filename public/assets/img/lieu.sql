DROP TABLE IF EXISTS lieu;
CREATE TABLE lieu(
   id      INT  NOT NULL PRIMARY KEY AUTO_INCREMENT
  ,nom     VARCHAR(32) NOT NULL
  ,adresse VARCHAR(32) NOT NULL
  ,capacite VARCHAR(32)
);

INSERT INTO lieu(nom,adresse,capacite) VALUES ("Salle de l'étoile",'10 avenue leo lagrange',1460);
INSERT INTO lieu(nom,adresse,capacite) VALUES ('La rotonde','CHEMIN DU MAS DE LAFONT',78);
INSERT INTO lieu(nom,adresse,capacite) VALUES ('LAURETTE THEATRE AVIGNON','16-18 rue joseph vernet',40);
INSERT INTO lieu(nom,adresse,capacite) VALUES ('MUSÉE ANGLADON','5 rue Laboureur',320);
INSERT INTO lieu(nom,adresse,capacite) VALUES ('Cinéma théatre le Rex','11 place cardinal maury',11);
INSERT INTO lieu(nom,adresse,capacite) VALUES ("Théatre de l'observance","10 rue de l'observance",80);