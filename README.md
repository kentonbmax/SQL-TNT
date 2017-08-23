# SQL-TNT
SQL + Typescript Node Templatee(TNT)
SQL ORM using Sequelize.

## DB Template
> Current template provided requires Docker running 4gb of ram.

## Setup SQL DB
> Note - this template uses .env to simulate environment variables at runtime. 
> Warning - You should update the docker file with a strong password for sa. 
1. run `docker build -t sqltnt .`
1. run `docker run -d -p 1401:1433 sqltnt`

## Running the Code
1. npm install
1. npm run watch
1. run the VSC debugger or `npm start`

##Optional
1. Launch SSMS
1. Enter in localhost,1401
1. Select sql login and use the credentials in the dockerfile.







