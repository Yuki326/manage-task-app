const functions = require('firebase-functions');
// Expressの読み込み
const express = require('express');

const app = express();

app.get('/hello', (req:any, res:any) => {
  // レスポンスの設定
  res.send('Hello Express!'+req);
});

// エンドポイントを追加
app.get('/user/:userId', (req:any, res:any) => {
  const users = [
    { id: 1, name: 'りゅうおう' },
    { id: 2, name: 'ハーゴン' },
    { id: 3, name: 'バラモス' },
    { id: 4, name: 'ゾーマ' },
    { id: 5, name: 'ピサロ' },
  ];
  // req.params.userIdでURLの後ろにつけた値をとれる．
  const targetUser = users.find(
    (user) => user.id === Number(req.params.userId)
  );
  res.send(targetUser);
});

const api = functions.https.onRequest(app);
module.exports = { api };
