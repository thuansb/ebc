// global var
var increasingID = 1;

export function generate(n) {
  const data = [];
  const max = increasingID + n;
  for (; increasingID < max; increasingID++) {
    data.push({
      id: increasingID,
      date: 'Feb 1, 2017',
      time: 'Evening',
      service: 'Doctor House Call abcdxy (2hrs)',
      price: 'SGD 250.00',
      status: 'Expired',
    });
  }

  return data;
}
