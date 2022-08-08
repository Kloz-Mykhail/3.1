import express from 'express';
import cors from 'cors';

const app = express();
enum Btn {
  PLUS,
  MINUS,
}
let minus = 0;
let plus = 0;
app.use(express.json());
app.use(cors());

app.post('/api/v1', (req, res) => {
  console.log(req.body.btn);
  if (req.body.btn == Btn.MINUS) res.json({ num: ++minus });
  else if (req.body.btn == Btn.PLUS) res.json({ num: ++plus });
});
app.listen(3000, () => console.log('listening..'));
