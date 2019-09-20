class Person{
    constructor(attributes){
        this.name = attributes.name,
        this.age = attributes.age,
        this.location = attributes.location
    }
    speak(){
        return `Hello my name is ${this.name}, I\'m from ${this.location}`
    }
}

class Instructor extends Person{
    constructor(instructorAttributes){
        super(instructorAttributes),
        this.specialty = instructorAttributes.specialty,
        this.favLanguage = instructorAttributes.favLanguage,
        this.catchPhrase = instructorAttributes.catchPhrase
    }
    demo(subject){
        return `Today we are learning about ${subject}.`
    }
    grade(student, subject){
        return `${student} receives a perfect score on ${subject}!`
    }
    phrase(){
        return `${this.catchPhrase}`
    }
}

class Student extends Person{
    constructor(studentAttributes){
        super(studentAttributes),
        this.previousBackground = studentAttributes.previousBackground,
        this.className = studentAttributes.className,
        this.favSubjects = studentAttributes.favSubjects        
    }
    listsSubjects(){
        return this.favSubjects;
    }
    prAssignment(subject){
        return `student.name has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class TeamLead extends Instructor{
    constructor(teamLeadAttributes){
        super(teamLeadAttributes),
        this.gradClassName = teamLeadAttributes.gradClassName,
        this.favInstructor = teamLeadAttributes.favInstructor
    }
    standup(channel){
        return `${this.name} announces to ${channel}: @channel standup time!​​​​​`
    }
    debugsCode(){
        return `${name} debugs ${student.name}'s code on ${subject}`
    }
}

const will = new TeamLead({
    name: 'Will',
    age: 'Just had a birthday, age unknown',
    location: 'Alaska',
    specialty: 'dark JS practice examples',
    favLanguage: 'JavaScript',
    catchPhrase: 'as always, add me as a collaborator.'
})

const brit = new Instructor({
    name: 'Brit',
    age: 29,
    location: 'Canada',
    specialty: 'Web Fundamentals',
    catchPhrase: 'let\'s take it up together as a class'
})

const zac = new Student({
    name: 'Zac',
    age: 27,
    location: 'Wyoming',
    previousBackground: 'I.T.',
    className: 'web24',
    favSubjects: ['html', 'css', 'javascript']
})

const des = new Student({
    name: 'Des',
    age: 18,
    location: 'Massachusetts',
    previousBackground: 'High School student',
    className: 'Web24',
    favSubjects: [ "HTML", "CSS", "JavaScript"]
 });

 const marques = new Student({
    name: 'Marques',
    age: 25,
    location: 'New Jersey',
    previousBackground: 'Sales',
    className: 'web24',
    favSubjects: ['html', 'css', 'javascript']
})

console.log(will.standup('web24_will'));
console.log(marques.speak());
console.log(brit.grade('Jim', 'Javascript'));
console.log(zac.listsSubjects());
console.log(des.sprintChallenge("javascript"));
console.log(will.phrase());
