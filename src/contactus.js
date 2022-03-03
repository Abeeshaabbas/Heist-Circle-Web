function sendEmail(){
    sendEmail.send({
        Host : "smtp.gmail.com",
        Username : "username",
        To : 'contact.heistcircle@gmail.com',
        From : "you@gmail.com",
        Subject : "Online Ticket Opened!",
        Body : "issue",
    }).then(
        message => alert(message)
    );
}