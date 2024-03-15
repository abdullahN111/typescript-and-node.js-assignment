function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician_1 = magicians_1[_i];
        console.log(magician_1.charAt(0).toUpperCase() + magician_1.slice(1));
    }
}
var magician = ["Shaheer", "Hamood", "Shahmir"];
show_magicians(magician);
function make_great2(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + ' the Great');
    }
    return greatMagicians;
}
var magicians3 = ["Shaheer", "Hamood", "Shahmir"];
var greatMagicians2 = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatMagicians2);
