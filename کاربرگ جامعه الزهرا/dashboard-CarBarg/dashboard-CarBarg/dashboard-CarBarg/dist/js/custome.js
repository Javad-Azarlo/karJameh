//const bpr = "http://bpr.jz.ac.ir";
const bpr = "http://10.10.30.45";

//faraiandha//kalanFaraiand
function onchangeKalan() {
  k = document.getElementById("kalanFaraiand").value;
  $(document).ready(function () {
    let urlTok = new URLSearchParams(window.location.search);
    if (urlTok.get("name") == undefined || urlTok.get("name") == "") {
      window.location = "logIn/logIn.html";
    }
    $.ajax({
      type: "GET",
      url: bpr + "/jzu/public/api/v2/system/levels/get?levelID=" + k,
      headers: {
        Authorization: `Bearer ${urlTok.get("name")}`,
      },
      dataType: "json",
      success: function (data) {
        const myArray1 = data.data.level2;
        $("#grohFaraiand").empty("<option</option>");
        $("#grohFaraiand")
          .append
          //"<option>لطفا یکی از موارد را اتخاب نمائید</option>"
          ();
        for (var i = 0; i < myArray1.length; i++) {
          $("#grohFaraiand").append(
            "<option" +
              " value='" +
              myArray1[i].id +
              "'>" +
              myArray1[i].title +
              "</option>"
          );
        }
      },
    });
  });
}
//groh faraiand
function onchangeGroh() {
  g = document.getElementById("grohFaraiand").value;
  $(document).ready(function () {
    let urlTok = new URLSearchParams(window.location.search);
    if (urlTok.get("name") == undefined || urlTok.get("name") == "") {
      window.location = "logIn/logIn.html";
    }
    $.ajax({
      type: "GET",
      url: bpr + "/jzu/public/api/v2/system/levels/get?levelID=" + g,
      headers: {
        Authorization: `Bearer ${urlTok.get("name")}`,
      },
      dataType: "json",
      success: function (data) {
        const myArray2 = data.data.level3;
        $("#karbargFaraiand").empty("<option></option>");
        $("#karbargFaraiand")
          .append
          // "<option value='000'>لطفا یکی از موارد را اتخاب نمائید</option>"
          ();
        for (var i = 0; i < myArray2.length; i++) {
          $("#karbargFaraiand").append(
            "<option" +
              " value='" +
              myArray2[i].id +
              "'>" +
              myArray2[i].title +
              "</option>"
          );
        }
      },
    });
  });
}
//groh faraiand
function onchangeKarbarg() {
  kb = document.getElementById("karbargFaraiand").value;
  $(document).ready(function () {
    let urlTok = new URLSearchParams(window.location.search);
    if (urlTok.get("name") == undefined || urlTok.get("name") == "") {
      window.location = "logIn/logIn.html";
    }
    $.ajax({
      type: "GET",
      url: bpr + "/jzu/public/api/v2/system/levels/get?levelID=" + kb,
      headers: {
        Authorization: `Bearer ${urlTok.get("name")}`,
      },
      dataType: "json",
      success: function (data) {
        const myArray3 = data.data.level4;

        $("#zirFaraiand").empty("<option></option>");
        $("#zirFaraiand")
          .append
          // "<option value='0000'>لطفا یکی از موارد را اتخاب نمائید</option>"
          ();
        for (var i = 0; i < myArray3.length; i++) {
          $("#zirFaraiand").append(
            "<option" +
              " value='" +
              myArray3[i].id +
              "'>" +
              myArray3[i].title +
              "</option>"
          );
        }
      },
    });
  });
}
$(document).ready(function () {
  let urlTok = new URLSearchParams(window.location.search);
  if (urlTok.get("name") == undefined || urlTok.get("name") == "") {
    window.location = "logIn/logIn.html";
  }
  $.ajax({
    type: "GET",
    url: bpr + "/jzu/public/api/v2/system/levels/get",
    headers: {
      Authorization: `Bearer ${urlTok.get("name")}`,
    },
    dataType: "json",
    success: function (data) {
      const myArray = data.data.level1;
      for (var i = 0; i < myArray.length; i++) {
        $("#kalanFaraiand").append(
          "<option" +
            " value='" +
            myArray[i].id +
            "'>" +
            myArray[i].title +
            "</option>"
        );
      }
    },
  });
});
//faraiand dropdown 1
$(document).ready(function () {
  let urlTok = new URLSearchParams(window.location.search);
  if (urlTok.get("name") == undefined || urlTok.get("name") == "") {
    window.location = "logIn/logIn.html";
  }
  $.ajax({
    type: "GET",
    url: bpr + "/jzu/public/api/v2/system/cost_centers",
    headers: {
      Authorization: `Bearer ${urlTok.get("name")}`,
    },
    dataType: "json",
    success: function (data) {
      const arrayTypeFar = data.data.level1;
      for (var i = 0; i < arrayTypeFar.length; i++) {
        $("#departmentsDropdown").append(
          "<option" +
            " value='" +
            arrayTypeFar[i].id +
            "'>" +
            arrayTypeFar[i].title +
            "</option>"
        );
      }
    },
  });
});
//faraiand dropdown 2
function typeOrg() {
  farArshad = document.getElementById("departmentsDropdown").value;
  $(document).ready(function () {
    let urlTok = new URLSearchParams(window.location.search);
    if (urlTok.get("name") == undefined || urlTok.get("name") == "") {
      window.location = "logIn/logIn.html";
    }
    $.ajax({
      type: "GET",
      url: bpr + "/jzu/public/api/v2/system/cost_centers?ID=" + farArshad,
      headers: {
        Authorization: `Bearer ${urlTok.get("name")}`,
      },
      dataType: "json",
      success: function (data) {
        const arrayArshad = data.data.level2;

        $("#rezTitlesazman").empty("<option></option>");
        $("#rezTitlesazman")
          .append
          // "<option>لطفا یکی از موارد را اتخاب نمائید</option>"
          ();
        for (var i = 0; i < arrayArshad.length; i++) {
          $("#rezTitlesazman").append(
            "<option" +
              " value='" +
              arrayArshad[i].id +
              "'>" +
              arrayArshad[i].title +
              "</option>"
          );
        }
      },
    });
  });
}
//faraiand dropdown 3
function titleOrgArshad() {
  farOrgMidle = document.getElementById("rezTitlesazman").value;
  $(document).ready(function () {
    let urlTok = new URLSearchParams(window.location.search);
    if (urlTok.get("name") == undefined || urlTok.get("name") == "") {
      window.location = "logIn/logIn.html";
    }
    $.ajax({
      type: "GET",
      url: bpr + "/jzu/public/api/v2/system/cost_centers?ID=" + farOrgMidle,
      headers: {
        Authorization: `Bearer ${urlTok.get("name")}`,
      },
      dataType: "json",
      success: function (data) {
        const arrayMidle = data.data.level3;
        $("#resCodeSazman").empty("<option></option>");
        $("#resCodeSazman")
          .append
          // "<option>لطفا یکی از موارد را اتخاب نمائید</option>"
          ();
        for (var i = 0; i < arrayMidle.length; i++) {
          $("#resCodeSazman").append(
            "<option" +
              " value='" +
              arrayMidle[i].id +
              "'>" +
              arrayMidle[i].title +
              "</option>"
          );
        }
      },
    });
  });
}
//faraiand dropdown 4
function titleOrgMidle() {
  farOrgPaieh = document.getElementById("resCodeSazman").value;
  $(document).ready(function () {
    let urlTok = new URLSearchParams(window.location.search);
    if (urlTok.get("name") == undefined || urlTok.get("name") == "") {
      window.location = "logIn/logIn.html";
    }
    $.ajax({
      type: "GET",
      url: bpr + "/jzu/public/api/v2/system/cost_centers?ID=" + farOrgPaieh,
      headers: {
        Authorization: `Bearer ${urlTok.get("name")}`,
      },
      dataType: "json",
      success: function (data) {
        const arrayPaieh = data.data.level4;
        $("#selectNumber").empty("<option></option>");
        $("#selectNumber")
          .append
          //"<option value='0000'>لطفا یکی از موارد را اتخاب نمائید</option>"
          ();
        for (var i = 0; i < arrayPaieh.length; i++) {
          $("#selectNumber").append(
            "<option" +
              " value='" +
              arrayPaieh[i].id +
              "'>" +
              arrayPaieh[i].title +
              "</option>"
          );
        }
      },
    });
  });
}

