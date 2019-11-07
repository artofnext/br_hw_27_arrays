let sh_list = [
    {
        name: "Meat",
        amount: 2,
        isBought: false,
    },
    {
        name: "Pasta",
        amount: 1,
        isBought: true,
    },
    {
        name: "Butter",
        amount: 8,
        isBought: false,
    },
    {
        name: "Honey",
        amount: 4,
        isBought: false,
    },
    {
        name: "Bread",
        amount: 5,
        isBought: true,
    },
];

function listGoodsNotBoughtFirst(list) {
    list.sort((a, b) => {
        if (!a.isBought && b.isBought) {
            return -1;
        };
        return 1;
    });

    for (let index in list) {

        console.log(`Item #${index}`);

        for (let key in list[index]) {
            console.log(`${key}: ${list[index][key]}`);
        }
    }
}

function newItem (name, amount = 0, isBought = false) {
    return {
        name,
        amount,
        isBought,
    }
}

// console.log(newItem("Grape", 2, true));

//list array
//item object
//
//return array
function addItem(list, item) {
    let isExist = false;
    for (let i in list) {
        if (item.name == list[i].name) {
            list[i].amount += item.amount;
            isExist = true;
            break;
        }
    }
    if (!isExist) {
        list.push(item);
    }

    return list;
}

//list array
//item string
//
//return undefined
function bought(list, name) {
    for (let i in list) {
        if (name == list[i].name) {
            list[i].isBought = true;
        }
    }
}

listGoodsNotBoughtFirst(sh_list);
console.table(addItem(sh_list, newItem("Bread", 5)));
console.table(addItem(sh_list, newItem("Rbead", 5)));
console.table(bought(sh_list, "Rbead"));
console.table(sh_list);

// listGoodsNotBoughtFirst(sh_list);