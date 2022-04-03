# HOOLY - TEST

```
git clone https://github.com/vaka440/invivox_test.git
cd invivox_test

docker compose up -d
```

# allez sur l'instance back sur l'invité de commande et saisir les commandes suivantes :

```
composer install
php bin/console doctrine:database:create
php bin/console doctrine:fixtures:load
```

# le front: 

http://localhost:4201/

