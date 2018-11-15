function myFunction() {
    var x = prompt("Введите х", 'x=');
    var n = prompt("Введите n", 'n=');
    function pow(x, n) {
        return Math.pow(x, n);

    }
    alert(pow(x, n));

}