let ch1 = [
    {
        name: "Meat",
        amount: 2,
        price: 210,
    },
    {
        name: "Pasta",
        amount: 1,
        price: 25,
    },
    {
        name: "Butter",
        amount: 8,
        price: 12,
    },
    {
        name: "Honey",
        amount: 4,
        price: 42,
    },
    {
        name: "Bread",
        amount: 5,
        price: 2.55,
    },
];

function printCheque(ch) {
    let total = 0;
    let cost = 0;
    for (let index in ch) {

        console.log('--------------------');
        console.log(`Item #${index}`);
        
        for (let key in ch[index]) {
            console.log(`${key}: ${ch[index][key]}`);
        }
        
        cost = ch[index].amount * ch[index].price;
        total += cost;
        console.log(`Cost: ${cost}`);
    }
    
    console.log('====================');
    console.log(`TOTAL: ${total}`);
    console.log('====================');
    console.log('Thank you!');
}

// console.log();

function expensive(ch) {
    let max = 0;
    let maxI = 0;
    for (let index in ch) {
        if (ch[index].price * ch[index].amount > max) {
            max = ch[index].price * ch[index].amount;
            maxI = index;
        }
    }

    console.log(`The most Expencive is ${ch[maxI].name} for ${max}`)
}

function average(ch) {
    let sum = 0;
    for (let index in ch) {
        
        sum += ch[index].price * ch[index].amount;
        //  console.log(sum);
    }
    // console.log(ch.length);
    console.log(`The average cost is ${sum / (ch.length)}`);
}


printCheque(ch1);

expensive(ch1);

average(ch1);