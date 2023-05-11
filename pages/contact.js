function sendEmail(){
    var clientEmail = document.getElementById('fmail').value;
    var subject = document.querySelector('#fasunto').value;
    var body = document.querySelector('#fmsg').value;
    console.log(clientEmail);
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "iroldan.br@gmail.com",
        Password : "0FD95C3F7AEFD1F8C6D5653BDDAE1506C5FA",
        To : (clientEmail),
        From : "iroldan.br@gmail.com",
        Subject : (subject),
        Body : (body),
    }).then(
      message => alert(message)
    );
}