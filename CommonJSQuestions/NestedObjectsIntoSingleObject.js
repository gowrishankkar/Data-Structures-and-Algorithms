let user = {
  name: "Test Name",
  address: {
    personal: {
      city: "cbe",
      area: "sullur",
    },
    office: {
      city: "cbe 2",
      area: "hopes",
    },
  },
};

let finalObject = {};
let showAll = (obj, parent) => {
  for (let key in obj) {
    let keyName = parent + "_" + key;
    if (typeof obj[key] === "object") {
      showAll(obj[key], keyName);
    } else {
      console.log(keyName);
      finalObject[keyName] = obj[key];
    }
  }
};

showAll(user, "user");
console.log(finalObject);

// {user_address_office_area: "hopes"
// user_address_office_city: "cbe 2"
// user_address_personal_area: "sullur"
// user_address_personal_city: "cbe"
// user_name: "Test Name"}
