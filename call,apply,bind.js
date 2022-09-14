// call,apply and bind are example of explicit binding 
let user = {
    firstName: "Kapil",
    lastName: "Dev",
    // welcome: function () {
    //     console.log(`Welcome ${this.firstName} ${this.lastName}`);
    // }
  };
  // user.welcome();
  
  let welcome = function (email, mobileNumber, location) {
      console.log(`Welcome ${this.firstName} ${this.lastName} , 
      thank you for signing up! Your email id is ${email}
      Your registered number is ${mobileNumber}.
      Your location is ${location}
    `);
  };
  
  
  
  let user2 = {
    firstName: "Ravi",
    lastName: "Shastri",
  };
  
  //call method
  
  //syntax -> function_name.call(obj_to_which_this_will_point);
  //we want to print welcome message for Ravi Shastri
  
  welcome.call(user2, "abc@gmail.com", 1234567890, "India");
  
  //apply method
  welcome.apply(user, ["abc@gmail.com", 1234567890, "India"]);
  
  //bind method
  let bindedFN = welcome.bind(user, "abc@gmail.com", 1234567890, "India");
  console.log(bindedFN);
  bindedFN();
  
  let againBindedFN = bindedFN.bind(user2);
  againBindedFN();