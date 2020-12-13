const findBestEmployee = function (employees) {
  const names = Object.keys(employees);
  const tasks = Object.values(employees);
  let name = "Nobody";
  let task = 0;
  for (let i = 0; i < tasks.length; i += 1) {
    if (tasks[i] > task) {
      task = tasks[i];
      name = names[i];
    }
  }
  return name;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
