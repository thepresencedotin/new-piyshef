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
var lastDocument = ""
firebase.firestore().collection("case-studies").doc(id).get().then(function (doc) {
    console.log("data", doc)
    console.log("data", doc.data())
    lastDocument = doc.data().timestamp
    var heading = doc.data().heading
    var subHeading = doc.data().subHeading
    var clientName = doc.data().clientName
    var imgUrl = doc.data().imgUrl
    var timestamp = doc.data().timestamp
    var content = doc.data().content

    document.getElementById("case-studies-detail").innerHTML = `
    <div class="row" style="margin-top: 100px;" data-aos="fade-up" data-aos-duration="2000">
        <div class="col-lg-12 col-md-12 col-12 mx-auto text-center">
            <div class="row">
                <div class="col-md-6 mx-auto text-left">
                    <h1 class="bottom-container">${heading}</h1>
                    <h1 class="top-container">${heading}</h1>
                </div>
            </div>
            <h3 class="mt-60 subHeading">${subHeading}</h3>
            <p class="text-muted">
                <span style="font-weight: 900;">CLIENT:</span> ${clientName}
            </p>
        </div>
    </div>
    <div class="row my-5" data-aos="fade-up" data-aos-duration="2000">
        <div class="col-lg-12 col-md-12 col-12 mx-auto my-auto" style="color:#000;">
            ${content}
        </div>
    </div>
    `
    this.getRecentPosts()
})

function getRecentPosts() {
    console.log(lastDocument)
    firebase.firestore().collection("case-studies").where("timestamp", "!=", lastDocument).limit(2).onSnapshot(function (snapshot) {
        document.getElementById("case-studies").innerHTML = ""
        document.getElementById("mob-case-studies").innerHTML = ""
        snapshot.forEach((element, index) => {
            console.log("recent data", element.data())
            document.getElementById("case-studies").innerHTML += `
        <figure class="effect-apollo px-auto" data-aos="fade-up" data-aos-duration="2000" style="background-image:url(${element.data().imgUrl});background-position:center;background-size:cover;">
            <figcaption>
                <h2>${element.data().heading}</h2>
                <p>${element.data().subHeading}</p>
                <a href="case-study?id=${element.id}">View more</a>
            </figcaption>			
        </figure>
        `

            document.getElementById("mob-case-studies").innerHTML += `
        <figure class="effect-apollo px-auto" data-aos="fade-up" data-aos-duration="2000" style="background-image:url(${element.data().imgUrl});background-position:center;background-size:cover;">
            <figcaption>
                <h2>${element.data().heading}</h2>
                <p>${element.data().subHeading}</p>
                <a href="case-study?id=${element.id}">View more</a>
            </figcaption>			
        </figure>
        `
        });
    })
    hideLoader()
}

function hideLoader() {
    $('#loader').fadeOut()
    // document.getElementById("loader").style.display = "none";
}