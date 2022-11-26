const url = "https://localhost:7065/";

function SendMail() {
  let payload = {
    Name: document.getElementById("name").value,
    Surname: document.getElementById("surname").value,
    SendingMessage: document.getElementById("messageBody").value,
    UserMail: document.getElementById("userEmail").value,
  }
  fetch(`${url}Email/SendMail`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: { "Content-type": "application/json; charset=UTF-8" }
  })
    .then(response => response.json())
    .then(rsp => {
      Swal.fire(
        rsp.isSucceed == true ? 'Başarılı' : 'Başarısız',
        rsp.message,
        rsp.isSucceed == true ? 'success' : 'error'
      )
      console.log(rsp);
    })
    .catch(err => console.log(err));
}