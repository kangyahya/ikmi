const operasi = (param)=>
{
    let hasil = 0.0;
    let bil1 = parseFloat(document.fform.bilangan1.value);
    if (isNaN (bil1))
        bil1=0.0;
    let bil2 = parseFloat(document.fform.bilangan2.value);
    if (isNaN (bil2))
        bil2=0.0;
    if (param=='tambah') {
        hasil = bil1 + bil2;
    } else if(param=='kurang'){
        hasil = bil1 - bil2;
    } else if(param=='kali'){
        hasil = bil1 * bil2;
    } else if(param=='bagi'){
        hasil = bil1 / bil2;
    } else {
        hasil = 0.0;
        alert("Invalid");
    }
    document.getElementById('hasil').value = hasil;
}