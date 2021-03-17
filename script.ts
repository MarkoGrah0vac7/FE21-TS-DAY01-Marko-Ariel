// Day 1 | Classwork | Basic
// Basic ex 1

// Make a multiplication table using TypeScript loops from an array with number values 1 to 10 and the result should look like this:

// 1 X 1 = 1

// 2 X 1 = 2

// 3 X 1 = 3

// …

// for(let i=1; i<=10;i++){
//     // console.log(i+ "X" +1 + "\n");
//     console.log(`${i} X 1 = ${i}`);
    
// }


// 1 X 2 = 2

// 2 X 2 = 4

// …

// 9 X 10 = 10

// 10 X 10 = 100
function tableCreate() {
var table1;
table1 = "<table border='1'>";
//for rows
for(let i=1; i<=10;i++){
    table1 = table1 + "<tr>";
    //create columns
    for(let j =1; j<=10; j++) {
        table1 = table1 + "<td>" + i * j + "</td>";
    }
    table1 = table1 + "</tr>";
}

table1 = table1 + "</table>";
document.write(table1);
}
tableCreate();
 
