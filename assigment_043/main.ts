function show_magicians(magicians: string[]): void{
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}

const magician: string[] = ["Shaheer","Hamood","Shahmir"];
show_magicians(magician)

function make_great2(magicians: string[]): string[] {
   const greatMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
       greatMagicians.push(magicians[i] + ' the Great');
    }
    return greatMagicians;
}

const magicians3: string[] = ["Shaheer","Hamood","Shahmir"];
const greatMagicians2: string[] = make_great2(magicians3);

show_magicians(magicians3);
show_magicians(greatMagicians2);