//ajaxPost

function sabtFraiand() {
  $(document).ready(function () {
    var sathePaieh = $("#selectNumber").val();
    if (sathePaieh == null) {
      sathePaieh = "0000";
    }
    var kar = $("#karbargFaraiand").val();
    if (kar == null) {
      kar = "000";
    }
    var zir = $("#zirFaraiand").val();
    var zir2;
    if ($("#zirFaraiand option:selected").val() != null) {
      zir2 = $("#zirFaraiand option:selected").text();
    } else if ($("#karbargFaraiand option:selected").val() != null) {
      zir2 = $("#karbargFaraiand option:selected").text();
    } else if ($("#grohFaraiand option:selected").val() != null) {
      zir2 = $("#grohFaraiand option:selected").text();
    }

    $("#titleFaraiand").val(zir2);
    if (zir == null) {
      zir = "0000";
    }
    $.ajax({
      type: "POST",
      url: bpr + "/jzu/public/api/v2/activity",
      dataType: "json",
      accept: "application/json",
      ContentType: "application/json",
      XCSRFTOKEN: "",
      data: {
        lvlId1: $("#kalanFaraiand").val(),
        lvlId2: $("#grohFaraiand").val(),
        lvlId3: kar,
        lvlId4: zir,
        CCID1: $("#departmentsDropdown").val(),
        CCID2: $("#rezTitlesazman").val(),
        CCID3: $("#resCodeSazman").val(),
        CCID4: sathePaieh,
        expects: $("#ahdaf").val(),
      },
      success: function (data) {
        $("#shenasehFaraiand").val(data.data.activity.code);
        $(".EditGuid").text(data.data.activity.Guid);
        var a1 = $(".actvity").val();
        var a2 = $(".lab1").val(a1);
      },
    });
  });
}
////////////
//////////////////
function SaveAndSend() {
  $(document).ready(function () {
    $.ajax({
      type: "POST",
      url: bpr + "/jzu/public/api/v2/activity/sub_activity",
      dataType: "json",
      accept: "application/json",
      ContentType: "application/json",
      XCSRFTOKEN: "",
      data: {
        acGuid: $(".EditGuid").text(),
        title: $("#marahelFaaliat").val(),
        dsc: $("#sharhFaaliat").val(),
        inputTitle: $("#titleVorod").val(),
        inputSource: $("#mabdaeVorod").val(),
        operatorTitle: $("#titleMojre").val(),
        documents: $("#mostanadatJare").val(),
        supporter: $("#poshtiban").val(),
        monitoringID: $("#paiesh").val(),
        outputTitle: $("#titleKhoroje").val(),
        outputDestination: $("#maghsadKhoroje").val(),
        methodType: $("#noewRavesh").val(),
        methodSystem: $("#nameSamaneh").val(),
      },
      success: function (data) {},
    });
  });
  var titF = $("#marahelFaaliat").val();
  var sharh = $("#sharhFaaliat").val();
  var titV = $("#titleVorod").val();
  var mabV = $("#mabdaeVorod").val();
  var titm = $("#titleMojre").val();
  var titKh = $("#titleKhoroje").val();
  var maghKh = $("#maghsadKhoroje").val();
  var nS = $("#nameSamaneh").val();
  var nR = $("#noewRavesh").val();
  if (titF == "") {
    $("#marahelFaaliat").css("border", "2px solid red");
    $(".marahelFaaliat")
      .text("لطفا مراحل فعالیت را پر نمائید")
      .css("color", "red");
    Swal.fire({
      text: "لطفا مراحل فرآیند را وارد نمائید",
      icon: "warning",
      confirmButtonText: "ok",
    });
  } else if (sharh == "") {
    $("#sharhFaaliat").css("border", "2px solid red");
    $(".sharhFaaliat").text("لطفا شرح فعالیت را پر نمائید").css("color", "red");
    Swal.fire({
      text: "لطفا شرح فعالیت را وارد نمائید",
      icon: "warning",
      confirmButtonText: "ok",
    });
  } else if (titV == "") {
    $("#titleVorod").css("border", "2px solid red");
    $(".titVorod").text("لطفا عنوان ورودی را پر نمائید").css("color", "red");
    Swal.fire({
      text: "لطفا عنوان ورودی را وارد نمائید",
      icon: "warning",
      confirmButtonText: "ok",
    });
  } else if (mabV == "") {
    $("#mabdaeVorod").css("border", "2px solid red");
    $(".mabdaVorod").text("لطفا مبدا ورودی را پر نمائید").css("color", "red");
    Swal.fire({
      text: "لطفا مبدا ورودی را وارد نمائید",
      icon: "warning",
      confirmButtonText: "ok",
    });
  } else if (titm == "") {
    $("#titleMojre").css("border", "2px solid red");
    $(".titMojre").text("لطفا عنوان مجری را پر نمائید").css("color", "red");
    Swal.fire({
      text: "لطفا عنوان مجری را وارد نمائید",
      icon: "warning",
      confirmButtonText: "ok",
    });
  } else if (titKh == "") {
    $("#titleKhoroje").css("border", "2px solid red");
    $(".titKh").text("لطفا عنوان خروجی را پر نمائید").css("color", "red");
    Swal.fire({
      text: "لطفا عنوان خروجی را وارد نمائید",
      icon: "warning",
      confirmButtonText: "ok",
    });
  } else if (maghKh == "") {
    $("#maghsadKhoroje").css("border", "2px solid red");
    $(".maghKh").text("لطفا مقصد خروجی را پر نمائید").css("color", "red");
    Swal.fire({
      text: "لطفا مقصد خروجی را وارد نمائید",
      icon: "warning",
      confirmButtonText: "ok",
    });
  } else if (nS == "") {
    $("#nameSamaneh").css("border", "2px solid red");
    $(".nameS").text("لطفا نام سامانه را انتخاب نمائید").css("color", "red");
    Swal.fire({
      text: "لطفا نام سامانه را انتخاب نمائید",
      icon: "warning",
      confirmButtonText: "ok",
    });
  } else if (nR == "") {
    $("#noewRavesh").css("border", "2px solid red");
    $(".noRavash")
      .text("لطفا یکی از روش ها را انتخاب نمائید")
      .css("color", "red");
    Swal.fire({
      text: "لطفا یکی از نام سامانه را وراد نمائید",
      icon: "warning",
      confirmButtonText: "ok",
    });
  } else {
    $("#myModal").modal();

    /*     Swal.fire({
      title: "Success",
      text: "کاربرگ با موفقیت ثبت شد",
      icon: "success",
      confirmButtonText: "<a "+ " 'href'= " + #heroFaaliat + ">ثبت کاربرگ جدید</a>",
    }); */
    //بدون اینکه صفحه رفریش شود $('your_div_id').load('your_url');
    //$("#maghsadKhoroje").empty().val("");
    /*
     */
  }

  /*    var pai = $("#paiesh").val();
    if (pai == "") {
      $("#paiesh").css("border", "2px solid red");
       $(".paiesh")
        .text("لطفا شناسه پایش را پر نمائید")
        .css("color", "red");
    } else {
     alert("ok")
    } */
}

