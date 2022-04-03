# HOOLY - TEST

```
git clone https://github.com/vaka440/invivox_test.git
cd invivox_test

docker compose up -d
```

## allez sur l'invité de commande de l'instance: ```back_symfony``` 
## saisir les commandes suivantes :

```
composer install
php bin/console doctrine:database:create
php bin/console doctrine:fixtures:load
```

## accès au front: 

http://localhost:4201/

