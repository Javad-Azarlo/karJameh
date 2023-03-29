// کد واحد سازمان متولی
$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "http://bpr.jz.ac.ir/jzu/public/api/v1/system/cost_center_title/get",
    dataType: "json",
    success: function (data) {
      var items = JSON.stringify(data.data);
      items = items.replace("[", "");
      items = items.replace("]", "");
      const myArray = items.split(",");
      for (var i = 0; i < myArray.length; i++) {
        $("#selectNumber").append("<option>" + myArray[i] + "</option>");
      }
    },
  });
});
/* 
  const apiUrl = "http://10.10.30.45/jzu/public/api/v1/system/cost_center_title/get";
  
  $.get(apiUrl, (data) => {
    var items = (JSON.stringify(data.data));
    items = items.replace('[', '');
    items = items.replace(']', '');
    // items = items.replace('"','');

    const myArray = items.split(",");
    var select = document.getElementById("selectNumber");

    for (var i = 0; i < myArray.length; i++) {
      var opt = myArray[i];
      var el = document.createElement("option");
      el.textContent = opt;
      el.value = opt;
      select.appendChild(el);
    }
  })
 */
// کد واحد سازمان
$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "http://bpr.jz.ac.ir/jzu/public/api/v1/system/cost_center_code/get",
    dataType: "json",
    success: function (data) {
      var items = JSON.stringify(data.data);
      items = items.replace("[");
      items = items.replace("]");
      const myArray = items.split(",");
      for (var i = 0; i < myArray.length; i++) {
        $("#resCodeSazman").append("<option>" + myArray[i] + "</option>");
      }
    },
  });
});

//  عنوان حوزه سازمانی
$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "http://bpr.jz.ac.ir/jzu/public/api/v1/system/official_work_section/get",
    dataType: "json",
    success: function (data) {
      var items = JSON.stringify(data.data);
      items = items.replace("[", "");
      items = items.replace("]", "");
      const myArray = items.split(",");
      for (var i = 0; i < myArray.length; i++) {
        $("#rezTitlesazman").append("<option>" + myArray[i] + "</option>");
      }
    },
  });
});

