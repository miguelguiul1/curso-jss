import { Router } from "express";

const endpoints = Router();

endpoints.get('/Boas-Vindas/:nome', (req, resp) => {
  let nome = req.params.nome;

  resp.send({
    mensagem: `Seja Bem-Vido(a) ${nome}`
  })
})

export default endpoints;