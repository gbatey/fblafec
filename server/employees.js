Meteor.publish('employees', function() {
  var data = Employees.find();
  if (data) return data;
  return this.ready();
});

Meteor.methods({
  addEmployee( employee ) {
    check( employee, Employees.schema);

    try {
      return Employees.insert( employee );
    } catch ( exception ) {
      throw new Meteor.Error( '500', `${ exception }` );
    }
  },
  editEmployee( employee ) {``
    check( employee, Employees.schema)

    try {
      return Employees.update( employee._id, { $set: employee });
    } catch ( exception ) {
      throw new Meteor.Error( '500', `${ exception }` );
    }
  },
  removeEmployee( employee ) {
    check( employee, String );

    try {
      return Employees.remove( employee );
    } catch ( exception ) {
      throw new Meteor.Error( '500', `${ exception }` );
    }
  }
});

Meteor.startup(function() {
  if (typeof Employees.findOne() === 'undefined') {

    // make fake employees
    var fake = [
      { fullName: "Daniella Clements", dob: "1983-02-09", address: "8251 Coles Boulevard", city: "Payson", state: "AZ", zipCode: "85547", phone: "(928) 410-4709", email: "daniellaclementsmR5@example.com" },
      { fullName: "Devyn Long",  dob: "1973-11-15", address: "811 Avalon Circle", city: "Washington", state: "DC", zipCode: "20524", phone: "(202) 302-9237", email: "devynlongGMu@example.com" },
      { fullName: "Saul Collins",  dob: "1964-05-18", address: "8055 Pioneer Court", city: "Darien", state: "WI", zipCode: "53114", phone: "(262) 269-9954", email: "saulcollinsDVV@example.com" },
      { fullName: "Tom Conner",  dob: "1948-07-13", address: "9156 Quincy Road", city: "South New Berlin", state: "NY", zipCode: "13843", phone: "(607) 660-5349", email: "tomconnerrHG@example.com" },
      { fullName: "Kelby Hyde",  dob: "1951-07-14", address: "6760 Carondolet Court", city: "Erwin", state: "TN", zipCode: "37650", phone: "(423) 487-8128", email: "kelbyhydeH2b@example.com" },
      { fullName: "Trent Rodriguez",  dob: "1965-07-25", address: "5233 East River Avenue", city: "Paonia", state: "CO", zipCode: "81428", phone: "(970) 739-5312", email: "trentrodriguezbFs@example.com" },
      { fullName: "Lazaro Miranda",  dob: "1985-06-10", address: "9770 Matson Drive", city: "Ogden", state: "UT", zipCode: "84401", phone: "(801) 761-5916", email: "lazaromirandaRME@example.com" },
      { fullName: "Donovan Stevenson",  dob: "1962-04-16", address: "931 Richmond Circle", city: "Bloomdale", state: "OH", zipCode: "44817", phone: "(419) 270-2884", email: "donovanstevensonh4a@example.com" },
      { fullName: "Jeremiah Brewer",  dob: "1988-12-02", address: "6131 Emerald Court", city: "Wolf Creek", state: "OR", zipCode: "97497", phone: "(541) 338-9199", email: "jeremiahbrewer59m@example.com" },
      { fullName: "Giovanni Powers",  dob: "1981-02-18", address: "8782 Kenton Place", city: "Boswell", state: "PA", zipCode: "15531", phone: "(814) 348-6209", email: "giovannipowersA7R@example.com" },
      { fullName: "Stacy Schmidt", dob: "1976-09-05", address: "2150 Plainfield Way", city: "Hope", state: "KS", zipCode: "67451", phone: "(785) 597-5786", email: "stacyschmidtqun@example.com" },
      { fullName: "Rico Jacobs",  dob: "1980-03-19", address: "858 Halsted Place", city: "Surgoinsville", state: "TN", zipCode: "37873", phone: "(423) 579-8553", email: "ricojacobsYfV@example.com" },
      { fullName: "Norma Flores", dob: "1946-12-10", address: "4763 Finsbury Court", city: "Laurel", state: "MS", zipCode: "39443", phone: "(601) 560-5975", email: "normafloresEQ8@example.com" },
      { fullName: "Katelin Morse", dob: "1987-01-10", address: "3022 Kirkland Lane", city: "Dendron", state: "VA", zipCode: "23839", phone: "(757) 573-5863", email: "katelinmorseA4R@example.com" },
      { fullName: "Dimitri Weiss",  dob: "1955-12-28", address: "7263 Navarre Way", city: "Shiloh", state: "NJ", zipCode: "08353", phone: "(856) 543-9227", email: "dimitriweissNjM@example.com" },
      { fullName: "Pauline Valentine", dob: "1965-02-07", address: "7797 Cottage Grove Place", city: "Montgomery", state: "NY", zipCode: "12549", phone: "(845) 220-8355", email: "paulinevalentineMkE@example.com" },
      { fullName: "Mallory Cain", dob: "1956-08-28", address: "2449 Churchill Avenue", city: "New Weston", state: "OH", zipCode: "45348", phone: "(937) 313-8336", email: "mallorycainnvE@example.com" },
      { fullName: "Bernardo Campos",  dob: "1949-10-23", address: "6582 Drew Circle", city: "East Wilton", state: "ME", zipCode: "04234", phone: "(207) 726-3486", email: "bernardocamposjDf@example.com" },
      { fullName: "Toby Schultz",  dob: "1986-03-21", address: "724 77th Drive", city: "Gentry", state: "MO", zipCode: "64453", phone: "(660) 296-9610", email: "tobyschultzmBn@example.com" },
      { fullName: "James Carrillo",  dob: "1979-06-13", address: "8244 88th Circle", city: "Salt Lake City", state: "UT", zipCode: "84147", phone: "(801) 544-9264", email: "jamescarrilloV5A@example.com" },
      { fullName: "Grace Henderson", dob: "1971-05-28", address: "4906 Oconto Way", city: "Seaview", state: "VA", zipCode: "23429", phone: "(757) 281-6640", email: "gracehendersonuwR@example.com" },
      { fullName: "Leslie Wheeler",  dob: "1978-05-27", address: "8180 Heath Boulevard", city: "New Castle", state: "PA", zipCode: "16105", phone: "(724) 620-9096", email: "lesliewheeler5dv@example.com" },
      { fullName: "Julio Kent",  dob: "1972-08-17", address: "8669 Weed Drive", city: "Hartford", state: "CT", zipCode: "06154", phone: "(860) 210-2595", email: "juliokentn2F@example.com" },
      { fullName: "Carley Poole", dob: "1950-06-21", address: "9335 Lyman Place", city: "Williamsfield", state: "IL", zipCode: "61489", phone: "(309) 664-1007", email: "carleypooleujd@example.com" },
      { fullName: "Darryl Potts",  dob: "1948-06-29", address: "4678 Humboldt Boulevard", city: "Eastanollee", state: "GA", zipCode: "30538", phone: "(706) 490-5849", email: "darrylpottszSx@example.com" },
      { fullName: "Jaime Sosa",  dob: "1946-11-20", address: "7003 St Joseph Way", city: "San Sebastian", state: "PR", zipCode: "00685", phone: "(787) 552-4703", email: "jaimesosaZWp@example.com" },
      { fullName: "Jay Strong",  dob: "1966-02-10", address: "3717 Hudson Circle", city: "Fisher", state: "LA", zipCode: "71426", phone: "(318) 783-5969", email: "jaystrongYRG@example.com" },
      { fullName: "Angelo Delaney",  dob: "1993-08-15", address: "1888 Isham Way", city: "Topeka", state: "KS", zipCode: "66692", phone: "(785) 561-5583", email: "angelodelaneypmZ@example.com" },
      { fullName: "Chandler Christensen",  dob: "1954-01-09", address: "5853 Wentworth Boulevard", city: "Tyrone", state: "PA", zipCode: "16686", phone: "(814) 476-4248", email: "chandlerchristensenyxD@example.com" },
      { fullName: "Misael Rodriquez",  dob: "1966-03-19", address: "4438 Ernst Avenue", city: "Vance", state: "SC", zipCode: "29163", phone: "(803) 674-2997", email: "misaelrodriquezEQ8@example.com" },
      { fullName: "Alyssa Bridges", dob: "1975-07-09", address: "537 Geneva Court", city: "Savannah", state: "GA", zipCode: "31411", phone: "(912) 506-6148", email: "alyssabridgeszz5@example.com" },
      { fullName: "Mandy Dale", dob: "1976-02-27", address: "1973 Huron Circle", city: "Vancleve", state: "KY", zipCode: "41385", phone: "(606) 700-3974", email: "mandydalev6j@example.com" },
      { fullName: "Todd Forbes",  dob: "1991-01-17", address: "7482 Jones Drive", city: "Atlanta", state: "GA", zipCode: "30354", phone: "(404) 513-4154", email: "toddforbesnJ9@example.com" },
      { fullName: "Ian Fernandez",  dob: "1962-07-26", address: "8911 59th Court", city: "Haubstadt", state: "IN", zipCode: "47639", phone: "(812) 558-9485", email: "ianfernandezab7@example.com" },
      { fullName: "Clarissa Trevino", dob: "1948-04-02", address: "6351 Music Court Street", city: "Levering", state: "MI", zipCode: "49755", phone: "(231) 550-7597", email: "clarissatrevinorKC@example.com" },
      { fullName: "Kelcie Hendricks", dob: "1978-02-09", address: "5228 70th Avenue", city: "Cee Vee", state: "TX", zipCode: "79223", phone: "(940) 268-7819", email: "kelciehendricksHN5@example.com" },
      { fullName: "Tyler Simon", dob: "1962-11-24", address: "5006 Randolph Wacker Avenue", city: "Clarksville", state: "VA", zipCode: "23927", phone: "(434) 524-6949", email: "tylersimon9MB@example.com" },
      { fullName: "Jacoby Barber",  dob: "1964-04-04", address: "7598 Oakland Avenue", city: "Rhodelia", state: "KY", zipCode: "40161", phone: "(270) 568-9004", email: "jacobybarbereeS@example.com" },
      { fullName: "Alena Sanchez", dob: "1955-11-30", address: "8703 Draper Way", city: "Redding Ridge", state: "CT", zipCode: "06876", phone: "(203) 534-9424", email: "alenasanchezDMd@example.com" },
      { fullName: "Zachary Carroll",  dob: "1975-07-17", address: "3123 Naval Armory Avenue", city: "Candor", state: "NY", zipCode: "13743", phone: "(607) 760-8034", email: "zacharycarrolljv2@example.com" },
      { fullName: "Zachary Tate",  dob: "1986-01-17", address: "4080 Windsor Street", city: "Tyrone", state: "NY", zipCode: "14887", phone: "(607) 227-9530", email: "zacharytateHBZ@example.com" },
      { fullName: "Marquez Flowers",  dob: "1960-01-28", address: "5721 Cheltenham Street", city: "Aromas", state: "CA", zipCode: "95004", phone: "(831) 496-3946", email: "marquezflowersQHR@example.com" },
      { fullName: "Hudson Walker",  dob: "1960-10-25", address: "3259 Narragansett Way", city: "Homeland", state: "FL", zipCode: "33847", phone: "(863) 574-9564", email: "hudsonwalkerwkw@example.com" },
      { fullName: "Travis Odonnell",  dob: "1954-06-13", address: "8343 Farrell Avenue", city: "Middletown", state: "NJ", zipCode: "07748", phone: "(732) 238-8943", email: "travisodonnelldBe@example.com" },
      { fullName: "Tre Sears",  dob: "1954-02-08", address: "4860 76th Road", city: "Blue Bell", state: "PA", zipCode: "19424", phone: "(215) 561-9614", email: "tresearsyrc@example.com" },
      { fullName: "Esmeralda Adams", dob: "1957-08-07", address: "996 Vine Road", city: "Cincinnati", state: "OH", zipCode: "45238", phone: "(513) 539-6747", email: "esmeraldaadamsp6X@example.com" },
      { fullName: "Anita Hopper", dob: "1977-06-16", address: "1030 Leclaire Way", city: "Swampscott", state: "MA", zipCode: "01907", phone: "(781) 648-4970", email: "anitahopperWCN@example.com" },
      { fullName: "Chelsea Morgan", dob: "1956-04-26", address: "7203 Moffat Boulevard", city: "Coronado", state: "CA", zipCode: "92118", phone: "(619) 420-8882", email: "chelseamorgan4Rw@example.com" },
      { fullName: "Autumn Hebert", dob: "1983-02-16", address: "9202 Olcott Way", city: "Pittsburgh", state: "PA", zipCode: "15239", phone: "(412) 292-8656", email: "autumnhebert74s@example.com" },
      { fullName: "Daryl Rose",  dob: "1992-02-20", address: "100 Daniel Way", city: "Orlando", state: "FL", zipCode: "32877", phone: "(407) 281-7242", email: "darylroseC4P@example.com" }
    ];

    var len = fake.length;
    for (var i = 0; i < len; i++) {
      Employees.insert(fake[i]);
    }
  }
});
