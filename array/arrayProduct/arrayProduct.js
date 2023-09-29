let arr = [];

function Save() {
    let arraySave = {
        nameCus: document.getElementById("nameCus").value,
        idPro: document.getElementById("idPro").value,
        namePro: document.getElementById("namePro").value,
        quantity: document.getElementById("quantity").value,
        price: document.getElementById("price").value
    };

    console.log(arr);
    arr.push(arraySave);
}

function Show() {
    let html = '';
    for (let i of arr) {
        let tong = i.price * i.quantity;
        html += `
            <tr>
                <th scope="row">${arr.indexOf(i)}</th>
                <td>${i.nameCus}</td>
                <td>${i.idPro}</td>
                <td>${i.namePro}</td>
                <td>${i.quantity}</td>
                <td>${i.price}</td>
                <td>${tong}</td>
            </tr>`;
    }

    console.log(arr);
    document.getElementById('tbody').innerHTML = html;
}

function Reset() {
    document.getElementById("nameCus").value = '';
    document.getElementById("idPro").value = '';
    document.getElementById("namePro").value = '';
    document.getElementById("quantity").value = '';
    document.getElementById("price").value = '';
}
