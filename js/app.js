const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
const bandList = document.querySelector('#bands');

function getItRight (bandName) {
    return bandName.replace(/(^a |an |the )/i, '').trim();
}

const sortedBands = bands.sort((a,b) => getItRight(a) > getItRight(b) ? 1 : -1);

console.log(sortedBands);