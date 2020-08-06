/*
<tr>
    <td>1</td>
    <td>Kiss</td>
    <td>János</td>
    <td>55</td>
    <td>
        <div class="btn-group">
            <button class="btn-info btn">
                <i class="fas fa-sync-alt"></i>
            </button>
            <button class="btn btn-danger">
                <i class="fas fa-trash-alt"></i>
                </button>
        </div>
    </td>                        
</tr>
*/
let users = [
    { surname: "Berger", firstname: "Whitney", age: 82 },
    { surname: "Nagy", firstname: "Joe", age: 28 },
    { surname: "Beer", firstname: "Gizi", age: 32 },
    { surname: "Bedi", firstname: "Tey", age: 22 },
    { surname: "Kicsi", firstname: "Gey", age: 21 },
    { surname: "Buger", firstname: "Litney", age: 22 },
    { surname: "Bert", firstname: "Neney", age: 42 },
    { surname: "ToTor", firstname: "Tuacsi", age: 22 },
    { surname: "Lotter", firstname: "Lity", age: 2 },
];
let tableBody = document.querySelector("#userTable tbody");
let createTD = (html, parent) => {
    let td = document.createElement("td");
    td.innerHTML = html;
    parent.appendChild(td);    
}
let createButtonGroup = parent => {
    let group = document.createElement("div");
    group.className = "btn-group";

    let btnInfo = document.createElement("button");
    btnInfo.className = "btn-info btn"
    btnInfo.innerHTML = '<i class="fas fa-sync-alt"></i>';

    let btnDanger = document.createElement("button");
    btnDanger.className = "btn btn-danger"
    btnDanger.innerHTML = '<i class="fas fa-trash-alt"></i>';

    group.appendChild(btnInfo);
    group.appendChild(btnDanger);

    let td = document.createElement("td");
    td.appendChild(group);
    parent.appendChild(td);
}


for (let k in users) {
    let tr = document.createElement("tr");
    createTD(parseInt(k)+1, tr);
    for(let value of Object.values(users[k])) {
        createTD(value, tr);
    }
    createButtonGroup(tr);
    tableBody.appendChild(tr);
}