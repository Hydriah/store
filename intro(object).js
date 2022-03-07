let person={
    name :" Chidimma Ikeh",
    age: 26,
    country: "Nigeria" ,
    female: true,
    hobbies:["coding","studing","travelling","hiking",]
};

function print(message) {
    var div= document.getElementById("output");
    div.innerHTML=message
}


 let message="<p><h1> hi there!</h1>  My name is "+ person.name+ " </p>"
message+= "<p> I am from " + person.country+" </p>"
person.address='abuja';
message+= "<p> Residing at "+person.address+","+person.country+".</p>";
person.age+=1;
message+="<p> Would be turning " + person.age +" in few days</p>"
person.career="web developer";
message+="<p> Currently building my skills as a "+ person.career+"</p>"
message+="<p> I have "+ person.hobbies.length+" favourite things i enjoy doing  when am free which are: "+person.hobbies.join(',')+"</p>"

print(message)