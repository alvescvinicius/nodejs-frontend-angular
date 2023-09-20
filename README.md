# Criação de nova branch para o projeto

cd C:\Desenvolvimento\Node-Udemy

git clone https://github.com/alvescvinicius/nodejs-frontend-angular.git -b main

cd C:\Desenvolvimento\Node-Udemy\nodejs-frontend-angular

Criação da branch vazia (orphan)

git checkout --orphan projeto-2

git rm -rf .

git clean -fdx

touch README.md

git add .

git commit "Criacao da branch projeto-2 vazia"

git push origin projeto-2
