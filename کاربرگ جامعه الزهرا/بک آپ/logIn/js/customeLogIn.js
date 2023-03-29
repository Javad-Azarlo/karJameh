const bpr = "http://bpr.jz.ac.ir";
//const bpr = "http://10.10.30.45";

var tokAccess;
$("#btnGetData").click(function () {
  var userLog = $(".inputName").val();
  var passLog = $(".inputPass").val();
  $.ajax({
    url: bpr + "/jzu/public/api/v1/user/login",
    type: "POST",
    /*     headers: {
      Authorization: $`Bearer ${localStorage.getItem("access_token")}`,
    }, */
    XCSRFTOKEN: "",
    data: {
      username: userLog,
      password: passLog,
    },
    error: function (err) {
      switch (err.status) {
        case "302":
          Swal.fire({
            text: "نام کاربری یا گذر واژه اشتباه است",
            icon: "warning",
            confirmButtonText: "ok",
          });
          break;
        case "401":
          window.location = "logIn/logIn.html";
          Swal.fire({
            text: "نام کاربری یا گذر واژه اشتباه است",
            icon: "warning",
            confirmButtonText: "ok",
          });
          break;
        case "403":
          Swal.fire({
            text: "نام کاربری یا گذر واژه اشتباه است",
            icon: "warning",
            confirmButtonText: "ok",
          });
          break;
        default:
          Swal.fire({
            text: "نام کاربری یا گذر واژه اشتباه است",
            icon: "warning",
            confirmButtonText: "ok",
          });
          break;
      }
    },
    success: function (data) {
      Swal.fire({
        text: "خوش آمدید",
        icon: "success",
        confirmButtonText:
          "  <a href='../index.html?name=" +
          data.access_token +
          "'>ورود به سامانه</a>",
      });
      //localStorage.tok = data.access_token;
      $.cookie("name", data.access_token);
      tokAccess = $("#token").val(data.access_token);
      //href='../index.html'
      //window.location = "../index.html";
    },
  });
});

//exitProfile
function exitProfile() {
  let urlTok = new URLSearchParams(window.location.search);
  $.ajax({
    url: bpr + "/jzu/public/api/v1/user/logout",
    type: "POST",
    headers: {
      Authorization: `Bearer ${urlTok.get("name")}`,
    },
    XCSRFTOKEN: "",
    data: {},
    success: function (data) {
      window.location = "logIn/logIn.html";
    },
  });
}
