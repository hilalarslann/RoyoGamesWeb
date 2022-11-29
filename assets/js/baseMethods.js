const url = "https://localhost:7065/";

//#region Please Wait Popup
function showPleaseWait() {

  if (document.querySelector("#pleaseWaitDialog") == null) {
    var modalLoading = '<div class="modal" id="pleaseWaitDialog" data-backdrop="static" data-keyboard="false" role="dialog">\
          <div class="modal-dialog">\
              <div class="modal-content">\
                  <div class="modal-header">\
                      <h4 class="modal-title">Lütfen Bekleyiniz...</h4>\
                  </div>\
                  <div class="modal-body">\
                     <div class="progress">\
                        <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>\
                      </div>\
                  </div>\
              </div>\
          </div>\
      </div>';
    $(document.body).append(modalLoading);
  }

  $("#pleaseWaitDialog").modal("show");
}

function hidePleaseWait() {
  $("#pleaseWaitDialog").modal("hide");
}
//#endregion

function SendMail() {
  showPleaseWait();
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
      hidePleaseWait();
    })
    .catch(err => {
      console.log(err);
      hidePleaseWait();
    });
}

function classActive(activeHrefCharacter) {

  var a = document.querySelectorAll(".header-area .main-nav .nav li a");
  for (var i = 0, length = a.length; i < length; i++) {
    a[i].onclick = function () {
      var b = document.querySelector(".header-area .main-nav .nav li.active");
      console.log(b);
      if (b) b.classList.remove("active");
      this.parentNode.classList.add('active');
console.log(this.parentNode.classList);
      // if (activeHrefCharacter == 'h'){
      //   document.getElementById("h").href="#home";
      // }
      // else if (activeHrefCharacter == 'g') {
      //   document.getElementById("g").href="#games";
      // } 
      // else if (activeHrefCharacter == 't') {
      //   document.getElementById("t").href="#portfolio";
      // }
      // else if (activeHrefCharacter == 'c') {
      //   document.getElementById("c").href="#contact";
      // }
      // else{}
    };
  }
}