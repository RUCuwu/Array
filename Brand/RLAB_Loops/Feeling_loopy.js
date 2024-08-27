let csvData = "ID, Name, Occupation, Age\n42, Bruce, Knight, 41\n57, Bob, Fry Cook, 19\n63, Blaine, Wuix Master, 58\n98, Bill, Doctor's Assistant, 26";
let row = [];
let cell = '';

for (let char of csvData) {
    if (char === ',') {
        row.push(cell);
        cell = '';
    } else if (char === '\n') {
        row.push(cell);
        console.log(row.join(' '));
        row = [];
        cell = '';
    } else {
        cell += char;
    }
}

if (cell) row.push(cell);
if (row.length) console.log(row.join(' '));