//faraiandha//kalanFaraiand
function onchangeKalan() {
  k = document.getElementById("kalanFaraiand").value;
  $(document).ready(function () {
    $.ajax({
      type: "GET",
      url: "http://bpr.jz.ac.ir/jzu/public/api/v1/system/levels/get?levelID=" + k,
      dataType: "json",
      success: function (data) {
        const myArray1 = data.data.level2;
        $("#grohFaraiand").empty("<option</option>");
        for (var i = 0; i < myArray1.length; i++) {
          $("#grohFaraiand").prepend(
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
    $.ajax({
      type: "GET",
      url: "http://bpr.jz.ac.ir/jzu/public/api/v1/system/levels/get?levelID=" + g,
      dataType: "json",
      success: function (data) {
        const myArray2 = data.data.level3;
        $("#karbargFaraiand").empty("<option</option>");
        for (var i = 0; i < myArray2.length; i++) {
          $("#karbargFaraiand").prepend(
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
    $.ajax({
      type: "GET",
      url:
        "http://bpr.jz.ac.ir/jzu/public/api/v1/system/levels/get?levelID=" + kb,
      dataType: "json",
      success: function (data) {
        const myArray3 = data.data.level4;
        $("#zirFaraiand").empty("<option</option>");
        for (var i = 0; i < myArray3.length; i++) {
          $("#zirFaraiand").prepend(
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
  $.ajax({
    type: "GET",
    url: "http://bpr.jz.ac.ir/jzu/public/api/v1/system/levels/get",
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

//getView1-----------------------

function getView1() {
  $(document).ready(function () {
    var request = new XMLHttpRequest();
    request.open("GET", "http://bpr.jz.ac.ir/jzu/public/api/v1/activities/1");
    request.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        generateCateBox(JSON.parse(this.responseText));
      }
    };
    request.send();
  });
}

function generateCateBox(data) {
  let dataVi = data.data.activities;
  for (let i = 0; i < dataVi.length; i++) {
    createBox(dataVi[i]);
    let sub = dataVi[i].subActivities;
    for (let b = 0; b < sub.length; b++) {
      console.log(sub[b].inputTitle);
      createBox(sub[b]);
    }
  }
}

function createBox(categoury) {
  let box = document.createElement("div");
  box.className = "cateBox";
  //عنوان فرآیند
  let onvaneFaraiand = document.createElement("p");
  onvaneFaraiand.innerText = "عنوان فرآیند";
  let onvaneFaraiandV = document.createElement("b");
  onvaneFaraiandV.innerText = categoury.title;
  //شناسه فرآیند
  let code = document.createElement("p");
  code.innerText = "شناسه فرآیند";
  let codeV = document.createElement("b");
  codeV.innerText = categoury.code;
  //کد مرکز هزینه
  let costCenterCodet = document.createElement("p");
  costCenterCodet.innerText = "کد مرکز هزینه";
  let costCenterCodeV = document.createElement("b");
  costCenterCodeV.innerText = categoury.costCenterCode;
  //عنوان مرکز هزینه
  let costCenterTitle = document.createElement("p");
  costCenterTitle.innerText = "عنوان مرکز هزینه";
  let costCenterTitleV = document.createElement("b");
  costCenterTitleV.innerText = categoury.costCenterTitle;
  //عنوان حوزه واحد سازمانی
  let workSectionTitle = document.createElement("p");
  workSectionTitle.innerText = "عنوان حوزه واحد سازمانی";
  let workSectionTitleV = document.createElement("b");
  workSectionTitleV.innerText = categoury.workSectionTitle;
  //اهداف و انتظارات
  let expects = document.createElement("p");
  expects.innerText = "اهداف و انتظارات";
  let expectsV = document.createElement("b");
  expectsV.innerText = categoury.expects;
  //تاریخ ایجاد
  let date = document.createElement("p");
  date.innerText = "تاریخ ایجاد";
  let dateV = document.createElement("b");
  dateV.innerText = categoury.date;
  //توضیحات فعالیت
  let dsc = document.createElement("p");
  dsc.innerText = "  توضیحات فعالیت ";
  let dscV = document.createElement("b");
  dscV.innerText = categoury.dsc;
  //کد زیر فعالیت
  let subcode = document.createElement("p");
  subcode.innerText = "  کد زیر فعالیت";
  let subcodeV = document.createElement("b");
  subcodeV.innerText = categoury.code;
  //عنوان زیر فعالیت
  let subtitle = document.createElement("p");
  subtitle.innerText = "  عنوان زیر فعالیت";
  let subtitleV = document.createElement("b");
  subtitleV.innerText = categoury.title;
  //عنوان ورودی
  let subtitleVorod = document.createElement("p");
  subtitleVorod.innerText = "  عنوان ورودی";
  let subtitleVorodV = document.createElement("b");
  subtitleVorodV.innerText = categoury.inputTitle;
  //عنوان مجری
  let operatorTitle = document.createElement("p");
  operatorTitle.innerText = "  عنوان مجری";
  let operatorTitleV = document.createElement("b");
  operatorTitleV.innerText = categoury.operatorTitle;
  //عنوان خروجی
  let outputTitle = document.createElement("p");
  outputTitle.innerText = "  عنوان خروجی";
  let outputTitleV = document.createElement("b");
  outputTitleV.innerText = categoury.outputTitle;
  //مقصد خروجی
  let outputDestination = document.createElement("p");
  outputDestination.innerText = "  مقصد خروجی";
  let outputDestinationV = document.createElement("b");
  outputDestinationV.innerText = categoury.outputDestination;
  //نوع و روش
  let methodType = document.createElement("p");
  methodType.innerText = "  نوع و روش";
  let methodTypeV = document.createElement("b");
  methodTypeV.innerText = categoury.methodType;
  //نام سامانه
  let methodSystem = document.createElement("p");
  methodSystem.innerText = "  نام سامانه";
  let methodSystemV = document.createElement("b");
  methodSystemV.innerText = categoury.methodSystem;
  //وضعیت
  let statusTitle = document.createElement("p");
  statusTitle.innerText = "  وضعیت";
  let statusTitleV = document.createElement("b");
  statusTitleV.innerText = categoury.statusTitle;

  box.appendChild(code);
  box.appendChild(codeV);
  box.appendChild(statusTitle);
  box.appendChild(statusTitleV);
  box.appendChild(costCenterTitle);
  box.appendChild(costCenterTitleV);
  box.appendChild(costCenterCodet);
  box.appendChild(costCenterCodeV);
  box.appendChild(workSectionTitle);
  box.appendChild(workSectionTitleV);
  box.appendChild(expects);
  box.appendChild(expectsV);
  box.appendChild(onvaneFaraiand);
  box.appendChild(onvaneFaraiandV);
  box.appendChild(date);
  box.appendChild(dateV);
  box.appendChild(methodSystem);
  box.appendChild(methodSystemV);
  box.appendChild(methodSystemV);
  box.appendChild(methodType);
  box.appendChild(methodTypeV);
  box.appendChild(outputDestination);
  box.appendChild(outputDestinationV);
  box.appendChild(outputTitle);
  box.appendChild(outputTitleV);
  box.appendChild(operatorTitle);
  box.appendChild(operatorTitleV);
  box.appendChild(subtitleVorod);
  box.appendChild(subtitleVorodV);
  box.appendChild(subtitle);
  box.appendChild(subtitleV);
  box.appendChild(subcode);
  box.appendChild(subcodeV);
  box.appendChild(dsc);
  box.appendChild(dscV);

  document.querySelector(".listV").appendChild(box);
}
//getview2
function getView2() {
  $(document).ready(function () {
    var request = new XMLHttpRequest();
    request.open("GET", "http://bpr.jz.ac.ir/jzu/public/api/v1/activities/2");
    request.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        generateCateBox(JSON.parse(this.responseText));
      }
    };
    request.send();
  });
}

function generateCateBox(data) {
  let dataVi = data.data.activities;
  for (let i = 0; i < dataVi.length; i++) {
    createBox(dataVi[i]);
    let sub = dataVi[i].subActivities;
    for (let b = 0; b < sub.length; b++) {
      console.log(sub[b].inputTitle);
      createBox(sub[b]);
    }
  }
}

function createBox(categoury) {
  let box = document.createElement("div");
  box.className = "cateBox";
  //عنوان فرآیند
  let onvaneFaraiand = document.createElement("p");
  onvaneFaraiand.innerText = "عنوان فرآیند";
  let onvaneFaraiandV = document.createElement("b");
  onvaneFaraiandV.innerText = categoury.title;
  //شناسه فرآیند
  let code = document.createElement("p");
  code.innerText = "شناسه فرآیند";
  let codeV = document.createElement("b");
  codeV.innerText = categoury.code;
  //کد مرکز هزینه
  let costCenterCodet = document.createElement("p");
  costCenterCodet.innerText = "کد مرکز هزینه";
  let costCenterCodeV = document.createElement("b");
  costCenterCodeV.innerText = categoury.costCenterCode;
  //عنوان مرکز هزینه
  let costCenterTitle = document.createElement("p");
  costCenterTitle.innerText = "عنوان مرکز هزینه";
  let costCenterTitleV = document.createElement("b");
  costCenterTitleV.innerText = categoury.costCenterTitle;
  //عنوان حوزه واحد سازمانی
  let workSectionTitle = document.createElement("p");
  workSectionTitle.innerText = "عنوان حوزه واحد سازمانی";
  let workSectionTitleV = document.createElement("b");
  workSectionTitleV.innerText = categoury.workSectionTitle;
  //اهداف و انتظارات
  let expects = document.createElement("p");
  expects.innerText = "اهداف و انتظارات";
  let expectsV = document.createElement("b");
  expectsV.innerText = categoury.expects;
  //تاریخ ایجاد
  let date = document.createElement("p");
  date.innerText = "تاریخ ایجاد";
  let dateV = document.createElement("b");
  dateV.innerText = categoury.date;
  //توضیحات فعالیت
  let dsc = document.createElement("p");
  dsc.innerText = "  توضیحات فعالیت ";
  let dscV = document.createElement("b");
  dscV.innerText = categoury.dsc;
  //کد زیر فعالیت
  let subcode = document.createElement("p");
  subcode.innerText = "  کد زیر فعالیت";
  let subcodeV = document.createElement("b");
  subcodeV.innerText = categoury.code;
  //عنوان زیر فعالیت
  let subtitle = document.createElement("p");
  subtitle.innerText = "  عنوان زیر فعالیت";
  let subtitleV = document.createElement("b");
  subtitleV.innerText = categoury.title;
  //عنوان ورودی
  let subtitleVorod = document.createElement("p");
  subtitleVorod.innerText = "  عنوان ورودی";
  let subtitleVorodV = document.createElement("b");
  subtitleVorodV.innerText = categoury.inputTitle;
  //عنوان مجری
  let operatorTitle = document.createElement("p");
  operatorTitle.innerText = "  عنوان مجری";
  let operatorTitleV = document.createElement("b");
  operatorTitleV.innerText = categoury.operatorTitle;
  //عنوان خروجی
  let outputTitle = document.createElement("p");
  outputTitle.innerText = "  عنوان خروجی";
  let outputTitleV = document.createElement("b");
  outputTitleV.innerText = categoury.outputTitle;
  //مقصد خروجی
  let outputDestination = document.createElement("p");
  outputDestination.innerText = "  مقصد خروجی";
  let outputDestinationV = document.createElement("b");
  outputDestinationV.innerText = categoury.outputDestination;
  //نوع و روش
  let methodType = document.createElement("p");
  methodType.innerText = "  نوع و روش";
  let methodTypeV = document.createElement("b");
  methodTypeV.innerText = categoury.methodType;
  //نام سامانه
  let methodSystem = document.createElement("p");
  methodSystem.innerText = "  نام سامانه";
  let methodSystemV = document.createElement("b");
  methodSystemV.innerText = categoury.methodSystem;
  //وضعیت
  let statusTitle = document.createElement("p");
  statusTitle.innerText = "  وضعیت";
  let statusTitleV = document.createElement("b");
  statusTitleV.innerText = categoury.statusTitle;

  box.appendChild(code);
  box.appendChild(codeV);
  box.appendChild(statusTitle);
  box.appendChild(statusTitleV);
  box.appendChild(costCenterTitle);
  box.appendChild(costCenterTitleV);
  box.appendChild(costCenterCodet);
  box.appendChild(costCenterCodeV);
  box.appendChild(workSectionTitle);
  box.appendChild(workSectionTitleV);
  box.appendChild(expects);
  box.appendChild(expectsV);
  box.appendChild(onvaneFaraiand);
  box.appendChild(onvaneFaraiandV);
  box.appendChild(date);
  box.appendChild(dateV);
  box.appendChild(methodSystem);
  box.appendChild(methodSystemV);
  box.appendChild(methodSystemV);
  box.appendChild(methodType);
  box.appendChild(methodTypeV);
  box.appendChild(outputDestination);
  box.appendChild(outputDestinationV);
  box.appendChild(outputTitle);
  box.appendChild(outputTitleV);
  box.appendChild(operatorTitle);
  box.appendChild(operatorTitleV);
  box.appendChild(subtitleVorod);
  box.appendChild(subtitleVorodV);
  box.appendChild(subtitle);
  box.appendChild(subtitleV);
  box.appendChild(subcode);
  box.appendChild(subcodeV);
  box.appendChild(dsc);
  box.appendChild(dscV);

  document.querySelector(".listV").appendChild(box);
}
//getview3
function getView3() {
  $(document).ready(function () {
    var request = new XMLHttpRequest();
    request.open("GET", "http://bpr.jz.ac.ir/jzu/public/api/v1/activities/3");
    request.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        generateCateBox(JSON.parse(this.responseText));
      }
    };
    request.send();
  });
}

function generateCateBox(data) {
  let dataVi = data.data.activities;
  for (let i = 0; i < dataVi.length; i++) {
    createBox(dataVi[i]);
    let sub = dataVi[i].subActivities;
    for (let b = 0; b < sub.length; b++) {
      console.log(sub[b].inputTitle);
      createBox(sub[b]);
    }
  }
}

function createBox(categoury) {
  let box = document.createElement("div");
  box.className = "cateBox";
  //عنوان فرآیند
  let onvaneFaraiand = document.createElement("p");
  onvaneFaraiand.innerText = "عنوان فرآیند";
  let onvaneFaraiandV = document.createElement("b");
  onvaneFaraiandV.innerText = categoury.title;
  //شناسه فرآیند
  let code = document.createElement("p");
  code.innerText = "شناسه فرآیند";
  let codeV = document.createElement("b");
  codeV.innerText = categoury.code;
  //کد مرکز هزینه
  let costCenterCodet = document.createElement("p");
  costCenterCodet.innerText = "کد مرکز هزینه";
  let costCenterCodeV = document.createElement("b");
  costCenterCodeV.innerText = categoury.costCenterCode;
  //عنوان مرکز هزینه
  let costCenterTitle = document.createElement("p");
  costCenterTitle.innerText = "عنوان مرکز هزینه";
  let costCenterTitleV = document.createElement("b");
  costCenterTitleV.innerText = categoury.costCenterTitle;
  //عنوان حوزه واحد سازمانی
  let workSectionTitle = document.createElement("p");
  workSectionTitle.innerText = "عنوان حوزه واحد سازمانی";
  let workSectionTitleV = document.createElement("b");
  workSectionTitleV.innerText = categoury.workSectionTitle;
  //اهداف و انتظارات
  let expects = document.createElement("p");
  expects.innerText = "اهداف و انتظارات";
  let expectsV = document.createElement("b");
  expectsV.innerText = categoury.expects;
  //تاریخ ایجاد
  let date = document.createElement("p");
  date.innerText = "تاریخ ایجاد";
  let dateV = document.createElement("b");
  dateV.innerText = categoury.date;
  //توضیحات فعالیت
  let dsc = document.createElement("p");
  dsc.innerText = "  توضیحات فعالیت ";
  let dscV = document.createElement("b");
  dscV.innerText = categoury.dsc;
  //کد زیر فعالیت
  let subcode = document.createElement("p");
  subcode.innerText = "  کد زیر فعالیت";
  let subcodeV = document.createElement("b");
  subcodeV.innerText = categoury.code;
  //عنوان زیر فعالیت
  let subtitle = document.createElement("p");
  subtitle.innerText = "  عنوان زیر فعالیت";
  let subtitleV = document.createElement("b");
  subtitleV.innerText = categoury.title;
  //عنوان ورودی
  let subtitleVorod = document.createElement("p");
  subtitleVorod.innerText = "  عنوان ورودی";
  let subtitleVorodV = document.createElement("b");
  subtitleVorodV.innerText = categoury.inputTitle;
  //عنوان مجری
  let operatorTitle = document.createElement("p");
  operatorTitle.innerText = "  عنوان مجری";
  let operatorTitleV = document.createElement("b");
  operatorTitleV.innerText = categoury.operatorTitle;
  //عنوان خروجی
  let outputTitle = document.createElement("p");
  outputTitle.innerText = "  عنوان خروجی";
  let outputTitleV = document.createElement("b");
  outputTitleV.innerText = categoury.outputTitle;
  //مقصد خروجی
  let outputDestination = document.createElement("p");
  outputDestination.innerText = "  مقصد خروجی";
  let outputDestinationV = document.createElement("b");
  outputDestinationV.innerText = categoury.outputDestination;
  //نوع و روش
  let methodType = document.createElement("p");
  methodType.innerText = "  نوع و روش";
  let methodTypeV = document.createElement("b");
  methodTypeV.innerText = categoury.methodType;
  //نام سامانه
  let methodSystem = document.createElement("p");
  methodSystem.innerText = "  نام سامانه";
  let methodSystemV = document.createElement("b");
  methodSystemV.innerText = categoury.methodSystem;
  //وضعیت
  let statusTitle = document.createElement("p");
  statusTitle.innerText = "  وضعیت";
  let statusTitleV = document.createElement("b");
  statusTitleV.innerText = categoury.statusTitle;

  box.appendChild(code);
  box.appendChild(codeV);
  box.appendChild(statusTitle);
  box.appendChild(statusTitleV);
  box.appendChild(costCenterTitle);
  box.appendChild(costCenterTitleV);
  box.appendChild(costCenterCodet);
  box.appendChild(costCenterCodeV);
  box.appendChild(workSectionTitle);
  box.appendChild(workSectionTitleV);
  box.appendChild(expects);
  box.appendChild(expectsV);
  box.appendChild(onvaneFaraiand);
  box.appendChild(onvaneFaraiandV);
  box.appendChild(date);
  box.appendChild(dateV);
  box.appendChild(methodSystem);
  box.appendChild(methodSystemV);
  box.appendChild(methodSystemV);
  box.appendChild(methodType);
  box.appendChild(methodTypeV);
  box.appendChild(outputDestination);
  box.appendChild(outputDestinationV);
  box.appendChild(outputTitle);
  box.appendChild(outputTitleV);
  box.appendChild(operatorTitle);
  box.appendChild(operatorTitleV);
  box.appendChild(subtitleVorod);
  box.appendChild(subtitleVorodV);
  box.appendChild(subtitle);
  box.appendChild(subtitleV);
  box.appendChild(subcode);
  box.appendChild(subcodeV);
  box.appendChild(dsc);
  box.appendChild(dscV);

  document.querySelector(".listV").appendChild(box);
}
/*     $.ajax({
      type: "GET",
      url: "http://10.10.30.45/jzu/public/api/v1/activities/1",
      dataType: "json",
      accept: "application/json",
      XCSRFTOKEN: "",
      success: function (data) {
        var dataView = data.data.activities; */
// $(".test").text(dataView.costCenterCode);
// document.querySelector(".test").innerHTML = JSON.parse(dataView);

/*         for (i = 0; i < dataView.length; i++) {
            $(".shenasehFaraiand").text(dataView[i].code);
            $(".resCodeSazman").text(dataView[i].costCenterCode);
            $(".titleFaraiand").text(dataView[i].title);
            $(".selectNumber").text(dataView[i].costCenterTitle);
            $(".rezTitlesazman").text(dataView[i].workSectionTitle);
            $(".ahdaf").text(dataView[i].expects);
            $(".paiesh").text(dataView[i].date);
        } */
/*    console.log(data.data.activities[0].subActivities[0].operatorTitle); */
/* 
             var dataGet = data.val();
        dataGet.subActivities[
          {
            activityCode: $(".lab7").val(),
            code: $(".lab8").val(),
            title: $(".lab9").val(),
            dsc: $(".lab10").val(),
            inputTitle: $(".lab11").val(),
            inputSource: $(".lab12").val(),
            operatorTitle: $(".lab13").val(),
            outputTitle: $(".lab14").val(),
            outputDestination: $(".lab15").val(),
            methodType: $(".lab16").val(),
            methodSystem: $(".lab17").val(),
            exist: $(".lab18").val(),
            activityCode: $(".lab19").val(),
            activityCode: $(".lab20").val(),
            activityCode: $(".lab21").val(),
          }
        ];  */
/*    },
    }); */

//ajaxPost

function sabtFraiand() {
  $(document).ready(function () {
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
      url: "http://bpr.jz.ac.ir/jzu/public/api/v1/activity",
      dataType: "json",
      accept: "application/json",
      ContentType: "application/json",
      XCSRFTOKEN: "",
      data: {
        lvlId1: $("#kalanFaraiand").val(),
        lvlId2: $("#grohFaraiand").val(),
        lvlId3: kar,
        lvlId4: zir,
      },
      success: function (data) {
        $("#shenasehFaraiand").val(data.data.activity.Code);
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
      url: "http://bpr.jz.ac.ir/jzu/public/api/v1/activity/sub_activity",
      dataType: "json",
      accept: "application/json",
      ContentType: "application/json",
      XCSRFTOKEN: "",
      data: {
        acGuid: $(".EditGuid").text(),
        title: $("#shenasehFaraiand").val(),
        dsc: $("#sharhFaaliat").val(),
        inputTitle: $("#titleVorod").val(),
        inputSource: $("#mabdaeVorod").val(),
        operatorTitle: $("#titleMojre").val(),
        outputTitle: $("#titleKhoroje").val(),
        outputDestination: $("#maghsadKhoroje").val(),
        methodType: $("#nameSamaneh").val(),
        methodSystem: $("#noewRavesh").val(),
      },
      success: function (data) {

      },
    });
  });
  var titF = $("#shenasehFaraiand").val();
  var sharh = $("#sharhFaaliat").val();
  var titV = $("#titleVorod").val();
  var mabV = $("#mabdaeVorod").val();
  var titm = $("#titleMojre").val();
  var titKh = $("#titleKhoroje").val();
  var maghKh = $("#maghsadKhoroje").val();
  var nS = $("#nameSamaneh").val();
  var nR = $("#noewRavesh").val();
  if (titF == "") {
    $("#shenasehFaraiand").css("border", "2px solid red");
    $(".titFar").text("لطفا مراحل فعالیت را پر نمائید").css("color", "red");
    Swal.fire({
      text: "لطفا عنوان فرآیند را وارد نمائید",
      icon: "warning",
      confirmButtonText: "ok",
    });
  } else if (sharh == "") {
    $("#sharhFaaliat").css("border", "2px solid red");
    $(".sharhFaaliat").text("لطفا شناسه پایش را پر نمائید").css("color", "red");
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
      text: "لطفا یکی از روش هارا انتخاب نمائید",
      icon: "warning",
      confirmButtonText: "ok",
    });
  } else {
    Swal.fire({
      title: "Success",
      text: "کاربرگ با موفقیت ثبت شد",
      icon: "success",
      Button: "<a style='color:#fff'>ثبت کاربرگ جدید</a>",
    });
    //بدون اینکه صفحه رفریش شود $('your_div_id').load('your_url');
    //$("#maghsadKhoroje").empty().val("");
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
