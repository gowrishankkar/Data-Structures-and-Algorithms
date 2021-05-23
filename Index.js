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
    let keyName = parent+"_"+key
    if (typeof obj[key] === 'object') {

      showAll(obj[key], keyName);
    } else {
    
      console.log(keyName)
      finalObject[keyName] = obj[key]
    }
  }
};

showAll(user, 'user');
console.log(finalObject)
