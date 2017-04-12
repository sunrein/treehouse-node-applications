// print message to console
const https = require('https')


function printMessage(username, badgeCount, points) {
  const message =
    `${ username } has ${ badgeCount } badge(s) and ${ points } point(s) in JavaScript`;
    console.log(message);
}

function getProfile(username) {
  const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {

    let body = "";
    response.on('data', data => {
      body += data.toString();
    });

    response.on('end', () => {
      const profile = JSON.parse(body);
      printMessage(username, profile.badges.length, profile.points.javascript);
    });
  });
}

const users = process.argv.slice(2)
users.forEach(getProfile);
