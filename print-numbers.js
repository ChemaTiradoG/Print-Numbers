const numbers = () => {
    // solution here
    for (let number = 1; number <= 100; number++) {
        let output = `${number}`;
        if (!(number % 5)) {
            output+= ' fuzz';
        }
        if (!(number % 2)) {
            output+= ' buzz';
        }
        console.log(output + '\n');
    }
    return '';
 }
 
 console.log(numbers());