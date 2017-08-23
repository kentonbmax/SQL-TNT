sleep 20
#run the setup script to create the DB and the schema in the DB
/opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P Your!Strong@Pass -d master -i createdb.sql
