let tbody = document.getElementById("tbody")

function chiqar(data) {
    tbody.innerHTML = null;

    data.forEach((item) => {
        let tr = document.createElement("tr")
    
        tr.innerHTML = `
            <td>${item.id}</td>
            <td>${item.ism}</td>
            <td>${item.familiya}</td>
            <td><img src=${item.rasm} alt="" width="80px"></td>
            <td>${item.mahallasi}</td>
            <td>Amallar</td>
        `
    
        tbody.appendChild(tr)
    })
}

chiqar(data)

const form = document.getElementById("form")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    let imageInput = document.getElementById("file")
    console.log();

    let newPerson = {
        id: data[data.length - 1].id + 1,
        ism: document.getElementById("ism").value,
        familiya: document.getElementById("familiya").value,
        rasm: URL.createObjectURL(imageInput.files[0]),
        mahallasi: document.getElementById("mahalla").value
    }

    data.push(newPerson)

    chiqar(data)

    form.reset();
    removeAddModal()
})


let formBox = document.getElementById("form_box") 

const showAddModal = () => {
    formBox.style.display = "inline-block"
}

const removeAddModal = () => {
    formBox.style.display = "none"
}