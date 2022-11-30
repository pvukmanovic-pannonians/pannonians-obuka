//console.log ('sdasdas')

function wait(duration) {
    return new Promise ((resolve, reject) =>{
        setTimeout(() => {
           resolve('nesto');     
        }, duration);
    })
}


async function main()  {
    try{
        const odgovor = await wait(1000);
        console.log('sdadsda', odgovor);

    } catch (error) {
        console.log('1231312312312', error)
    }
 }