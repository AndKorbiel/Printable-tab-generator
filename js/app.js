const tablesSelector = document.querySelector('.tabs');

const addTable = () => {
    let tableRows = [],
        tableCells = [],
        tabs = [],
        newTab = document.createElement('table');

    for (let y = 0; y < 8; y++) {
        tableCells.push('<td><input type="text" class="tabInput"></input></td>');
    }

    for (let rows = 0; rows < 6; rows++) {
        tableRows.push('<tr>'+tableCells.join("")+'</tr>')
    }

    tabs.push(tableRows.join(""));
    newTab.innerHTML += tabs;
    tablesSelector.appendChild(newTab)
    addToInputs()
};

function addToInputs() {
    let tabInputs = document.querySelectorAll('.tabInput');
    tabInputs.forEach((el)=> {
        el.addEventListener('change', addClassOnChange)
    })
}

const addClassOnChange = (e) => {
    if (e.target.value) {
        e.target.classList.add("filled")
    } else {
        e.target.classList.remove("filled")
    }
};

