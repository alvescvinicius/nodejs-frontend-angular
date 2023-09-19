# nodejs-frontend-angular

Repositorio dedicado aos projetos e estudos de Angular

Udemy - Formação Angular (v15+) - 2023

1. Configurando ambiente de desenvolvimento:

NodeJs - Instrutor usando versão 18.15.0 durante esse curso. (Na minha máquina v18.17.1).

- Verficar com node -v

NPM - Instrutor do curso usando 9.1.2. (Na minha máquina 9.6.7).

- Verificar com npm -v

Angular - Instrutor usando versão 16.0.2. (Na minha máquina 15.2..4).

- Verificar com ng -v

2. Instalando extensões no VsCode:

Adicionar extensões:

Angular Extension Pack

Angular 10 Snippet (Instrtutor Usando)

3. O que aprenderemos desenvolvendo o projeto:

4. Gerando nosso projeto:

# OBS: Criei um repositório no GitHub para os projetos que serão feitos no curso:

cd C:\Desenvolvimento\Node-Udemy
 
git clone https://github.com/alvescvinicius/nodejs-frontend-angular.git -b main

cd C:\Desenvolvimento\Node-Udemy\nodejs-frontend-angular

Após clone, foi criado a branch projeto-1:

git checkout -b projeto-1

git push origin projeto-1
 
#

Abrir CMD como administrador:

cd C:\Desenvolvimento\Node-Udemy\nodejs-frontend-angular

ng new wather-app

- Usar sistema de rotas do angular.

- Estilo SCSS.

cd wather-app

code .

CTRL + J (Abrir terminal no VSCODE)

npm start

# OBS: Commitar criação do projeto no Git

Utilizar nossa branch projeto-1 (Diretorio root do nosso projeto: wather-app)

git checkout projeto-1

git add .

git commit -m "Criacao do projeto"

git push

#

5. Adicionando estilos e importações:

6. Instalando biblioteca de ícones:

npm install @fortawesome/fontawesome-svg-core
npm install @fortawesome/free-solid-svg-icons
npm install @fortawesome/angular-fontawesome@0.12.x

7. Criando nosso primeiro componente e rota

Criar diretorio modules/wheater/page

cd modules/wheater/page

ng generate component wheater-home