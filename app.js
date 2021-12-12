let penumpang = []

function tambahPenumpang(nama, penumpang)
{
    if (penumpang.length == 0) {
        penumpang.push(nama)
        console.log(`${nama} masuk ke dalam bus`)
    } else {
        for (let i = 0; i < penumpang.length; i++) {
            if (penumpang[i] == undefined) {
                penumpang[i] = nama
                return penumpang
            } else if (penumpang[i] == nama) {
                console.log(`${nama} sudah ada!`);
                return penumpang
            } else if (i == penumpang.length - 1) {
                penumpang.push(nama)
                return penumpang
            }
        }
    }
    return penumpang
}

function penumpangTurun(nama, penumpang)
{
    if (penumpang.length == 0) {
        console.log("bus masih kosong");
        return penumpang
    } else {
        for (let i = 0; i < penumpang.length; i++) {
            if (penumpang[i] == nama) {
                penumpang[i] = undefined
                console.log(`${nama} turun dari bus`)
                return penumpang
            } else if (i == penumpang.length - 1) {
                console.log(`${nama} tidak ada di dalam bus`)
                return penumpang
            }
        }
    }
}





