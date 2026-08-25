import { Router } from "express";

const endpoints = Router();

endpoints.get('/somar', (req,resp) => {
  let n1 = Number(req.query.n1);
  let n2 = Number(req.query.n2);

  let s = n1 + n2;

  resp.send({
    resultado: `A soma de ${n1} + ${n2} é: ${s}`
  })
})

endpoints.get('/subtrair', (req,resp) => {
  let n1 = Number(req.query.n1);
  let n2 = Number(req.query.n2);

  let s = n1 - n2;

  resp.send({
    resultado: `A subtração de ${n1} - ${n2} é: ${s}`
  })
})

endpoints.post('/multiplicar', (req,resp) => {
  let n1 = Number(req.body.n1);
  let n2 = Number(req.body.n2);

  let m = n1 * n2;

  resp.send({
    resultado: `A multiplicação de ${n1} X ${n2} é: ${m}`
  })
})

endpoints.post('/dividir', (req,resp) => {
  let n1 = Number(req.body.n1);
  let n2 = Number(req.body.n2);

  let d = n1 / n2;

  resp.send({
    resultado: `A divisão de ${n1} / ${n2} é: ${d.toFixed(2)}`
  })
})

endpoints.post('/media', (req,resp) => {
  let nota1 = Number(req.body.nota1);
  let nota2 = Number(req.body.nota2);
  let nota3 = Number(req.body.nota3);

  let media = (nota1 + nota2 + nota3) / 3;

  if (media >= 6) {
    resp.send({
      resultado: `A média do aluno é ${media.toFixed(2)}. Parabéns, você foi aprovado!`
    });
  } else if (media >= 5 && media < 6) {
    resp.send({
      resultado: `A média do aluno é ${media.toFixed(2)}. Você está de recuperação.`
    });
  } else {
    resp.send({
      resultado: `A média do aluno é ${media.toFixed(2)}. Infelizmente, você não foi aprovado.`
    });
  }
});



export default endpoints;