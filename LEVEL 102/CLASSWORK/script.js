let allValue = [
    14, 
    "ლუკა", 
    3.14, 
    true, 
    { 
      "სახელი": "ლუკა",
      "გვარი": "ჭაჭიაშვილი",
      "ასაკი": 14,
      "ქვეყანა": "საქართველო",
      "ქალაქი": "თბილისი"
    }
  ];
  
 
  let person = allValue[4];
  let name = person["სახელი"];
  let surname = person["გვარი"];
  let age = person["ასაკი"];
  let country = person["ქვეყანა"];
  let city = person["ქალაქი"];
  
  let sentence = `ჩემი სახელია ${name}, ჩემი გვარია ${surname}, ჩემი ასაკია ${age}, მე ვარ ${country}-დან და ვცხოვრობ ${city}.`;
  
  console.log(sentence);
  