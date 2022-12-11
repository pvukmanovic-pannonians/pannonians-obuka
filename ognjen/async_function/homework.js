function calculate (param1, param2, event) {
    let result
    if (event === 'add') {
        result = param1 + param2
    } else {
        result = param1 - param2
    }
    return result
}

const wait = (duration, answer) => {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove(answer)
        }, duration);
    })
}

async function main () {
    const addition = await wait(3000, calculate(7, 14, 'add'))
    const substract = await wait(1500, calculate(14, 5, 'blah'))
    console.log('Addition result: ', addition);
    console.log('Substratction result: ', substract);
}

main()