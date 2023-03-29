//const bpr = "http://10.10.30.45";

var v_activities;

$(document).ready(function () {
  let urlTok = new URLSearchParams(window.location.search);
  if (urlTok.get("name") == undefined || urlTok.get("name") == "") {
    window.location = "logIn/logIn.html";
  }
  const name = urlTok.get("name")

  $.ajax({
    type: "GET",
    dataType: "JSON",
    url: bpr+"/jzu/public/api/v1/activities/1",
    headers: {
      Authorization: `Bearer ${urlTok.get("name")}`,
    },
    success: function (data) {
      var structureDiv = "";
      var v_activities = data.data.activities;
      for (let i = 0; i < v_activities.length; i++) {
        let comparativeTitle = v_activities[i].comparativeTitle
        if (comparativeTitle == "0" || comparativeTitle == undefined) {
            comparativeTitle = ""
        }
        let expects = v_activities[i].expects
        if (expects == "0" || expects == undefined) {
            expects = ""
        }
        let date = v_activities[i].date.split(".")[0]
        date = moment(date).locale('fa').format('jYYYY/jMM/jDD HH:mm:ss')
      
        structureDiv +=
          "<tr>" +
          `<td class='list-col'>
            <div><button class = "btn btn-light bpr-btn-edit">
                    <a href="edit-activity.html?name=${name}&ac-id=${v_activities[i].Guid}">
                      <img src="http://bpr.jz.ac.ir/carBarg/dist/img/pen-to-square-solid.svg" alt="">
                    </a>
                  </button>
                  <button class="btn btn-danger bpr-btn-delete  " onclick = "deleteActivities(event)" ac-id=${v_activities[i].Guid}>حذف</button>
            </div>
          </td>`+
          `<td class='list-col'>
            ${v_activities[i].title}
          </td>` +
          `<td class='list-col'>
          ${comparativeTitle}
          </td>`+
          "<td class='list-col'>" +
          `${v_activities[i].comparativeTitle == "0" ? v_activities[i].code :  v_activities[i].comparativeCode }`+
          "</td>" +
          "<td class='list-col'>" +
          v_activities[i].costCenterCode +
          "</td>" +
          "<td class='list-col'>" +
          v_activities[i].costCenterTitle +
          "</td>" +
          //"<td >" + v_activities[i].workSectionTitle + "</td>" +
          "<td class='list-col bpr-text-justify'>" +
          `${expects.replaceAll("\n", "<br>")}` +
          "</td>" +
          "<td class='list-col' dir='ltr'>" +
            date
           +
          "</td>" +
          "<td class='list-col'><a class='show' href='tableSubAct.html?code=" +
          v_activities[i].code + "&name="+ urlTok.get("name") + `&ac-id=${v_activities[i].Guid}` + 
          "'><i class='fa fa-eye' )'></i></a></td>" +
          "</tr>";
      }
      var structureDivSub = "";

      //************************* */
      let v_ac_code = new URLSearchParams(window.location.search);
      const guid =  v_ac_code.get("ac-id")
      //*************************** */
      if (v_ac_code.has("code")) {
        for (let i = 0; i < v_activities.length; i++) {
          if (v_activities[i].Guid == guid) {
            for (let b = 0; b < v_activities[i].subActivities.length; b++) {
              structureDivSub +=
                `<tr sub-id= ${v_activities[i].subActivities[b].Guid}>` +
                ` <td  class = "list-col">
                    <div>
                      <button class = "btn btn-light bpr-btn-edit" onclick="editActivity(event)"><img src="http://bpr.jz.ac.ir/carBarg/dist/img/pen-to-square-solid.svg" alt=""></button>
                      <button class="btn btn-danger bpr-btn-delete " onclick = "deleteSubActivities(event)">حذف</button>
                    </div>
                  </td>`+
                " <td  class= 'bpr-SA-code list-col'>" +
                v_activities[i].subActivities[b].code +
                "</td>" +
                // "<td >" + v_activities[i].subActivities[b].order + "</td>" +
                "<td  class='onvanScrooll list-col'>" +
                v_activities[i].subActivities[b].title +
                "</td>" +
                "<td   class='tozihScroll list-col'>" +
                `${v_activities[i].subActivities[b].dsc == "0" ? "" : v_activities[i].subActivities[b].dsc}` +
                "</td>" +
                "<td class='list-col bpr-text-justify'>" +
                v_activities[i].subActivities[b].inputTitle.replaceAll("\n", "<br>") +
                "</td>" +
                "<td class='list-col bpr-text-justify'>" +
                v_activities[i].subActivities[b].inputSource.replaceAll("\n", "<br>") +
                "</td>" +
                "<td class='list-col bpr-text-justify'>" +
                v_activities[i].subActivities[b].operatorTitle.replaceAll("\n", "<br>") +
                "</td>" +
                "<td class='list-col bpr-text-justify'>" +
                v_activities[i].subActivities[b].outputTitle.replaceAll("\n", "<br>") +
                "</td>" +
                "<td class='list-col bpr-text-justify'>" +
                v_activities[i].subActivities[b].outputDestination.replaceAll("\n", "<br>") +
                "</td>" +
                "<td class='list-col'>" +
                v_activities[i].subActivities[b].methodType +
                "</td>" +
                "<td class='list-col'>" +
                `${v_activities[i].subActivities[b].methodSystem == "0" ? "" : v_activities[i].subActivities[b].methodSystem}` +
                "</td>" +
                "</tr>";
            }
          }
        }

        $("#divBodySub").html(structureDivSub);
      }
      $("#divBody").html(structureDiv);
    },
  });
});

//searchSub
/* function searchSub() {
  srchSubAct = document.getElementById("searchSubAct").value;
  $(document).ready(function () {
    $.ajax({
      type: "GET",
      url: "http://10.10.30.45/jzu/public/api/v2/activities/find/22141",
      dataType: "json",
      success: function (data) {
        var v_activities;
        var structureDiv = "";
        var v_activities = data.data.activities;
        for (let i = 0; i < v_activities.length; i++) {
          structureDiv +=
            "<tr>" +
            "<td >" +
            v_activities[i].code +
            "</td>" +
            "<td >" +
            v_activities[i].costCenterCode +
            "</td>" +
            "<td >" +
            v_activities[i].costCenterTitle +
            "</td>" +
            //"<td >" + v_activities[i].workSectionTitle + "</td>" +
            "<td >" +
            v_activities[i].expects +
            "</td>" +
            "<td >" +
            v_activities[i].date +
            "</td>" +
            "<td ><a  class='show' href='tableSubAct.html?code=" +
            v_activities[i].code +
            "'>نمایش</a></td>" +
            "</tr>";
        }
        $("#divBody").html(structureDiv);
      },
    });
  });
} */
//linkPageSub
/* function listShowSubAct(param) {
  let urlTok = new URLSearchParams(window.location.search);
  if (urlTok.get("name") == undefined || urlTok.get("name") == "") {
    window.location = "/logIn/logIn.html";
  }
   window.location = "tableSubAct.html?name=" + urlTok.get("name") + "&code=" + param
} */

 
