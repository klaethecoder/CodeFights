//This function creates a * border on the top, bottom and around words in the array given.

function addBorder(picture) {
    picture = picture.map(element => `*${element}*`);
    let length = picture[0].length;
    picture.push("*".repeat(length));
    picture.unshift("*".repeat(length));
    return picture;
}

