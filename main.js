const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        'Curso de HTML y CSS',
        'Curso de JS'
    ],
    aprobarCurso(curso) {
        this.cursosAprobados.push(curso);
    }
};

natalia.aprobarCurso('Curso de Inglés');
natalia.aprobarCurso('Curso de ser chingona');
console.log(natalia.cursosAprobados);

function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    // this.aprobarCurso = function (curso) {
    //     this.cursosAprobados.push(curso);
    // }
}

//otra forma de  crear un metodo para los prototipos
Student.prototype.aprobarCurso = function(curso) { 
    this.cursosAprobados.push(curso);
}

const juanita = new Student(
    'Juanita Alejandra',
    15,
    [
        'Curso de Git', 'Curso de Java'
    ]
);

console.log(juanita);
juanita.aprobarCurso('Curso de C');
console.log(juanita);

class Studen2 {
    // constructor(name, age, cursosAprobados) {
    //esta es otra forma de hacer el constructor: roro
    constructor({name, cursosAprobados = [] /* que por defecto sea un array */, age}) {
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }

    aprobarCurso(curso) {
        this.cursosAprobados.push(curso);
    }
}

// const puig = new Studen2('Puig', 19, ['Curso de Electromécanica', 'Curso de Calculo Diferencial']);
//llamar al constructor roro, no importa el orden
const puig = new Studen2({name : 'Puig', age: 19, cursosAprobados: ['Curso de Electromécanica', 'Curso de Calculo Diferencial']});

console.log(puig);
puig.aprobarCurso('Cálculo Integral');
console.log(puig);