let age = prompt("Назовите ваш возраст");

if (age < 18) {
    alert("Вы слишком молоды для получения кредита")}

else if (age >= 18 && age <= 21) {
    let littleCache = prompt("Мы можем вам выдать максимум 50000\nВведите сумму, кратную 1000");
    let approvedLittleCache = littleCache - littleCache % 1000;
    if (littleCache <= 50000 && littleCache % 1000 === 0){
        alert(`Можем выдать ${approvedLittleCache}`)}
    else if (littleCache <= 50000 && littleCache % 1000 !== 0) {
        alert(`Вы ввели значение, не кратное 1000. Можем выдать ${approvedLittleCache}`)
        }
    else {
        alert("Извините, такую сумму мы вам не можем выдать")
        }
    }
    
else if (age >= 22 && age <= 35) {
    let mediumCache = prompt("Мы можем вам выдать максимум 400000\nВведите сумму, кратную 1000");
    let approvedMediumCache = mediumCache - mediumCache % 1000;
    if (mediumCache <= 400000 && mediumCache % 1000 === 0){
        alert(`Можем выдать ${approvedMediumCache}`)}
    else if (mediumCache <= 400000 && mediumCache % 1000 !== 0) {
        alert(`Вы ввели значение, не кратное 1000. Можем выдать ${approvedMediumCache}`)
        }
    else {
        alert("Извините, такую сумму мы вам не можем выдать")
        }
    }

else if (age >= 36 && age <= 65) {
    let bigCache = prompt("Мы можем вам выдать максимум 1000000\nВведите сумму, кратную 1000");
    let approvedBigCache = bigCache - bigCache % 1000;
    if (bigCache <= 1000000 && bigCache % 1000 === 0){
        alert(`Можем выдать ${approvedBigCache}`)}
    else if (bigCache <= 1000000 && bigCache % 1000 !== 0) {
            alert(`Вы ввели значение, не кратное 1000. Можем выдать ${approvedBigCache}`)
        }
    else {
        alert("Извините, такую сумму мы вам не можем выдать")
        }
    }

else {alert("У нас нет программы, рассчитанной для пенсионеров")}