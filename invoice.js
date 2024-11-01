function updateItemTotal() {
    for (let i = 0; i < document.getElementsByTagName('tbody').length; i++) {
        document.getElementsByClassName('itemTotal')[i].innerHTML = document.getElementsByClassName("quantity")[i].value * document.getElementsByClassName("unitPrice")[i].value;
    }
}

function updateInvoiceTotal() {
    for (let i = 0; i < document.getElementsByTagName('tbody').length; i++) {
        invoiceTotal.innerHTML +=document.getElementsByClassName('itemTotal')[i].textContent
    }
}
console.log(invoiceTotal.innerHTML)