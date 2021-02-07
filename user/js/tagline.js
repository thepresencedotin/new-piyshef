firebase.firestore().collection("tagLine").onSnapshot(function (snapshot) {
    document.getElementById("tagLine").innerHTML = ""
    snapshot.forEach(element => {
        // document.getElementById("tagLine").innerHTML = `
        //  <h1 style="font-size: 105px!important;font-family: 'Playfair Display';font-weight: 600;padding-top: 30px;">
        //      ${element.data().tagLine}
        //  </h1>
        //  `


        if (element.data().tagLine != "") {
            document.getElementById("tagLine").innerHTML = `
            <h1 class="tagLine">
                ${element.data().tagLine}
            </h1>
            `
        }
        else {
            document.getElementById("tagLine").innerHTML = `
            <h1 class="tagLine">A <span
                style="font-family:  'Playfair Display';font-weight: 800;">Brand</span> is a Feeling that People Want to Feel
                For <span style="font-family:  'Playfair Display';font-weight: 800;">Themselves</span>.
            </h1>
            `
        }

    });
})