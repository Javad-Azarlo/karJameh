

const bpr = "http://bpr.jz.ac.ir";
//const bpr = "http://10.10.30.45";

//faraiandha//kalanFaraiand
function onchangeKalan() {
  k = document.getElementById("kalanFaraiand").value;
  //reset fraiandha
  $("#grohFaraiand").val("0")
  $("#karbargFaraiand").val("0")
  $("#zirFaraiand").val("0")
  $("#grohFaraiand").empty()
  $("#karbargFaraiand").empty()
  $("#zirFaraiand").empty()
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
  //reset fraiandha
  $("#karbargFaraiand").val("0")
  $("#zirFaraiand").val("0")
  $("#karbargFaraiand").empty()
  $("#zirFaraiand").empty()
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
  //rest the rest of select tags
  $("#zirFaraiand").val("0")
  $("#zirFaraiand").empty()
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
  $("#rezTitlesazman").val("0")
  $("#resCodeSazman").val("0")
  $("#selectNumber").val("0")
  $("#rezTitlesazman").empty()
  $("#resCodeSazman").empty()
  $("#selectNumber").empty()
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
  //reset the rest
  $("#resCodeSazman").val("0")
  $("#selectNumber").val("0")
  $("#resCodeSazman").empty()
  $("#selectNumber").empty()
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
  //reset the rest
  $("#selectNumber").val("0")
  $("#selectNumber").empty()
  farOrgMidle = document.getElementById("rezTitlesazman").value;
  $(document).ready(function () {
    let urlTok = new URLSearchParams(window.location.search);
    if (urlTok.get("name") == undefined || urlTok.get("name") == "") {
      window.location = "logIn/logIn.html";
    }
    $.ajax({
      type: "GET",
      url: bpr + "/jzu/public/api/v1/system/cost_centers?ID=" + farOrgMidle,
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
    let titleTafzili = $("#titleTafzili").val() || "0"
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
      url: bpr + "/jzu/public/api/v1/activity",
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
        comparativeTitle: titleTafzili,
        monitoringID: $("#paiesh").val() || "0"
      },
      success: function (data) {
        $("#shenasehFaraiand").val(data.data.activity.code);
        $(".EditGuid").text(data.data.activity.Guid);
        var a1 = $(".actvity").val();
        var a2 = $(".lab1").val(a1);
        Swal.fire({
          title: "کاربرگ با موفقیت ایجاد شد",
          icon: "success"
        })
      },
      error: (err) => {
        Swal.fire({
          text:`کدخطا:${err.status}`,
          title: "ثبت کاربرگ ناموفق بود",
          icon: "error"
        })
      }
    });
  });
}
////////////
//////////////////
function SaveAndSend() {
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
  } else if (nS == "" && nR != "0") {
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
      text: "لطفا یکی از نام سامانه را وارد نمائید",
      icon: "warning",
      confirmButtonText: "ok",
    });
  } else{
    $(document).ready(function () {
      console.log( $("#shenaseMojre").val())
      $.ajax({
        type: "POST",
        url: bpr + "/jzu/public/api/v1/activity/sub_activity",
        dataType: "json",
        accept: "application/json",
        ContentType: "application/json",
        XCSRFTOKEN: "",
        data: {
          acGuid: $(".EditGuid").text(),
          title: $("#marahelFaaliat").val(),
          dsc: $("#sharhFaaliat").val() || "0",
          inputTitle: $("#titleVorod").val(),
          inputSource: $("#mabdaeVorod").val(),
          operatorTitle: $("#titleMojre").val(),
          operatorID: $("#shenaseMojre").val() || "0",
          documents: $("#mostanadatJare").val() || "0",
          supporter: $("#poshtiban").val() || "0",
          outputTitle: $("#titleKhoroje").val(),
          outputDestination: $("#maghsadKhoroje").val(),
          methodType: $("#noewRavesh").val(),
          methodSystem: $("#nameSamaneh").val() || "0",
        },
        success: function (data) {
          Swal.fire({
            title: "فعالیت با موفقیت ثبت شد",
            icon: "success"
          })
        },
        error: (err) => {
          Swal.fire({
            text: `کدخطا:${err.status}`,
            title: "ثبت فعالیت ناموفق بود",
            icon: "error"
          })
        },
      });
    });
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
  console.log(link)
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

function deleteSubActivities(event) {
  let urlTok = new URLSearchParams(window.location.search);
  if (urlTok.get("name") == undefined || urlTok.get("name") == "") {
    window.location = "logIn/logIn.html";
  }
  const target = event.target
  const code = $(target).parents("tr").attr("sub-id")
  Swal.fire({
    title: "ایا مطمئن هستید",
    text: "بعداز حذف کردن دیگر نمی توانید به فعالیت دسترسی داشته باشید",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'حذف',
    cancelButtonText: "لغو",
    focusCancel: true
  }).then((stat) => {
    if(stat.isConfirmed){
      $.ajax({
      type: "DELETE",
      url: bpr + "/jzu/public/api/v1/sub_activity?Guid="+ code,
      dataType: "json",
      accept: "application/json",
      ContentType: "application/json",
      XCSRFTOKEN: "",
      headers: {
        Authorization: `Bearer ${urlTok.get("name")}`,
      },
      success: () => {
        Swal.fire("فعالیت با موفقیت حذف شد", {
          icon: "success",
          showConfirmButton: false
        })
        $(target).parents("tr").remove()
      } 
    })
    }    
  })
}
//edit sub actitivity
function editActivity(event) {
  const target = event.target
  const subId = $(target).parents("tr").attr("sub-id")
  let urlTok = new URLSearchParams(window.location.search)
  const acGuid = urlTok.get("ac-id")
  window.location.href = `${bpr}/carBarg/edit-sub-activity.html?sub-id=${subId}&code=${urlTok.get("code")}&ac-id=${acGuid}&name=${urlTok.get("name")}` 
}

function addActivity() {
  let urlTok = new URLSearchParams(window.location.search);
  if (urlTok.get("name") == undefined || urlTok.get("name") == "") {
    window.location = "logIn/logIn.html";
  }
  const name = urlTok.get("name")
  const code  = urlTok.get("code")
  const acGuid = urlTok.get("ac-id")
  window.location = `add-sub-activity.html?code=${code}&ac-id=${acGuid}&name=${name}`

}

function deleteActivities(event) {
  let urlTok = new URLSearchParams(window.location.search);
  if (urlTok.get("name") == undefined || urlTok.get("name") == "") {
    window.location = "logIn/logIn.html";
  }
  const target = event.target
  const Guid = $(target).attr("ac-id")
  Swal.fire({
    title: "ایا مطمئن هستید",
    text: "بعداز حذف کردن دیگر نمی توانید به کاربرگ دسترسی داشته باشید",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'حذف',
    cancelButtonText: "لغو",
    focusCancel: true
  }).then((stat) => {
    if(stat.isConfirmed){
      $.ajax({
      type: "DELETE",
      url: bpr + "/jzu/public/api/v1/activity?Guid="+ Guid,
      dataType: "json",
      accept: "application/json",
      ContentType: "application/json",
      XCSRFTOKEN: "",
      headers: {
        Authorization: `Bearer ${urlTok.get("name")}`,
      },
      success: () => {
        Swal.fire("کاربرگ با موفقیت حذف شد", {
          icon: "success",
          showConfirmButton: false
        })
        $(target).parents("tr").remove()
      } 
    })
    }    
  })
  
}
