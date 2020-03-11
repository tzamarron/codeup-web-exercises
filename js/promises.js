
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
        //take first array which is newest and get url to data
        let latest = data[0].payload.commits[0].url;
        //use url to fetch commit data
        fetch(latest).then(response => {
            return response.json()
        })
            .then( (data) =>{
                //get date from data
                let dateData = data.commit.committer.date;
                //convert to date
                console.log(new Date(dateData));
            })
    } );


githubData(prompt("Username"));






