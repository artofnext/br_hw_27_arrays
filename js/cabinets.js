
// Initial params
let faculties = ["Math","Physics","Data Science","SEO"];
let capacityLimits = [10,20];

function newObj (name, faculty, capacity) {
    return {
        name,
        faculty,
        capacity,
    }
};

//Generates array with random objects
function generate (type ,num) {
    let result = [];
    let faculty = "";
    let amount = 0;
    for (let index = 0; index < num; index++) {

        faculty = faculties[Math.round(Math.random() * (faculties.length - 1))];
        amount = Math.round(Math.random() * (capacityLimits[1] - capacityLimits[0]) + capacityLimits[0]);

        result.push(
            newObj(type + index, faculty, amount)
        );
    }

    return result;
}

// console.table(generate("Cabinet",10));
// console.table(generate("Group",10));

function listOfCabinets (cabs) {
    console.log(`Avaliable cabinets:`)
    let sum = 0;
    for (let i in cabs) {
        console.log(`Cabinet: ${cabs[i].name} -- Faculty: ${cabs[i].faculty} -- Sits: ${cabs[i].capacity}`);
        sum += cabs[i].capacity;
    }
    console.log(`Total Cabinets: ${cabs.length}`);
    console.log(`Total Sits: ${sum}`);
    console.log("--------------------");
}

function listCabForFaculty(cabs, fac) {
    let filteredCabs = cabs.filter(cab => cab.faculty == fac);
    if (filteredCabs.length > 0) {
        console.log(`Faculty ${fac}`)
        listOfCabinets(filteredCabs);
    } else {
        console.log(`There are no cabinets for ${fac}!`);
        console.log("--------------------");
        
    }
}

//cabs array
//group object
function listCabForGroup(cabs, group) {
    let filteredCabs = cabs.filter(cab => (cab.faculty == group.faculty && cab.capacity >= group.capacity));
    if (filteredCabs.length > 0) {
        console.log(`Cabinets for group ${group.name} (Faculty: ${group.faculty}, Students: ${group.capacity})`)
        listOfCabinets(filteredCabs);
    } else {
        console.log(`There are no suitable cabinets for group ${group.name}!`);
        console.log("--------------------");
    }
}

function sortByCapacity(cabs) {
    //ToDo
}

//Generate 
let cabinets = generate("Cabinet",10);
let groups = generate("Group",1);

listOfCabinets(cabinets);

listCabForFaculty(cabinets, 'Math');
listCabForFaculty(cabinets, 'SO');
listCabForGroup(cabinets, groups[0]);
