let data = [
    {
        id: 1,
        ism: "Alibek",
        familiya: "Asadov",
        rasm: "https://static.vecteezy.com/system/resources/previews/024/183/525/non_2x/avatar-of-a-man-portrait-of-a-young-guy-illustration-of-male-character-in-modern-color-style-vector.jpg",
        mahallasi: "O'zanon MFY"
    },
    {
        id: 2,
        ism: "Sardor",
        familiya: "Qodirov",
        rasm: "https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png",
        mahallasi: "Guliston MFY"
    }
]

let cards = document.getElementById("cards")

function chiqar(data) {
    cards.innerHTML = null

    data.forEach((item) => {
        const li = document.createElement("li")
        li.className = "card"

        li.innerHTML = `
            <img class="card-image" src=${item.rasm} alt="avatar">
            <h2 class="card-name">${item.ism} ${item.familiya}</h2>
            <p class="card-vil">${item.mahallasi}</p>
        `

        cards.appendChild(li)
    })
}

chiqar(data)

const form = document.getElementById("form")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    let newPerson = {
        id: data[data.length - 1].id + 1,
        ism: document.getElementById("ism").value,
        familiya: document.getElementById("familiya").value,
        rasm: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHfd3PPulVSp4ZbuBFNkePoUR_fLJQe474Ag&s",
        mahallasi: document.getElementById("mahalla").value
    }

    data.push(newPerson)

    chiqar(data)

    document.getElementById("ism").value = null
    document.getElementById("familiya").value = null
    document.getElementById("mahalla").value = null
})