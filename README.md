# HOOLY - 7 emplacements 

- l'entreprise hooly dispose de 7 emplacements, le vendredi 6
- un camion peut choisir un emplacement et une seule fois par semaine

créer une interface avec des selects (entreprise hooly, camions...)
et un date select qui se met à jour automatiquement en fonction des emplacements choisie


```
git clone https://github.com/vaka440/hooly_test.git
cd hooly_test

docker compose up -d
```

## allez sur l'invité de commande de l'instance: ```back_symfony``` de Docker
## saisir les commandes suivantes :

```
composer install
php bin/console doctrine:database:create
php bin/console doctrine:migrations:migrate
php bin/console doctrine:fixtures:load
```

## accès au front: 

http://localhost:4201/

