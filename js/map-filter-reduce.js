
"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
users.filter(person => person.languages.length >= 3);

//     Use .map to create an array of strings where each element is a user's email address
users.map(person => person.email);

// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
users.reduce((total,person) => {return total += person.yearsOfExperience},0);

//     Use .reduce to get the longest email from the list of users.
const emailLongest = users.reduce((emaillength, person) => {
    emaillength[person.name] = person.email.length;
    return emaillength;
},{});

//     Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
users.reduce((instructors, person) => {return instructors += (`${person.name}, `)},"Your instructors area: ");

// Bonus
// Use .reduce to get the unique list of languages from the list of users.

// function skills() {
//     let skill = [];
//     let languages = users.map(person => person.languages);
//     for(let special of languages){
//         for (let unique of special){
//             if (skill.indexOf(unique) === -1){
//                 skill.push(unique)
//             }
//         }
//     }
//     return skill
// }

//take each person look at language set
//take language set and compare each skill to a master set
// if not in master set put it in else move on.

