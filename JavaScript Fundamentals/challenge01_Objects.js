const Person = {
  firstName: "Dustin",
  lastName: "Henderson",
  birthYear: 1999,
  age: 16,
  friends: ["Steve", "Mike", "Lucas", "Max", "Eddie"],
  driversLicence: true,

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} -year old. and he has ${
      this.driversLicence ? "a" : "no"
    } driver's license.`;
  },
};

console.log(
  `${Person.firstName} has ${Person.friends.length} friends, and his best friend is called ${Person.friends[0]}`
);

console.log(Person.getSummary());
