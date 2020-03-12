
// const wait = num => {
//     return new Promise( (res) => {
//         setTimeout(res,num);
//     })
// };
//
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

const githubData = (user) => fetch(`https://api.github.com/users/${user}/events`,{headers: {'Authorization': githubToken}})
    // Receive data from API and turn to JSON
    .then( response => {
        return response.json();
    })
    // Take JSON and take only "PushEvents" aka push to origin
    .then( data => {
        let pushEvents = data.filter(item => item.type==="PushEvent");
        // Take first event(latest) and get commits array;
        let latestCommits = pushEvents[0].payload.commits;
        // Take first array which is newest and get url to data
        let latest = latestCommits[latestCommits.length-1].url;
        //use url of commit to fetch commit data
        return fetch(latest);
    })
    // Take data and turn to JSON
    .then(response => {
        return response.json()
    })
    // Use JSON data to get information
    .then( (data) => {
        //get date from data
        let dateData = data.commit.committer.date;
        //convert to date and add to HTML latest commit
        $("#latestCommit").html("<p>Your latest commit was : </p>" + new Date(dateData));
    })
    // If any errors or fails add to HTML error message
    .catch( error => $("#latestCommit").html("<p> Something went wrong. Check the username and try again!</p>"));

// On button click take input data and use as username
$("#usernameBtn").click(function(){
    let username = $("#username").val();
    githubData(username);
    // Rest input
    $("#username").val("");
});






