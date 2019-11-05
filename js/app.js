function addTable() {
    const tablesSelector = document.querySelector('.tabs');
    let tableRows = [],
        tableCells = [],
        tabs = [],
        newTab = document.createElement('div');

        newTab.className = "table";

    for (let y = 0; y < 8; y++) {
        tableCells.push('<div><input type="text" class="tabInput"></input></div>');
    }

    for (let rows = 0; rows < 6; rows++) {
        tableRows.push('<div class="rows">'+tableCells.join("")+'</div class="rows">')
    }

    tabs.push(tableRows.join(""));
    newTab.innerHTML += tabs;
    tablesSelector.appendChild(newTab);
    addToInputs()
}

function addToInputs() {
    let tabInputs = document.querySelectorAll('.tabInput');
    tabInputs.forEach((el)=> {
        el.addEventListener('change', addClassOnChange)
    })
}

function removeTab() {
    const lastTab = document.querySelector('.tabs');
    lastTab.removeChild(lastTab.lastChild)
}

function addClassOnChange(e) {
    if (e.target.value) {
        e.target.classList.add("filled")
    } else {
        e.target.classList.remove("filled")
    }
}

function callPrint() {
    window.print();
}

function myScrollFunc() {
    const myID = document.getElementById("buttons-container");
    let y = window.scrollY;
    if (y >= 200) {
        myID.className = "show"
    } else {
        myID.className = "hide"
    }
}

function init() {
    for (let i = 0; i <18; i++) {
        addTable()
    }
    window.addEventListener("scroll", myScrollFunc);
}

init();
