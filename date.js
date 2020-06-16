const { format } = require("date-fns");

function currentDateTime() {
  const date = new Date();
  console.log(`date: '${format(date, "yyyy-MM-dd")}', time: '${format(date, "H:mm:ss")}'`);
}

exports.currentDateTime = currentDateTime;
