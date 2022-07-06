Projet 7 - Groupomania

Le projet consiste à construire un réseau social interne pour les employés de Groupomania. 

Installation de l'application Groupomania

Backend : Node.js, Express.js, Sequelize et MySQL.

Configuration du Backend:
-Écrire dans le terminal cd back.
-Taper npm install pour installer toutes les dépendances du backend.
-Créer un fichier .env dans le dossier back et complèter les informations suivantes: 
JWT_SECRET= ''
USER= ''
HOST= ''
MDP= ''
DB= 'g'
DIALECT= ''
PORT= ''
-Créer un dossier images
-Lancer le serveur en entrant dans le terminal: nodemon server.
-Configurer de la Base de données MySQL via Sequelize en  ouvrant le fichier app.js et en dé-commentant : 
{ force: true }).then(() => {console.log('Drop and re-sync db.');}
Vous devriez voir dans votre terminal : "Connected to the database!" et "Drop and re-sync db.". Vous pouvez ensuite commenter de nouveau ce snippet de code.
-Pour tester les droits d'administrateur, créer un utilisateur, puis aller sur la base de données et modifier la colonne "administrator" en entrant le chiffre 1. Sauvegarder puis se connecter.

Frontend: React.js.

Configuration du Frontend:

-Écrire dans le terminal cd front.
-Taper npm install pour installer toutes les dépendances du frontend.
-Lancer le serveur en entrant dans le terminal: npm start.
-Ouvrir [http://localhost:3000](http://localhost:3000) pour le voir dans le navigateur
