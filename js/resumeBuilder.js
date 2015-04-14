
var bio = {
  name: "Matthew Philip McKenna",
  role: "Digital Cartographer",
  contact:"mpmckenna8@me.com",
  pic:"mee.jpg",
  welcome:"Get in touch if you have any questions my resume doesn't answer",
  skills:["JavaScript", "HTML", "GIS"]
}

var formatName = HTMLheaderName.replace("%data%", bio.name);
console.log(formatName);
$("#header").append([formatName]);

var formatRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").append(formatRole);


var formatCon = HTMLContactGeneric.replace("%data%", bio.contact)

var awesomeThoughts = "I am Matt, and I am awesome.";

console.log(awesomeThoughts.replace("awesome", "fun"));
