# SQL-TNT 
## SQL + Typescript + Node + Template = an explosion of creativity.

<image src="https://user-images.githubusercontent.com/15804484/29634837-235c2878-8819-11e7-8304-166f4c27d7fd.png" height="760" width="520">

## DB Template
> Current template provided requires Docker running 4gb of ram.

## Setup SQL DB
> Note - this template uses .env to simulate environment variables at runtime. 
> Warning - You should update the docker file with a strong password for sa. 
> Warning - .sh files must be in unix format. Set your eol setting in vsc to `/n` or check docker logs is tnt db not created. 
1. run `docker build -t sqltnt .`
1. run `docker run -d -p 1401:1433 sqltnt`

## Running the Code
1. `npm install`
1. `npm run watch`
1. run the VSC debugger or `npm start`

## Optional
1. Launch SSMS
1. Enter in localhost,1401
1. Select sql login and use the credentials in the dockerfile.







