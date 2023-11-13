  
// 6. Declare an array variable named itCompanies
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// 7. Print the array using console.log()
console.log(itCompanies);

// 8. Print the number of companies in the array
console.log(itCompanies.length);

// 9. Print the first company, middle company, and last company
console.log(`First company: ${itCompanies[0]}`);
console.log(`Middle company: ${itCompanies[Math.floor(itCompanies.length / 2)]}`);
console.log(`Last company: ${itCompanies[itCompanies.length - 1]}`);

// 10. Print out each company
itCompanies.forEach(company => {
    console.log(company);
});

// 11. Change each company name to uppercase one by one and print them out
itCompanies.forEach(company => {
    console.log(company.toUpperCase());
});

// 12. Print the array like a sentence
console.log(`Companies: ${itCompanies.join(', ')} are big IT companies.`);

// 13. Check if a certain company exists in the itCompanies array
let companyToCheck = 'Microsoft';
let companyExists = itCompanies.includes(companyToCheck);
console.log(companyExists ? `${companyToCheck} exists in the array.` : `${companyToCheck} is not found.`);

// 14. Filter out companies with more than one 'o'
let filteredCompanies = itCompanies.filter(company => company.split('o').length - 1 <= 1);
console.log('Companies with one or fewer "o":', filteredCompanies);

// 15. Sort the array using the sort() method
itCompanies.sort();
console.log('Sorted array:', itCompanies);

// 16. Reverse the array using the reverse() method
itCompanies.reverse();
console.log('Reversed array:', itCompanies);
