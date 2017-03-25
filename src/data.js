export function generate(n) {
  const data = [];
  for (let i = 0; i < n; i++) {
    data.push({
      id: i+1,
      date: 'Feb 1, 2017',
      time: 'Evening',
      service: 'Doctor House Call (2hrs)',
      price: 'SGD 250.00',
      status: 'Expired',
    });
  }

  return data;
}
