let palString = 'довод';
if (palString.toString().split("").reverse().join("") == palString.toString()) {
    console.log(`Слово ${palString} является палиндромом`)
} else {
    console.log(`Слово ${palString} не является палиндромом`)
}