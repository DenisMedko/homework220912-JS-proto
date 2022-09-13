function User (firstName, lastName, email, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.isLoggedIn = false;
}

User.prototype = {
    showMessage : function () {
        console.log(`${this.getFullName()}, you are ${this.isLoggedIn ? 'logged in' : 'logged out'}`);
    },
    showAlarmMessage : function (status) {
        console.log(`${this.getFullName()}, you are already ${status}`);
    },
    getFullName : function () {return `${this.firstName} ${this.lastName}`;},
    logout : function() {
        if (this.isLoggedIn) {
            this.isLoggedIn = !this.isLoggedIn;
            this.showMessage();
        } else {
            this.showAlarmMessage('out');
        }     
    },
    login : function() {
        if (!this.isLoggedIn) {
            this.isLoggedIn = !this.isLoggedIn;
            this.showMessage();
        } else {
            this.showAlarmMessage('in');
        }
    },      
};

const user1 = new User('Denis', 'Medko', 'denis@gmail.com', 45);
const user2 = new User('Ivan', 'Petrov', 'ivan@gmail.com', 25);

user1.logout();
user1.login();
user1.logout();

user2.login();
user2.login();
user2.logout();