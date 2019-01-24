// For anyone reading my comments, I now feel like I'm cooking with fire.
// class constructors are fantastic.
const WEB17modules = ['Responsive Design I','Responsive Design II','Preprocessing I','Preprocessing II','JavaScript I','JavaScript II','JavaScript III','JavaScript IV']

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.location = attributes.location;
        this.age = attributes.age;
        this.gender = attributes.gender;
    }
    phrase() {
        return `Hello, my name is ${this.name} and I'm from ${this.location}.`;
    }
}

class Instructor extends Person {
    constructor(childAttributes) {
        super(childAttributes);
        this.saying = childAttributes.saying;
    }
    catchPhrase() {
        return `${this.saying}`;
    }
    demo(subject) { // Needs to pass in subject from student
        return `Today we are learning about ${subject}!`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`;
    }
    gradeRandom(student) {
        let gradeNow = student.grade;
        if (gradeNow < 95) {
            return gradeNow + (Math.random() * 40);
        } 
    }
}

class Student extends Person {
    constructor(childAttributes) {
        super(childAttributes);
        this.favSubjects = childAttributes.favSubjects;
        this.className = childAttributes.className;
        this.modules = childAttributes.modules;
        this.progress = childAttributes.progress;
        this.grade = childAttributes.grade;
    }
    listsSubjects() {
        return this.favSubjects.toString();
    }
    PRAssignment() {
        return `${this.name} has submitted a PR for ${this.className}:${this.modules[this.progress]}`;
    }
    sprintChallenge(variance) { // Variance would be the result of a function in the app that determines what variance from progress the current sprint needs to be.
        return `${this.name} has begun sprint challenge on ${this.className}:${this.modules[this.progress - variance]}`;
    }
    graduate(instructor) {
        if (instructor > 80) {
            return `You Graduate!`;
        } else {
            return `Back to work! *whip whip*`;
        }
    }
}
class ProjectManagers extends Instructor {
    constructor(grandchildAttributes) {
        super(grandchildAttributes);
        this.gradClassName = grandchildAttributes.gradClassName;
        this.favInstructor = grandchildAttributes.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to #${channel}, @here stand up time!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

const fred = new Instructor({
    name: 'Fred Flinstone',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    saying: `Don't forget the homies`
});

const janet = new Student({
    name: 'Janet Jackson',
    location: 'Neverland',
    age: (15 / Math.random()),
    gender: 'female',

    previousBackground: 'singer/songwriter',
    className: 'WEB17',
    modules: WEB17modules,
    progress: 3,
    favSubjects: ['CSS','HTML','Music'],
    grade: 60,
});

const bob = new ProjectManagers({
    name: 'Bob the Builder',
    location: 'Cartoon Network',
    age: 12,
    gender: 'male',

    favLanguage: 'C',
    specialty: 'low-level',
    saying: `If you build it, I won't have to.`,

    gradClassName: 'CS01',
    favInstructor: 'Don Knuth',

});
console.log(fred.gradeRandom(janet));

console.log(janet.graduate(bob.gradeRandom(janet)))

console.log(bob.name);
console.log(bob.standUp('web17_bob'));
console.log(bob.catchPhrase())
console.log(bob.debugsCode(janet, 'JsIV'))

console.log(fred.name);
console.log(fred.catchPhrase());
console.log(fred.demo('Javascript IV'));
console.log(fred.grade(janet, 'JsIII'));


console.log(janet.grade);
console.log(janet.name);
console.log(janet.age);
console.log(janet.phrase());
console.log(janet.listsSubjects());
console.log(janet.PRAssignment());
console.log(janet.sprintChallenge(1)); // The argument is variance. See above.
