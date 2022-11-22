const wait = (duration, odgovor) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(odgovor);
          //reject("GreSkA!");
        }, duration);
    });
};

const wait2 = (duration, odgovor2) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(odgovor2);
          //reject("GreSkA!");
        }, duration);
    });
};

const addition = (a, b) => {
    return a + b;
};

const substraction = (a, b) => {
    return a - b;
};

async function main() {
    const add = addition(3, 5);
    const sub = substraction(3, 5);

    const [f1, f2] = await Promise.all([add, sub]);

    console.log("The results of the additions and substractions two number in the same time: ", f1, "i", f2, ".");
};

main();

