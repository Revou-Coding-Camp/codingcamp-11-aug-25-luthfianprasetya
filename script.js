let nama = prompt("Masukkan nama Anda:");
    document.getElementById("nama").innerText = nama;
    
document.getElementById("messageForm").addEventListener("submit", function(event){
    event.preventDefault(); 

    
    let nama = document.getElementById("nama").value;
    let tanggalLahir = document.getElementById("tanggalLahir").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let pesan = document.getElementById("pesan").value;


    let currentTime = new Date();
    
    document.getElementById("output").innerHTML = `
        <p><strong>Current time :</strong> ${currentTime}</p>
        <p><strong>Nama :</strong> ${nama}</p>
        <p><strong>Tanggal Lahir :</strong> ${tanggalLahir}</p>
        <p><strong>Jenis Kelamin :</strong> ${gender}</p>
        <p><strong>Pesan :</strong> ${pesan}</p>
    `;
});
