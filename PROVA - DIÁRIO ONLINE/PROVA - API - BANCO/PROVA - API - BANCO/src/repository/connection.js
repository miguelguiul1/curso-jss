import mysql from 'mysql2/promise'

const con = await mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  database: 'diario',
  password: 'root'
})

console.log('Conectou com MYSQL!');
export { con };