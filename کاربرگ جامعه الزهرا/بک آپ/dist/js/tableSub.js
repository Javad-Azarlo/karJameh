
//const bpr = "http://10.10.30.45";

var v_activities;

$(document).ready(function () {
    let v_ac_code = new URLSearchParams(window.location.search)
    let urlTok = new URLSearchParams(window.location.search);
    if (urlTok.get("name") == undefined || urlTok.get("name") == "") {
        window.location = "logIn/logIn.html";
    }
    const code = v_ac_code.has("code")? v_ac_code.get("code"): "";
    $.ajax({
        type: "GET",
        dataType: "JSON",
        url: bpr + "/jzu/public/api/v2/activities/find/" + code,
        headers: {
            Authorization: `Bearer ${urlTok.get("name")}`,
        },
        success: function (data) {
		console.log(data)
            v_activities = data.subActivities;
            var structureDivSub = "";

            //************************* */
            //*************************** */
            if (v_ac_code.has("code")) {
                for (let i = 0; i < v_activities.length; i++) {
                    if (v_activities[i].code == v_ac_code.get("code")) {
                        for (
                            let b = 0;
                            b < v_activities[i].subActivities.length;
                            b++
                        ) {
                            structureDivSub +=
                                "<tr>" +
                                "<td>" +
                                v_activities[i].subActivities[b].code +
                                "</td>" +
                                // "<td>" + v_activities[i].subActivities[b].order + "</td>" +
                                "<td class='onvanScrooll'>" +
                                v_activities[i].subActivities[b].title +
                                "</td>" +
                                "<td  class='tozihScroll'>" +
                                v_activities[i].subActivities[b].dsc +
                                "</td>" +
                                "<td>" +
                                v_activities[i].subActivities[b].inputTitle +
                                "</td>" +
                                "<td>" +
                                v_activities[i].subActivities[b].inputSource +
                                "</td>" +
                                "<td>" +
                                v_activities[i].subActivities[b].operatorTitle +
                                "</td>" +
                                "<td>" +
                                v_activities[i].subActivities[b].outputTitle +
                                "</td>" +
                                "<td>" +
                                v_activities[i].subActivities[b]
                                    .outputDestination +
                                "</td>" +
                                "<td>" +
                                v_activities[i].subActivities[b].methodType +
                                "</td>" +
                                "<td>" +
                                v_activities[i].subActivities[b].methodSystem +
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
            "<td>" +
            v_activities[i].code +
            "</td>" +
            "<td>" +
            v_activities[i].costCenterCode +
            "</td>" +
            "<td>" +
            v_activities[i].costCenterTitle +
            "</td>" +
            //"<td>" + v_activities[i].workSectionTitle + "</td>" +
            "<td>" +
            v_activities[i].expects +
            "</td>" +
            "<td>" +
            v_activities[i].date +
            "</td>" +
            "<td><a  class='show' href='tableSubAct.html?code=" +
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
