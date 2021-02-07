function getSearchParameters() {
    var prmstr = window.location.search.substr(1);
    return prmstr != null && prmstr != "" ? transformToAssocArray(prmstr) : {};
}

function transformToAssocArray(prmstr) {
    var params = {};
    var prmarr = prmstr.split("&");
    for (var i = 0; i < prmarr.length; i++) {
        var tmparr = prmarr[i].split("=");
        params[tmparr[0]] = tmparr[1];
    }
    return params;
}


var params = getSearchParameters();

var id = params.id

firebase.firestore().collection("case-studies").doc(id).get().then(function (doc) {
    var heading = doc.data().heading
    var subHeading = doc.data().subHeading
    var clientName = doc.data().clientName
    var imgUrl = doc.data().imgUrl
    var timestamp = doc.data().timestamp
    var content = doc.data().content

    document.getElementById("case-studies").innerHTML = `
    <div class="row" style="margin-top: 100px;" data-aos="zoom-in" data-aos-duration="2000">
        <div class="col-lg-12 col-md-12 col-12 mx-auto text-center">
            <div class="row">
                <div class="col-md-6 mx-auto text-left">
                    <h1 class="bottom-container">${heading}</h1>
                    <h1 class="top-container">${heading}</h1>
                </div>
            </div>
            <h3 class="mt-60 subHeading">${subHeading}</h3>
            <p class="text-muted font-pt-serif-400">
                <span style="font-weight: 900;">CLIENT:</span> ${clientName}
            </p>
        </div>
    </div>
    <div class="row my-5" data-aos="zoom-in" data-aos-duration="2000">
        <div class="col-lg-12 col-md-12 col-12 mx-auto my-auto font-pt-serif-400" style="color:#000;">
            ${content}
        </div>
    </div>
    `
})
