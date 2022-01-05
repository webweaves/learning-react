
function choice(items) {
    let min = 1;
    let max = items.length - 1;
    let rand = Math.floor(min + (Math.random() * (max-min)));
    return items[rand];
}

function remove(items, item) {

}

export { choice, remove }