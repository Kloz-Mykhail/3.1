enum Btn {
  PLUS,
  MINUS,
}
document.getElementById('plbtn')?.onclick = () => {
  fetch(`http://localhost:3000/api/v1`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      btn: Btn.PLUS,
    }),
  })
    .then((res) => res.json())
    .then(
      (res) => (document.getElementById('pl').innerText = `Plus: ${res.num}`),
    );
};
document.getElementById('mnbtn')?.onclick = () => {
  fetch(`http://localhost:3000/api/v1`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      btn: Btn.MINUS,
    }),
  })
    .then((res) => res.json())
    .then(
      (res) => (document.getElementById('mn').innerText = `Minus: ${res.num}`),
    );
};
