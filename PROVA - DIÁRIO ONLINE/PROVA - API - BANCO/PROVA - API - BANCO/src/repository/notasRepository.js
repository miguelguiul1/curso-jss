import { con } from './connection.js';


export async function saveCliente( nota ) {
  const command = ` 
    insert into cliente (nome, genero, idade, cidade) 
      values (?, ?, ?, ?)
  
  `
  const [resposta] = await con.query(command,[
      cliente.nome,
      cliente.genero,
      cliente.idade,
      cliente.cidade  
  ]);

  return resposta.insertId;

  }

  export async function getNotaId(id) {
      const command = `
      select id,
      nome,
      genero,
      idade,
      cidade
      from cliente
      where id = ?
    `
      const [linhas] = await con.query(command, [id]);
      return linhas[0];
    }

    export async function getTodasNotas() {
    const command = `
    select id,
    nome,
    genero,
    idade,
    cidade
    from cliente
  `
    const [linhas] = await con.query(command);
    return linhas;
  }

  export async function updateNota(id, nota) {
    const command = `
    update cliente set
      nome = ?,
      genero = ?,
      idade = ?,
      cidade = ?
    where id = ?
  `

    await con.query(command, [
      cliente.nome,
      cliente.genero,
      cliente.idade,
      cliente.cidade,
      id
    ]);
  }

  export async function deleteNota(id) {
    const command = `delete from nota where id = ?`;
    await con.query(command, [id]);
  }




  


  




  
  