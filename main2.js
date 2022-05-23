class Comment {
    constructor({content, studentName, studentRole = 'estudiante',}) {
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;
    }

    publicar() {
        console.log(this.studentName + ' (' + this.studentRole + ')')
        console.log(this.likes + " likes");
        console.log(this.content);
    }
}

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

    publicarComentario(commentContent){
        const comment = new Comment({
            content: commentContent, studentName: this.name,
        });
        comment.publicar();
    }
}

class FreeStudent extends Student{
    constructor(props){
        super(props);
    }

    approvedCourse(newCourse) {
        if(newCourse.isFree){
            this.approvedCourses.push(newCourse); 
        } else {
            console.warn('Lo siento, ' + this.name + ", no puedes tomar este curso.");
        }
    }
}

class BasicStudent extends Student{
    constructor(props){
        super(props);
    }

    approvedCourse(newCourse) {
        if(newCourse.lang != 'english'){
            this.approvedCourses.push(newCourse); 
        } else {
            console.warn('Lo siento, ' + this.name + ", no puedes tomar este curso.");
        }
    }
}

class ExpertStudent extends Student{
    constructor(props){
        super(props);
    }

    approvedCourse(newCourse) {
        this.approvedCourses.push(newCourse); 
    }
}

class TeacherStudent extends ExpertStudent{
    constructor(props){
        super(props);
    }

    publicarComentario(commentContent){
        const comment = new Comment({
            content: commentContent, studentName: this.name, 
            studentRole: 'profesor'
        });
        comment.publicar();
    }
}

class LearningPaths {
    constructor({name, courses = []}){
        this.name = name;
        this.courses = courses;
    }
}

class Course {
    constructor({name, classes = [], isFree = false, lang = 'spanish'}){
        this._name = name; //el guion bajo indica que nadie llame a ese atributo
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
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

// export class PlatziClass { 
//     constructor({name, videoID}){
//         this.name = name;
//         this.videoID = videoID;
//     }

//     reproducir() {
//         videoPlay(this.videoID);
//     }
    
//     pausar() {
//         videoStop(this.videoID);
//     }
// }

const cursoProgBasica = new Course({
    name: "Curso de Programación básica", classes: '', isFree: true, 
    lang: 'english'
});

cursoProgBasica.name;
cursoProgBasica.name = 'sí';

const cursoHTMLCSS = new Course({
    name: "Curso de HTML y CSS", classes: '', lang: 'english'
})

const cursoGridFlex = new Course({
    name: "Curso de Gird y Flexbox",
    classes: ''
})

const escuelaWeb = new LearningPaths({name: 'Escuela de Desarrollo Web', courses: [cursoProgBasica, cursoHTMLCSS, cursoGridFlex]} ) 

const ale = new ExpertStudent({name: 'Alejandro', username: 'ale🇲🇽', instagram: 'Alex', twitter: 'alejandro_xd62', email: 'ale@si.com'})

const faidel = new FreeStudent({name: 'Fidel', username: 'fidel', instagram: 'Faidel', facebook: 'Fidel Ordoñez Estebandido', email: 'fidelito@btc.com'});

const puig = new TeacherStudent({name: 'Charles', username: 'Puik', instagram: 'Carlos Daniel', email: 'elpush@btc.com'});

ale.approvedCourse(cursoHTMLCSS)
faidel.approvedCourse(cursoProgBasica)
faidel.approvedCourse(cursoHTMLCSS)
console.log(ale);
console.log(faidel);
faidel.publicarComentario('Que curso tan chingon hizo el señor Jaime Merino');
puig.publicarComentario('Gracias por sus comentarios');