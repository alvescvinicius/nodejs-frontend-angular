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

## Instalando PrimeNg

npm i primeng@15.4.1

npm i primeicons@6.0.1

npm i primeflex@3.3.0

## Configurando PrimeNg

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

## 21. Implementando layout da tela de login - Parte 1

Adicionar imagem em assets.

Criar diretório app/modules:

cd modules

ng g component home

## 24. Criando services de criar e autenticar usuário

Baixar Api: https://github.com/marcosJuniorPassarella/stock-api

cd C:\Desenvolvimento\stock-api-master

npm install

npm run dev

Criar environments:

mkdir stock-control\src\environments

Criar serviço user:

mkdir stock-control\src\app\services\user

cd stock-control\src\app\services\user

ng g service user

Criar interface:

mkdir stock-control\src\app\models\interfaces\user

Criar interface Auth:

mkdir \stock-control\src\app\models\interfaces\user\auth

## 25. Implementando funcionalidade de criar e autenticar usuário

Usaremos ngx-cookie-service para trabalhar com Cookie.

Instalação: npm i ngx-cookie-service@15.0.0

Configuração: AppModule - providers

## 28. Criando módulo, componente e rota funcionalidade de dashboard

cd \stock-control\modules

ng generate module dashboard

mkdir \stock-control\modules\page

cd \stock-control\modules\page

ng g component dashboard-home

## 30. Implementando guarda de rotas para rotas protegidas

Criar diretório app/guards

Criar service auth-guard

## 31. Instalando biblioteca ChartJs

npm install chart.js@4.3.0 --save

Em angular.json:

"scripts": ["node_modules/chart.js/dist/chart.js"]

