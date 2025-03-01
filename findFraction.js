let number = 2721;

function getFraction (num) {
    // untuk kelipatan uang dan berapa kali yg harus diambil di tiap kelipatan
    let storeFractionValue = [];

    let sisaribuan = num;
    let kelipatanseribu = 0;

    while (num >= 1000) {
        sisaribuan = sisaribuan - 1000;

        if (sisaribuan < 0) break;
        kelipatanseribu += 1000;
    }

    // cari jumlah kelipatan seribu
    let qty = kelipatanseribu / 1000;
    storeFractionValue.push({fraction: 1000, qty});

    let sisalimaratus = num - kelipatanseribu;
    let kelipatanlimaratus = 0;
    while (num >= 500) {
        sisalimaratus = sisalimaratus - 500;

        if (sisalimaratus < 0) break;
        kelipatanlimaratus += 500;
    }

    // cari jumlah kelipatan seribu
    qty = kelipatanlimaratus / 500;
    storeFractionValue.push({fraction: 500, qty});

    console.log(storeFractionValue);
} 

getFraction(2721);