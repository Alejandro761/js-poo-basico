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
        this._name = name; //el guion bajo indica que nadie llame a ese atributo
        this.classes = classes;
    }

    get name() {
        return this._name; //el guión también indica que es 'privado'
    }

    set name(name){
        if (name === 'Curso Malito de Programación Básica') {
            console.error('Web... no');
          } else {
            this._name = name;
          }
    }
}

function videoPlay(id) {
    const urlSecreta = 'https://platziwtf.com/' + id;
    console.log('Se está reproduciendo desde la url ' + urlSecreta);
}

function videoStop(id) {
    const urlSecreta = 'https://platziwtf.com/' + id;
    console.log('Pausamos la url ' + urlSecreta);
}

export class PlatziClass { 
    constructor({name, videoID}){
        this.name = name;
        this.videoID = videoID;
    }

    reproducir() {
        videoPlay(this.videoID);
    }
    
    pausar() {
        videoStop(this.videoID);
    }
}

const cursoProgBasica = new Course({
    name: "Curso de Programación básica",
    classes: ''
});

cursoProgBasica.name;
cursoProgBasica.name = 'sí';

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