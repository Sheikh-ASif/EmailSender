emailjs.init("Bf-R8ei9k9KeEbXQe");

const sendBtn = document.querySelector('.send-btn');
const result = document.querySelector('.result');

sendBtn.addEventListener('click', sendEmail);

function sendEmail(){
    const to = document.getElementById("to").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    emailjs.send("service_eor885k", "template_fjyjfqt", {

        to_email:to,
        subject:subject,
        message:message
    }).then(function() {
        result.innerHTML = "Email sent successfully!";
        result.style.opacity = 1;
    },function(error){
        result.innerHTML = "Email sending failed!";
        result.style.opacity = 1;
        console.log(error);
    });
}