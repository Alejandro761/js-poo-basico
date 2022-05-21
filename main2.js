class Student{
    constructor({name, email, username, twitter = undefined, instagram = undefined, facebook = undefined, approvedCourses = [], learningPaths = []}){
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter, instagram, facebook
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
}

class LearningPaths {
    constructor({name, courses = []}){
        this.name = name;
        this.courses = courses;
    }
}

class Course {
    constructor({name, classes = []}){
        this.name = name;
        this.classes = classes;
    }
}

class Class {
    constructor({name, duration})
}

const cursoProgBasica = new Course({
    name: "Curso de Programación básica",
    classes: ''
})

const cursoHTMLCSS = new Course({
    name: "Curso de HTML y CSS",
    classes: ''
})

const cursoGridFlex = new Course({
    name: "Curso de Gird y Flexbox",
    classes: ''
})

const escuelaWeb = new LearningPaths({name: 'Escuela de Desarrollo Web', courses: [cursoProgBasica, cursoHTMLCSS, cursoGridFlex]} ) 

const ale = new Student({name: 'Alejandro', username: 'ale🇲🇽', instagram: 'Alex', twitter: 'alejandro_xd62', email: 'ale@si.com'})
console.log(ale);

const faidel = new Student({name: 'Fidel', username: 'fidel', instagram: 'Faidel', facebook: 'Fidel Ordoñez Estebandido', email: 'fidelito@btc.com'})