// Import stylesheets
import "./style.css";

const employee = require("./employee.json");
const phone = "Phone numbers";

/* Instructions:
  1.Convert the following data into JSON format and store it in a property/variable called employees
  [{
    firstName: "Duke",
    lastName: "Java",
    age: 18,
    streetAddress: "100 Internet Dr",
    City: "JavaTown",
    Province: "On",
    Postal code: "12345",
    Phone numbers: [{
      Mobile: "111-111-1111",
      Home: "222-222-2222"
    }]

  2. Access the values from the firstName, lastName, age and streetAddress keys from employee JSON
  3. Access the nested key ‘Home’ from the employee JSON

  3. Display the results using console.log 
 */
const appDiv: HTMLElement = document.getElementById("app");


appDiv.innerHTML = `<h1>Lab Part 4: JSON data  </h1>`;

console.log ("First name: " + employee[0].firstName, "Last name: " + employee[0].lastName, "Age: " + employee[0].age, "Street address: "+ employee[0].streetAddress);

console.log ("Home phone number: " + employee[0]["Phone numbers"][0].Home);
