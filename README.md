# 

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

# ce qu'il reste à faire:
    - back:
        - inclure DTO pour controler les données des requetes reçus
        - controler qu'une reservation n'est pas déjà en base avant de l'ajouter
    - front:
        - le numéro en moins le vendredi n'est pas géré
        - typage avec des models ne sont pas implémenté ('any' à la place)
        - 