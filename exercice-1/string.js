// ucﬁrst
//  1ère lettre en MAJ hello world => Hello world

function ucfirst(str) {
    if (typeof str !== "string" || str == null)
        return str;
    else
        return (str[0].toUpperCase() + str.substring(1));
}

// console.log(ucfirst());
// console.log(ucfirst("34"));
// console.log(ucfirst(34));
// console.log(ucfirst("helle worl"));

// capitalize
// 1 ère lettre de chaque mot en MAJ hello world => Hello World

function capitalize(str) {
    if (typeof str !== "string" || str == null)
        return '';
    else {
        let array = str.split(' ');
        array.forEach((element, i) => array[i] = ucfirst(element));
        return array.join(' ');
    }
}

// console.log(capitalize("2"));
// console.log(capitalize("helle worl"));
// console.log(capitalize("haya mottal"));

// camelCase Capitalize + coller les mots hello world => HelloWorld

function camelCase(str) {
    let i = capitalize(str).replace(' ', '');
    return i;
}

// console.log(camelCase("2"));
// console.log(camelCase("helle worl"));
// console.log(camelCase("haya mottal"));

// snake_case Joindre les mots par des underscores en minuscule
function snakeCase(str) {
    let i = str.toLowerCase().replace(' ', '_');
    return i;
}

// console.log(snakeCase("2"));
// console.log(snakeCase("helle worl"));
// console.log(snakeCase("haya mottal"));

// Cryptage (uniquement les voyelles) anaconda => 4n4c0nd4 A=>4, E=>3, I=>1, O=>0 ,U=> (_), Y=>7

function leet(str) {
    if (typeof str !== "string" || !str)
        return '';
    else {
        return str.replace(/[aeiouy]/ig, function(i) {
            switch (i) {
                case "A":
                case "a":
                    return 4;
                case "E":
                case "e":
                    return 3;
                case 'i':
                case 'I':
                    return 1;
                case 'o':
                case 'O':
                    return 0;
                case 'u':
                case 'U':
                    return '_';
                case "y":
                case "Y":
                    return 7;
            }
        })
    }
}

// console.log(leet("2"));
// console.log(leet("ceci est un test"));
// console.log(leet("haya mottal"));
// console.log(leet("hAya mottAl"));

// verlan Inverser chaque mot d’une phrase Hello world => olleH dlrow
function verlan(str) {
    if (typeof str !== "string" || !str)
        return '';
    return str.split(" ").map(function(word) {
        return word.split("").reverse().join('');
    }).join(" ");
}

console.log(verlan('hello world'));