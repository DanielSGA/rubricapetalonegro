let calButton = document.getElementById("btn_cal");
let cleanButton = document.getElementById("btn_clean");
let resDiv = document.getElementById("res");

calButton.addEventListener("click", function() {

    //resDiv.hidden = false;
    let val1 = document.getElementsByName("r1")
    let valor1 = calculate(val1) * 2
    let val2 = document.getElementsByName("r2")
    let valor2 = calculate(val2) * 2
    let val3 = document.getElementsByName("r3")
    let valor3 = calculate(val3) * 2
    let val4 = document.getElementsByName("r4")
    let valor4 = calculate(val4) * 2
    let val5 = document.getElementsByName("r5")
    let valor5 = calculate(val5) * 2
    let val6 = document.getElementsByName("r6")
    let valor6 = calculate(val6) * 2
    let val7 = document.getElementsByName("r7")
    let valor7 = calculate(val7) * 2
    let val8 = document.getElementsByName("r8")
    let valor8 = calculate(val8) * 2
    let val9 = document.getElementsByName("r9")
    let valor9 = calculate(val9) * 2
    let val10 = document.getElementsByName("r10")
    let valor10 = calculate(val10) * 2

    let valorTotal = valor1 + valor2 + valor3 + valor4 + valor5 + valor6 + valor7 + valor8 + valor9 + valor10

    resDiv.hidden = false
    display(valorTotal)

});

cleanButton.addEventListener("click", function() {
    window.location.reload();
});

function calculate(val) {
    
    var valor = 0

    for(let iX = 0; iX < val.length; iX++)
    {
        if(val[iX].checked)
        {
            valor = parseInt(val[iX].value)
        }
    }

    return valor
}

function display(valorTotal) {

    let new_html = "";

    new_html +=
    `<h2 class="resban">El resultado para la idea es</h2>
    <h2 class="numA">${valorTotal}</h2>
    `
    $("#res").html(new_html)

}