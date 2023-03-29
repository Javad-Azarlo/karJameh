$(document).ready(() => {
    let urlTok = new URLSearchParams(window.location.search);
    if (urlTok.get("name") == undefined || urlTok.get("name") == "") {
        window.location = "logIn/logIn.html";
    }
    const Guid = urlTok.get("sub-id");
    const code = urlTok.get("code");

    $.ajax({
        type: "GET",
        url: bpr + "/jzu/public/api/v2/activities/1",
        headers: {
            Authorization: `Bearer ${urlTok.get("name")}`,
        },
        success: (data) => {
            for (const activitie of data.data.activities) {
                if (activitie.code == code) {
                    for (const subActivitie of activitie.subActivities) {
                        if (subActivitie.Guid == Guid) {
                            let methodType = subActivitie.methodType;
                            switch (methodType) {
                                case "غیر سامانه ای":
                                    methodType = 0;
                                    break;
                                case "سامانه ای":
                                    methodType = 1;
                                    break;
                                case "ترکیبی":
                                    methodType = 2;
                                    break;
                            }
                            $("#codeFaaliat").val(subActivitie.code);
                            $("#marahelFaaliat").val(subActivitie.title);
                            $("#sharhFaaliat").val(subActivitie.dsc == "0" ?"": subActivitie.dsc);
                            $("#titleVorod").val(subActivitie.inputTitle);
                            $("#mabdaeVorod").val(subActivitie.inputSource);
                            $("#titleMojre").val(subActivitie.operatorTitle);
                            $("#mostanadatJare").val(subActivitie.documents == "0" ?"": subActivitie.documents);
                            $("#poshtiban").val(subActivitie.supporter == "0" ?"": subActivitie.supporter);
                            $("#titleKhoroje").val(subActivitie.outputTitle);
                            $("#maghsadKhoroje").val(
                                subActivitie.outputDestination
                            );
                            $("#shenaseMojre").val(subActivitie.operatorID == "0" ?"": subActivitie.operatorID)
                            console.log(subActivitie.operatorID)
                            $("#noewRavesh").val(methodType);
                            $("#nameSamaneh").val(subActivitie.methodSystem == "0" ? "" : subActivitie.methodSystem);
                        }
                    }
                }
            }
        },
    });
});

function saveChanges() {
    let urlTok = new URLSearchParams(window.location.search);
    const Guid = urlTok.get("sub-id");
    const code = urlTok.get("code");
    const name = urlTok.get("name");
    const acGuid = urlTok.get("ac-id")
    let title = $("#marahelFaaliat").val();
    let dsc = $("#sharhFaaliat").val() || "0";
    let inputTitle = $("#titleVorod").val();
    let inputSource = $("#mabdaeVorod").val();
    let operatorTitle = $("#titleMojre").val();
    let operatorID = $("#shenaseMojre").val() || "0"
    operatorID = parseInt(operatorID)
    console.log(operatorID)
    let methodType = $("#noewRavesh").val();
    console.log(methodType)
    let documents = $("#mostanadatJare").val() || "0";
    let supporter = $("#poshtiban").val() || "0"
    let outputTitle = $("#titleKhoroje").val();
    let outputDestination = $("#maghsadKhoroje").val();
    let methodSystem = $("#nameSamaneh").val() || "0";
    if (title == "") {
        $("#marahelFaaliat").css("border", "2px solid red");
        $(".marahelFaaliat")
            .text("لطفا مراحل فعالیت را پر نمائید")
            .css("color", "red");
        Swal.fire({
            text: "لطفا مراحل فرآیند را وارد نمائید",
            icon: "warning",
            confirmButtonText: "ok",
        });
    } else if (inputTitle == "") {
        $("#titleVorod").css("border", "2px solid red");
        $(".titVorod")
            .text("لطفا عنوان ورودی را پر نمائید")
            .css("color", "red");
        Swal.fire({
            text: "لطفا عنوان ورودی را وارد نمائید",
            icon: "warning",
            confirmButtonText: "ok",
        });
    } else if (inputSource == "") {
        $("#mabdaeVorod").css("border", "2px solid red");
        $(".mabdaVorod")
            .text("لطفا مبدا ورودی را پر نمائید")
            .css("color", "red");
        Swal.fire({
            text: "لطفا مبدا ورودی را وارد نمائید",
            icon: "warning",
            confirmButtonText: "ok",
        });
    } else if (operatorTitle == "") {
        $("#titleMojre").css("border", "2px solid red");
        $(".titMojre").text("لطفا عنوان مجری را پر نمائید").css("color", "red");
        Swal.fire({
            text: "لطفا عنوان مجری را وارد نمائید",
            icon: "warning",
            confirmButtonText: "ok",
        });
    } else if (outputTitle == "") {
        $("#titleKhoroje").css("border", "2px solid red");
        $(".titKh").text("لطفا عنوان خروجی را پر نمائید").css("color", "red");
        Swal.fire({
            text: "لطفا عنوان خروجی را وارد نمائید",
            icon: "warning",
            confirmButtonText: "ok",
        });
    } else if (outputDestination == "") {
        $("#maghsadKhoroje").css("border", "2px solid red");
        $(".maghKh").text("لطفا مقصد خروجی را پر نمائید").css("color", "red");
        Swal.fire({
            text: "لطفا مقصد خروجی را وارد نمائید",
            icon: "warning",
            confirmButtonText: "ok",
        });
    } else if (methodType == "") {
        $("#noewRavesh").css("border", "2px solid red");
        $(".noRavash")
            .text("لطفا یکی از روش ها را انتخاب نمائید")
            .css("color", "red");
        Swal.fire({
            text: "لطفا یکی از نام سامانه را وارد نمائید",
            icon: "warning",
            confirmButtonText: "ok",
        });    
    }else if ($("#nameSamaneh").val() == "" && methodType != "0") {
        console.log(methodType)
        $("#nameSamaneh").css("border", "2px solid red");
        $(".nameS").text("لطفا نام سامانه را انتخاب نمائید").css("color", "red");
        Swal.fire({
          text: "لطفا نام سامانه را انتخاب نمائید",
          icon: "warning",
          confirmButtonText: "ok",
        })
    }
    else {
        Swal.fire({
            title: "ایا مطمئن هستید",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "ذخیره",
            cancelButtonText: "لغو",
        }).then((stat) => {
            if (stat.isConfirmed) {
                if (
                    documents == null ||
                    documents == undefined ||
                    documents == ""
                ) {
                    documents = "0";
                }
                $.ajax({
                    type: "PATCH",
                    url: bpr + "/jzu/public/api/v1/sub_activity",
                    dataType: "json",
                    accept: "application/json",
                    ContentType: "application/json",
                    headers: {
                        Authorization: `Bearer ${urlTok.get("name")}`,
                    },
                    XCSRFTOKEN: "",
                    data: {
                        Guid,
                        title,
                        dsc,
                        inputTitle,
                        inputSource,
                        operatorTitle,
                        documents,
                        supporter,
                        outputTitle,
                        outputDestination,
                        methodType,
                        methodSystem,
                        operatorID,
                    },
                    success: () => {
                        window.location.href = `${bpr}/carBarg/tableSubAct.html?code=${code}&name=${name}&ac-id=${acGuid}`;
                    },
                    error: (error) => { 
                        Swal.fire({
                            icon: "error",
                            title: "خطا",
                            text: `کدخطا:${err.status}`

                        }) 
                    }
                });
            }
        });
    }
}
