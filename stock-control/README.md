# PROJETO-2

## Clonando repositório do GitHub

cd C:\Desenvolvimento\Node-Udemy

git clone https://github.com/alvescvinicius/nodejs-frontend-angular.git -b main

cd C:\Desenvolvimento\Node-Udemy\nodejs-frontend-angular

## Criação da branch vazia (orphan)

git checkout --orphan projeto-2

git rm -rf .

git clean -fdx

touch README.md

git add .

git commit "Criacao da branch projeto-2 vazia"

git push origin projeto-2

## Criação do projeto

cd C:\Desenvolvimento\Node-Udemy\nodejs-frontend-angular

Adicionado .gitignore, LICENSE.

ng new stock-control

? Would you like to add Angular routing? Yes

? Which stylesheet format would you like to use? SCSS

## Commit inicial do projeto-2

git add .

git commit -m "Criacao do projeto-2"

git push origin projeto-2

# Instalando PrimeNg

npm i primeng@15.4.1

npm i primeicons@6.0.1

npm i primeflex@3.3.0

# Configurando PrimeNg

Em angular.json:

            "styles": [
              "src/styles.scss",
              "node_modules/primeng/resources/themes/lara-light-blue/theme.css",
              "node_modules/primeng/resources/primeng.min.css",
              "node_modules/primeicons/primeicons.css",
              "node_modules/primeflex/primeflex.css"
            ],

Alterar app.component.ts
Alterar app.module.ts

* Seguir configurações Getting start da página do PrimeNg
