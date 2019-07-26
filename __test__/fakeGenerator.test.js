// Fake Users Generator
const faker = require("faker");
const fs = require("fs");

let ans = [];
for (let i = 0; i < 50; i++) {
  ans.push({
    id: i,
    name: faker.fake("{{name.firstName}}"),
    lname: faker.fake("{{name.lastName}}"),
    email: faker.fake("{{internet.email}}"),
    avatar: faker.fake("{{image.avatar}}")
  });
}
fs.writeFile("./src/fakeUsers.json", JSON.stringify(ans), function(err) {
  if (err) {
    return console.log(err);
  }

  console.log("Done!");
});
