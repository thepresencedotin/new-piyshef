$('.enableOnInput').attr('disabled', 'disabled');

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase())
}

function isDiable() {
    let data  = document.getElementById("subscribe").value
    if(data && validateEmail(data)) {
        $('.enableOnInput').removeAttr('disabled');
    }
    else
    {
        $('.enableOnInput').attr('disabled', 'disabled');
    }
}


function onSubscribe() {
    var email = document.getElementById("subscribe").value
    window.open(`https://wa.me/919079712669?text=Hi%20this%20email%20"${email}"%20visited%20in%20our%20website%20and%20they%20have%20some%20queries%20,%20Please%20Respond`, '_blank');
}