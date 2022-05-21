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

class learningPaths {
    constructor({name, courses = []}){
        this.name = name;
        this.courses = courses;
    }
}

const ale = new Student({name: 'Alejandro', username: 'ale🇲🇽', instagram: 'Alex', twitter: 'alejandro_xd62', email: 'ale@si.com'})
console.log(ale);

const faidel = new Student({name: 'Fidel', username: 'fidel', instagram: 'Faidel', facebook: 'Fidel Ordoñez Estebandido', email: 'fidelito@btc.com'})