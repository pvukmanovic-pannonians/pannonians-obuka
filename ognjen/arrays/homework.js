const arr = []

arr.push(
    'aleksandra.vukasinovic@pannonians.com',
    'jolovicjelena885@gmail.com',
    'marina.jokic@pannonians.com',
    'markogolovic78@gmail.com',
    'milana.dokic.021@gmail.com',
    'ognjen.dokic@noubis.com',
    'petar.vukmanovic@pannonians.com',
    'slobodan.ucenje@gmail.com',
    'stevanovic.jelena55@gmail.com',
    'timotijevic@outlook.com',
    'jovanovska.s.sonja@gmail.com'
)

const sorted = arr.sort()
console.log('sortirani mejlovi: ', sorted);

const noAtendees = arr.length
console.log('Number of atendees: ', noAtendees);

const findPetar = arr.includes('petar.vukmanovic@pannonians.com')
console.log('Does arr includes Petar? ', findPetar);

const milanaMail = arr.indexOf('milana.dokic.021@gmail.com')
const result = sorted.splice(milanaMail, 1)[0]
const end = sorted.push(result)
console.log('Milana pushed to the end of sorted array', sorted);