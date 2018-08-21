function countProfit(shoppers) {
    let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweater Uniklooh', 175000, 1],
                     ];
    
    // IF shoppersnya kosong
    if (shoppers.length === 0) {
        return shoppers;
    } 
    else {
        var result = [];
        for (var i=0; i<listBarang.length; i++) {
    
    
            // TAMBAH 3 OBJECT BARU:
            var barang = {
                product: listBarang[i][0],
                shoppers: [],
                leftOver: listBarang[i][2],
                totalProfit: 0
            }
            result.push(barang);
    
            // hitung STOCK sisa yang BARANGNYA DIBELI AJA:
            var stock = listBarang[i][2];
            // console.log(stock); --> 10, 2, 1
            for (var j=0; j<shoppers.length; j++) {
                // console.log(shoppers[j].name);
                if (shoppers[j].product === listBarang[i][0]) {
                    // console.log(shoppers[j].product, shoppers[j].amount);
                    var purchase = shoppers[j].amount;
                    stock -= purchase;
                    // console.log(stock); 
                    
                    // IF STOCK NYA ADA! >= 0
                    if (stock >= 0) {
                        // Hitung LEFTOVER:
                        result[i].leftOver = stock;
    
                        // Hitung TOTALPROFIT:
                        var productSold = listBarang[i][2];
                        result[i].totalProfit = (productSold - stock) * listBarang[i][1];
    
                        // Hitung SHOPPERS:
                        result[i].shoppers.push(shoppers[j].name);
                    }
                }
            }
        }
        return result;
    }
}


console.log(countProfit([
    {name: 'Windi', product: 'Sepatu Stacattu', amount: 7}, 
    {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, 
    {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));

console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));

console.log(countProfit([])); //[]

/*
bikin algoritmanyaa!!
*/