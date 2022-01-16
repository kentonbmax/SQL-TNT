sleep 20
/opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P Your!StrongPass -d master -i createdb.sql