/* function ActivityReg() {
  $("#ActivityRegId").click(alert("فعالیت ثبت شد ، فعالیت  جدید ثبت کنید"));
} */
//getProfile
$(document).ready(function () {
  let urlTok = new URLSearchParams(window.location.search);
  if (urlTok.get("name") == undefined || urlTok.get("name") == "") {
    window.location = "logIn/logIn.html";
  }
  $.ajax({
    type: "GET",
    url: bpr + "/jzu/public/api/v1/user/profile",
    headers: {
      Authorization: `Bearer ${urlTok.get("name")}`,
    },
    dataType: "json",
    success: function (data) {
      console.log(data);
      $("#tokenStorage").append(
        "<span" +
          "'>" +
          data.data.firstName +
          " " +
          data.data.lastName +
          "</span>"
      );
      $("#tokenStorage").text(data.firstName);
    },
  });
});
function listShowPage(link) {
  $(document).ready(function () {
    let urlTok = new URLSearchParams(window.location.search);
    if (urlTok.get("name") == undefined || urlTok.get("name") == "") {
      window.location = "logIn/logIn.html";
    }
    window.location = link + "?name=" + urlTok.get("name") + "";
  });
}
function backlistShow(back) {
  $(document).ready(function () {
    let urlTok = new URLSearchParams(window.location.search);
    if (urlTok.get("name") == undefined || urlTok.get("name") == "") {
      window.location = "logIn/logIn.html";
    }
    window.location = back + "?name=" + urlTok.get("name") + "";
  });
}
//exitProfile
function exitProfile() {
  let urlTok = new URLSearchParams(window.location.search);
  if (urlTok.get("name") == undefined || urlTok.get("name") == "") {
    window.location = "logIn/logIn.html";
  }
  $.ajax({
    url: bpr + "/jzu/public/api/v1/user/logout",
    type: "POST",
    headers: {
      Authorization: `Bearer ${urlTok.get("name")}`,
    },
    XCSRFTOKEN: "",
    data: {},
    success: function (data) {
      window.location =  "logIn/logIn.html?name=" + urlTok.get("name") + "";
      //window.location = "./logIn/logIn.html";
    },
  });
}
