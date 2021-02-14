
firebase.firestore().collection("case-studies").orderBy("priority", "asc").onSnapshot(function (snapshot) {
    document.getElementById("case-studies").innerHTML = ""
    
    snapshot.forEach((element, index) => {
        document.getElementById("case-studies").innerHTML += `
        <figure class="effect-apollo px-auto" data-aos="fade-up" data-aos-duration="2000" style="max-width:45%;min-height:450px;max-height:450px;background-image:url(${element.data().imgUrl}); background-position:center;background-size:cover">
            <figcaption>
                <h2>${element.data().heading}</h2>
                <p>${element.data().subHeading}</p>
                <a href="single-case.html?id=${element.id}">View more</a>
            </figcaption>			
        </figure>
        `
    });
})