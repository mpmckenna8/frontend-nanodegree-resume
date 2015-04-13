var name = "Matthew Philip McKenna";



var formatName = HTMLheaderName.replace("%data%", name);

console.log(formatName);
$("#header").append([formatName]);

var role = "Digital Cartographer";

var formatRole = HTMLheaderRole.replace("%data%", role);

$("#header").append(formatRole);


var awesomeThoughts = "I am Matt, and I am awesome.";

console.log(awesomeThoughts.replace("awesome", "fun"));
