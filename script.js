//1.Movie using class
class Movie{
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    
        if(this.rating==undefined){
            this.rating = "PG13"
        }
        else{
            this.rating = rating;
        }
    }

    getpg(a){
        for(let i=0;i<a.length; i++){
            if(a[i].rating="PG13"){
                return `${a[i].name} ${a[i].studio} ${a[i].rating}`;
            }
        }
    }
}

let b = new Movie("Casino Royale","Eon Productions","PG13");
console.log(b);
console.log(b.getpg([{name:"Prince",studio:"Avm studios",rating:"PG13"},{name:"Sarthar",studio:"walt disney studios",rating:"R"}]))

//2.Circle using class
class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    
    getArea() {
        return (Math.PI * Math.pow(this.radius, 2));
    }
    getCircumference() {
        return (2 * Math.PI * this.radius);
    }
    getColor() {
        return this.color;
    }
}
let circleDetails = new Circle(5, "red");

console.log(circleDetails.getColor());
console.log(circleDetails.getArea().toFixed(2));
console.log(circleDetails.getCircumference().toFixed(2));


//3.Write a “person” class to hold all the details.

class Person{
    constructor(firstname,lastname,age,email,mobno){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.email = email;
        this.mobno = mobno;
    }
}

let a = new Person("Deepa","A","28","deepa@gmail.com","0987654321");
console.log(a);

//4.write a class to calculate the uber price.

class Uber{
    constructor(price){
        this.price = price;
    }

    getamount(kilometer){
        return `Taxi fare : Rs.${kilometer*this.price}`;
    }
}

let amt = new Uber(50);
console.log(amt.getamount(60));
