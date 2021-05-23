//express モジュールのインスタンス生成
const express = require('express');
const app = express();
const port = 8080;
app.use(express.json());

//課題２
app.use("/", (req, res, next) => {
  const cType = req.headers["content-type"];
  console.log(cType.indexOf("application/json"));
  if (!cType || cType.indexOf("application/json") !== 0) return res.send(400);
  next();
});

//課題１
app.get('/', (req, res) => {
  res.send({text: 'hello world'})
});

//課題１
app.post("/", (req, res) => {
  console.log(req.header); 
  const cType = req.headers["content-type"];
  const data = req.body;
  res.status(201).type(cType).send(data);
});


//ポート8080で待ち受ける
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});