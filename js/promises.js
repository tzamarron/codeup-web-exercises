
// const wait = num => {
//     return new Promise( (res) => {
//         setTimeout(res,num);
//     })
// };
//
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

const githubData = (user) => fetch(`https://api.github.com/users/${user}/events`,{headers: {'Authorization': githubToken}})
    //receive data from API and turn to JSON
    .then( response => {
        return response.json()
    })
    //Take JSON and take only "PushEvents" aka push to origin
    .then( (data) => {
        return data.filter(item => item.type==="PushEvent");
    })
    //Take last event(latest) and get commits array;
    .then( (data)=> {
        let latest = data[data.length -1].payload.commits;
        latest.filter(commit => commit.)
    } );


let results = githubData("tzamarron");






