# Angular-Crud

## Backend

### 1. Package jason
`
npm init -y
`

### 2. Json-server
`
npm i json-server
`

### 3. Criar a porta



no meu package.json no script 
- "start":     -> comando
- "json-server -> chamando o json-sever
- --watch      -> assistindo a aplicação db.json
- db.json      -> aplicação que esta sendo observada
- --port 3001" -> numero da port

### 4. Rodar
`
npm start
`

## Anotomia do Módulo
- Declarations
   - Compononts
   - Diretivas
   - Pipes
- Exports
   - Components
   - Dirativas
   - Pipes
- Imports 
   - Module A
   - Modulo B
   - Modulo C
- Providers
   - Service A
   - Service B
   - Service C
- Bootstrap
   - App component

## Frontend 

### Base para criar um projeto angular
- isntalling cli
`
npm i -g @angular/cli
`
- Create Applications
`
ng new name-pasta
`
### esse foi o comando que eu usei por o minimal retira algumas coisas
`
 ng new name-pasta --minimal
`

## Criando a Home
`
ng g c views/home
`

## diretivas
`
ng g d directives/home
`

