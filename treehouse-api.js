// print message to console
const https = require('https')

const username = 'sabrinaunrein'

function printMessage(username, badgeCount, points) {
  const message =
    `${ username } has ${ badgeCount } badge(s) and ${ points } point(s) in JavaScript`;
    console.log(message);
}

printMessage('sunrein', 100, 1000);

const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
  console.dir(response.statusCode);
});
