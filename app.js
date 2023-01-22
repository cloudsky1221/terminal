const body = document.querySelector("body");

let i = -1;

const commands = []

function checkValue (value,field) {
    separated = value.split(" ")

    const newTextField = document.createElement("p")
    if (separated[1] == "ls") {
        newTextField.textContent = "Home   Desktop   Download ";
        body.appendChild(newTextField)
    } else if (separated[1] == "help") {
            newTextField.innerHTML = `ls - for list directories and files <br /> touch - to create new file`
            body.appendChild(newTextField)        
    } else {
        newTextField.textContent = "type help to see list of commands";
        body.appendChild(newTextField) 
    }

}

function createInputs() {
        i++
        const ek = document.querySelectorAll("input")[i]
        ek.setAttribute("readonly","")
        const input = document.createElement("input")
        input.setAttribute("type", "text")
        input.value = `Desktop@: `
        // input.setAttribute("data-id",`${a}`)
        checkValue(ek.value, input)
        body.appendChild(input)
        input.focus()
}

body.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        createInputs()
    }
})

window.addEventListener("DOMContentLoaded", () => {
    createInputs()
})