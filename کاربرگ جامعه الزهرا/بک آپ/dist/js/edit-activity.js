$(document).ready(() => {
    let urlTok = new URLSearchParams(window.location.search);
    if (urlTok.get("name") == undefined || urlTok.get("name") == "") {
        window.location = "logIn/logIn.html";
    }
    const Guid = urlTok.get("ac-id");
    $.ajax({
        type: "GET",
        url: bpr + "/jzu/public/api/v2/activities/1",
        headers: {
            Authorization: `Bearer ${urlTok.get("name")}`,
        },
        success: (data) => {
            for (const activitie of data.data.activities) {
                if (activitie.Guid === Guid) {
                    window.primaryActivity = activitie
                    $("#titleFaraiand").val(activitie.title);
                    const expects = activitie.expects == "0" ? "": activitie.expects
                    const comparativeTitle = activitie.comparativeTitle == "0" ? "" :activitie.comparativeTitle
                    const monitoringID = activitie.monitoringID == "0" ? "" : activitie.monitoringID
                    $("#ahdaf").val(expects);
                    $("#titleTafzili").val(comparativeTitle);
                    $("#paiesh").val(monitoringID)
                    $.ajax({
                        type: "GET",
                        url:
                            bpr +
                            "/jzu/public/api/v2/system/levels/get?levelID=" +
                            activitie.levels[0],
                        headers: {
                            Authorization: `Bearer ${urlTok.get("name")}`,
                        },
                        success: (data) => {
                            $("#kalanFaraiand").val(activitie.levels[0]);
                            for (const level2 of data.data.level2) {
                                if (level2.id > 0) {
                                    $("#grohFaraiand").append(
                                        `<option value=${level2.id}>${level2.title}</option>`
                                    );
                                }
                                if (activitie.levels[1] == level2.id) {
                                    $("#grohFaraiand").val(level2.id)
                                    $.ajax({
                                        type: "GET",
                                        url:
                                            bpr +
                                            "/jzu/public/api/v2/system/levels/get?levelID=" +
                                            activitie.levels[1],
                                        headers: {
                                            Authorization: `Bearer ${urlTok.get(
                                                "name"
                                            )}`,
                                        },
                                        success: (data) => {
                                            for (const level3 of data.data.level3) {
                                                if (level3.id > 0) {
                                                    $("#karbargFaraiand").append(
                                                        `<option value=${level3.id}>${level3.title}</option>`
                                                    );
                                                }
                                                if (activitie.levels[2] == level3.id) {
                                                    let kar = level3.id
                                                    if (kar == undefined || kar == null) {
                                                        kar = "000"
                                                    }
                                                    $("#karbargFaraiand").val(kar);
                                                    $.ajax({
                                                        type: "GET",
                                                        url:
                                                            bpr +
                                                            "/jzu/public/api/v2/system/levels/get?levelID=" +
                                                            activitie.levels[2],
                                                        headers: {
                                                            Authorization: `Bearer ${urlTok.get(
                                                                "name"
                                                            )}`,
                                                        },
                                                        success: (data) => {
                                                            for (const level4 of data.data.level4) {
                                                                if (level4.id > 0) {
                                                                    $("#zirFaraiand").append(
                                                                        `<option value=${level4.id}>${level4.title}</option>`
                                                                    );
                                                                }
                                                                if (activitie.levels[3] == level4.id) {
                                                                    $("#zirFaraiand").val(level4.id);
                                                                    
                                                                }
                                                            }
                                                        }
                                                    });
                                                }
                                            }
                                        }
                                    });
                                }
                            }
                        },
                    });
                    $.ajax({
                        type: "GET",
                        url:
                            bpr +
                            "/jzu/public/api/v2/system/cost_centers?ID=" +
                            activitie.CCIDS[0],
                        headers: {
                            Authorization: `Bearer ${urlTok.get("name")}`,
                        },
                        success: (data) => {
                            $("#departmentsDropdown").val(activitie.CCIDS[0]);
                            for (const level2 of data.data.level2) {
                                if (level2.id > 0) {
                                    $("#rezTitlesazman").append(
                                        `<option value=${level2.id}>${level2.title}</option>`
                                    );
                                }
                                if (activitie.CCIDS[1] == level2.id) {
                                    $("#rezTitlesazman").val(level2.id);
                                    $.ajax({
                                        type: "GET",
                                        url:
                                            bpr +
                                            "/jzu/public/api/v2/system/cost_centers?ID=" +
                                            activitie.CCIDS[1],
                                        headers: {
                                            Authorization: `Bearer ${urlTok.get("name")}`,
                                        },
                                        success:(data)=>{
                                            for (const level3 of data.data.level3) {
                                                if (level3.id > 0) {
                                                    $("#resCodeSazman").append(
                                                        `<option value=${level3.id}>${level3.title}</option>`
                                                    );
                                                }
                                                if (activitie.CCIDS[2] == level3.id) {
                                                    $("#resCodeSazman").val(level3.id);
                                                    $.ajax({
                                                        type: "GET",
                                                        url:
                                                        bpr +
                                                        "/jzu/public/api/v2/system/cost_centers?ID=" +
                                                        activitie.CCIDS[2],
                                                        headers: {
                                                            Authorization: `Bearer ${urlTok.get("name")}`,
                                                        },
                                                        success:(data)=>{
                                                            for (const level4 of data.data.level4) {
                                                                if (level4.id > 0) {
                                                                    $("#selectNumber").append(
                                                                        `<option value=${level4.id}>${level4.title}</option>`
                                                                    );
                                                                }
                                                                if (activitie.CCIDS[3] == level4.id) {
                                                                    $("#selectNumber").val(level4.id);
                                                                    
                                                                }
                                                                
                                                            }
                                                        }
                                                    }) 
                                                }
                                                
                                            }
                                        }
                                    })
                                }
                            }
                        },
                    });
                }
            }
        },
    });
});
function saveActivityChanges() {
    let urlTok = new URLSearchParams(window.location.search);
    if (urlTok.get("name") == undefined || urlTok.get("name") == "") {
        window.location = "logIn/logIn.html";
    }
    const Guid = urlTok.get("ac-id");
    const name = urlTok.get("name");
    $(document).ready(function () {
        let titleTafzili = $("#titleTafzili").val() || "0";
        var sathePaieh = $("#selectNumber").val();
        if (sathePaieh == null || !(sathePaieh > 0)) {
            sathePaieh = "0000";
        }
        var kar = $("#karbargFaraiand").val()
        if (kar == null || !(kar > 0)) {
            kar = "000";
        }
        var zir = $("#zirFaraiand").val();
        if ($("#titleFaraiand").val() == "") {
            Swal.fire({
                text: "لطفا عنوان فرایند را وارد نمائید",
                icon: "warning",
                confirmButtonText: "ok",
            });
            return false;
        }
        const activitie = primaryActivity
        //set undefined values to "" to avoid conflicts

        const dataProps = {
            "#titleTafzili": titleTafzili !== activitie.comparativeTitle ? {comparativeTitle: titleTafzili || "0"}: null,
            "#kalanFaraiand": $("#kalanFaraiand").val() != activitie.levels[0] ?{lvlId1: $("#kalanFaraiand").val()} : null,
            "#grohFaraiand": $("#grohFaraiand").val() != activitie.levels[1] ?{ lvlId2: $("#grohFaraiand").val()} : null,
            "#karbargFaraiand" : kar != activitie.levels[2] ?{lvlId3: kar || "000",} : null,
            "zirFaraiand": zir != activitie.levels[3] ?{lvlId4: zir || "0000"} : null,
            "titleFaraiand" : $("#titleFaraiand").val() != activitie.title ?{title: $("#titleFaraiand").val()} : null,
            "#departmentsDropdown": $("#departmentsDropdown").val() != activitie.CCIDS[0] ?{CCID1: $("#departmentsDropdown").val()} : null,
            "#rezTitlesazman": $("#rezTitlesazman").val() != activitie.CCIDS[1] ?{CCID2: $("#rezTitlesazman").val()} : null,
            "#resCodeSazman" : $("#resCodeSazman").val() != activitie.CCIDS[2] ?{CCID3: $("#resCodeSazman").val()} : null,
            "sathePaieh" : sathePaieh != activitie.CCIDS[3] ?{CCID4: sathePaieh} : null,
            "#ahdaf": $("#ahdaf").val() != activitie.expects ?{expects: $("#ahdaf").val() || "0"} : null,
            "#monitoringID":  $("#paiesh").val() != activitie.monitoringID ? {monitoringID :  $("#paiesh").val() || "0"} : null
        }
        const data = {Guid: Guid}
        for (const key in dataProps) {
            if (dataProps[key] != null) {
                let childKey = Object.keys(dataProps[key])[0]
                data[childKey] = dataProps[key][childKey]
            }
        }
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
                $.ajax({
                    type: "PATCH",
                    url: bpr + "/jzu/public/api/v1/activity",
                    dataType: "json",
                    accept: "application/json",
                    ContentType: "application/json",
                    XCSRFTOKEN: "",
                    headers: {
                        Authorization: `Bearer ${urlTok.get("name")}`,
                    },
                    data,
                    success: function () {
                        window.location = `listShow.html?name=${name}`;
                    },
                    error: (error) => {
                        Swal.fire({
                            title: "ویرایش ناموفق بود",
                            text:
                            `کدخطا:${error.status}`
                            ,
                            icon: "error"
                        })
                    }
                });
            }
        });
    });
}
