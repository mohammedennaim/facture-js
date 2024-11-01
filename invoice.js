function updateItemTotal() {
    for (let i = 0; i < document.getElementsByTagName('tbody').length; i++) {
        document.getElementsByClassName('itemTotal')[i].innerHTML = document.getElementsByClassName(".quantity")[i] * document.getElementsByClassName(".unitPrice")[i];
    }
}

function updateInvoiceTotal() {
    for (let i = 0; i < document.getElementsByTagName('tbody').length; i++) {
        invoiceTotal.innerHTML +=document.getElementsByClassName('itemTotal')[i].textContent
    }
}
console.log(invoiceTotal.innerHTML)