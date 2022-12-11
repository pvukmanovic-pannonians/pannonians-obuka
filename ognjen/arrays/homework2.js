const team = []

team.push(
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

//function for getting handles
const handle = (param) => {
    // console.log('param', param);
    const res = param.split('@')[0]
    return res
}

// function for generating password
const password = (param) => {
    const firstThreeAfterMonkey = param.split('@')[1].substring(0, 3)
    const getHandlevalue = handle(param)
    const position = Math.floor(getHandlevalue.length / 2)
    const before = position - 2
    const after = position + 1
    const middleThree = getHandlevalue.substring(before, after)
    const result = middleThree + firstThreeAfterMonkey
    return result
    
}
console.log('Team handle: ', handle);
const mapped = team.map(el => ({
    email: el,
    handle: handle(el),
    password: password(el)
}))

console.log('Mapped team: ', mapped);