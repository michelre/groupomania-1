# Commandes

Aide sequelize pour accès aux commandes

```
./node_modules/.bin/sequelize-cli --help
```

Créer la base de données

```
./node_modules/.bin/sequelize-cli db:create
```

Créer les modèles

```
./node_modules/.bin/sequelize-cli model:generate --name=Post --attributes=id:integer,title:string
```

Appliquer les migrations sur la base de données

```
./node_modules/.bin/sequelize-cli db:migrate
```
