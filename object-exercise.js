var person = {
  firstName: 'Thomas',
  preferredName: 'Tommy',
  lastName: 'Gaessler',
};

// getter
console.log('Hello my name is ' + person.firstName + ' ' + person.lastName);

// setter
person.age = 19;
person.birthday = 'June 5th, 1997';
person.address = {
  line1: '5615 Vistancia Drive',
  city: 'Parker',
  state: 'CO',
  zip: '80134',
};
person.hobbies = [
  {name: 'skiing', levelOfInterest: 15},
  {name: 'photography', levelOfInterest: 15},
  {name: 'coding', levelOfInterest: 13}];
person.isCool = true;

console.log(person);

console.log(person.birthday + "\n" + person.hobbies[1].name + "\n" + person.address.city + "\n" + person.address.city + ", " + person.address.state);

//delete objects

delete person.hobbies;
delete person.address;

console.log(person);

for ( key in person)
{
  // console.log('key', key);
  console.log('value', person[key]);
}

// dot notation
// bracket notaiton person['']
