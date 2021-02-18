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
console.log("id", id)
var lastDocument = ""
firebase.firestore().collection("journals").doc(id).get().then(function (doc) {
    console.log(doc)
    console.log(doc.data())
    lastDocument = doc.data().timestamp
    var heading = doc.data().authorName
    var subHeading = doc.data().title
    var imgUrl = doc.data().imgUrl
    var timestamp = doc.data().timestamp
    var content = doc.data().content

    document.getElementById("journal-content").innerHTML = `
    <div class="row" style="margin-top: 100px;" data-aos="fade-up" data-aos-duration="2000">
        <div class="col-lg-12 col-md-12 col-12 mx-auto text-center">
            <div class="row">
                <div class="col-md-6 mx-auto text-left">
                    <h1 class="bottom-container">${heading}</h1>
                    <h1 class="top-container">${heading}</h1>
                </div>
            </div>
            <h3 class="mt-60 subHeading">${subHeading}</h3>
        </div>
    </div>
    <div class="row my-5" data-aos="fade-up" data-aos-duration="2000">
        <div class="col-lg-12 col-md-12 col-12 mx-auto my-auto font-pt-serif-400" style="color:#000;">
            ${content}
        </div>
    </div>
    `
    this.getRecentPosts()
})

function getRecentPosts() {
    console.log(lastDocument)
    firebase.firestore().collection("journals").where("timestamp", "!=", lastDocument).limit(2).onSnapshot(function (snapshot) {
        document.getElementById("related-journal").innerHTML = ""
        snapshot.forEach((element, index) => {
            console.log("recent data", element.data())
            document.getElementById("related-journal").innerHTML += `
        <figure class="effect-sadie" data-aos="fade-up" data-aos-duration="2000" style="max-width:45%;min-height:450px;max-height:450px;background-image:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${element.data().imgUrl});background-size:cover;background-position:center" onclick="goToSingleJournal('${element.id}')">
                <figcaption>
                    <h2 class=""><span>${element.data().title}</span></h2>
                    <p>${element.data().authorName}</p>
                </figcaption>			
            </figure>
        `
        });
    })
}

function goToSingleJournal(id) {
    window.location.href = "single-journal.html?id=" + id
}