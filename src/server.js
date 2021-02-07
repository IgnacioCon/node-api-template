// server.index.js
import express from 'express';

export const app = express();

app.get('/', (req, res) => {
  res.send({message: "Hello, World!"});
})

export const start = async () => {
  try {
    app.listen(3000, () => {
      console.log(`API on http:localhost:${3000}`);
    });
  }catch(err) {
    console.log(err);
  }
}
