// $('#loading-modal').modal('show');
document.getElementById("contactForm").addEventListener("submit",(e)=>{
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var message = document.getElementById("message").value
    e.preventDefault()
    let data = {
        name: name,
        email: email,
        message: message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    }
    add(data)
    contactForm.reset()
})

function add(data){
    firebase.firestore().collection("contact").add(data).then(res=>{
        swal("Sent!", "We Will Contact Soon!", "success");
        // $('#loading-modal').modal('hide');    
    })
}