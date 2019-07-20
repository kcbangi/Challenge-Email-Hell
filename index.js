const emailLog = require("./email_log.json");

function countUniqueEmails(emailFile) {
  let list = emailFile.emails;

  let emails = list.reduce(function(previous, current) {
    let email = current.email;
    if (!previous[email]) {
      previous[email] = 1;
    } else {
      previous[email] += 1;
    }
    return previous;
  });

  return emails;
}

console.log(countUniqueEmails(emailLog));
