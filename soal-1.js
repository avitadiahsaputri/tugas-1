const identitas = {
    nama: "Avita",
    nim : 02042111010,
    email: "avitadiah88@gmail.com"
}

let {nama,nim,email} = identitas

console.log(nama,nim,email);

let sahabat = ["krise","mulyani"]
let sahabat2 = ["maypa","amel"]
let sahabat3 = ["kharisma","aliya"]

let newSahabat = [...sahabat,...sahabat2,...sahabat3]
 console.log(newSahabat);
