function reverseInPlace(array) {
    let print = "";
    for (let i = array.length - 1; i >= 0; i--) {
        print += array[i] + " ";
    }

    console.log(print);
}
reverseInPlace(['a', 'b', 'c', 'd', 'e']);
//reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop']);
//reverseInPlace(['33', '123', '0', 'dd']);
