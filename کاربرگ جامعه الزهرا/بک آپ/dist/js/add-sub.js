$(document).ready(() => {
    let urlTok = new URLSearchParams(window.location.search);
    const acGuid = urlTok.get("ac-id")
    $(".EditGuid").text(acGuid)
})