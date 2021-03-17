/* Database Connection */
firebase.firestore().collection("journals").orderBy("priority", "asc").onSnapshot(function (snapshot) {
    document.getElementById("journal").innerHTML = ""
    snapshot.forEach(element => {
        document.getElementById("journal").innerHTML += `
            <figure class="effect-sadie" data-aos="fade-up" data-aos-duration="2000" style="background-image:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${element.data().imgUrl});background-size:cover;background-position:center" onclick="goToSingleJournal('${element.id}')">
                <figcaption>
                    <h2 class=""><span>${element.data().title}</span></h2>
                    <p>${element.data().authorName}</p>
                </figcaption>			
            </figure>
                `
        hideLoader()
    });

    // snapshot.forEach(element => {
    //     document.getElementById("journal").innerHTML += `
    //         <figure class="effect-sadie" data-aos="fade-up" data-aos-duration="2000" style="max-width:45%;min-height:450px;max-height:450px;background-image:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${element.data().imgUrl});background-size:cover;background-position:center"
    //             data-toggle="modal" data-target="#exampleModal" onclick="getSingleJournal('${element.id}')">
    //             <figcaption>
    //             <h2 class=""><span>${element.data().title}</span></h2>
    //             <p>${element.data().authorName}</p>
    //             </figcaption>			
    //             </figure>
    //             `
    // });
})

// function getSingleJournal(id) {
//     firebase.firestore().collection("journals").doc(id).get().then(function (doc) {
//         let title = doc.data().title
//         let authorName = doc.data().authorName
//         let imgUrl = doc.data().imgUrl
//         let timestamp = doc.data().timestamp
//         // let date = new Date(timestamp*1000);
//         let content = doc.data().content
//         document.getElementById("journalData").innerHTML = ""

//         document.getElementById("journalData").innerHTML = `
//         <h1 class="journal-title card border-0">${title}</h1>
//         <div class="row">
//             <div class="col-md-4 mb-3">
//                 <span> ${moment(timestamp.toDate()).format("DD-MM-YYYY")} </span> <br>
//                 <span>by</span> <span class="journal_meta-author font-pt-serif-400">${authorName}</span>
//             </div>

//             <div class="col-md-8">
//                 <img src="${imgUrl}"
//                     width="100%" alt="">
//                     <br><br>
//                 <span class="font-pt-serif-400 card border-0">${content}</span>
//             </div>
//         </div>
//         `
//     })
// }

function goToSingleJournal(id) {
    window.location.href = "single-journal.html?id=" + id
}

function hideLoader() {
    document.getElementById("loader").style.display = "none";
}