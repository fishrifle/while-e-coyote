function numberDoubler(num) {
    while (num <= 100) {
        num *= 2
    }
    return num
}

function stringRepeater(str) {
    let rep = ""
    while (rep.length < 10) {
    rep += str;
    }
return rep
}

function makeDivisible(x, y) {
    while (x % y != 0) {
        x++
    }
return x
}


module.exports = {
    numberDoubler,
    stringRepeater,
    makeDivisible
};