const body = document.querySelector("body");
// const rode = document.querySelector("#rode");

let i = -1;

const commands = []

function checkValue (value,field) {
    separated = value.split(" ")

    const newTextField = document.createElement("p")
    if (separated[1] == "ls") {
        newTextField.textContent = "Home   Desktop   Download ";
        body.appendChild(newTextField)
    }


    // field.appendChild(newTextField)

}

// class Inputs {
//     constructor(){}

function createInputs() {
        // a = i++
        i++
        const ek = document.querySelectorAll("input")[i]
        ek.setAttribute("readonly","")
        const input = document.createElement("input")
        input.setAttribute("type", "text")
        input.value = `Desktop@: `
        // input.setAttribute("readonly","")
        // input.setAttribute("data-id",`${a}`)
        checkValue(ek.value, input)
        body.appendChild(input)
        input.focus()
}


// const ao = new Inputs()

body.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        createInputs()
    }
})

window.addEventListener("DOMContentLoaded", () => {
    createInputs()
})

