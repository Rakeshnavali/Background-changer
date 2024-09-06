function changeBackgroundColor() {
    var backgroundColor = document.getElementById("background-color").value;
    var Button = document.getElementById("myButton");
    document.body.style.backgroundColor = backgroundColor;
    if (
        backgroundColor === 'rgb(0, 0, 0)' ||backgroundColor === 'black' ||backgroundColor === '#000000' ||backgroundColor === '#000') {
        document.body.style.color = 'white';
        Button.style.backgroundColor= 'green';
    }
}