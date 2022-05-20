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