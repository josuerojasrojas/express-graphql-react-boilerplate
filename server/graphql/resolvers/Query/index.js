const { runIfAuthenticated } = require("../../utils");

// example return greeting string
function getGreeting(date) {
  const time = date.getHours() * 60 + date.getMinutes();
  if (time > 299 && time < 660) return "Morning";
  else if (time > 660 && time < 1020) return "Afternoon";
  else return "Evening";
}

const Query = {
  greeting: (_, __, context) =>
    runIfAuthenticated(context, () => getGreeting(new Date())),
};

module.exports = Query;
