function greeter(person) {
    return "Hello, " + person.firstname + " " + person.lastname;
}
var user = { firstname: "SHA", lastname: "User" };
document.body.innerHTML = greeter(user);
