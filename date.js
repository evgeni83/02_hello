const { format } = require("date-fns");

function currentDateTime() {
  const date = new Date();
  return {
    date: format(date, "yyyy-MM-dd"),
    time: format(date, "H:mm:ss"),
  };
}

exports.currentDateTime = currentDateTime;
