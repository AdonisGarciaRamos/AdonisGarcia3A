class Persona {
    constructor(
      private nombre: string,
      private apellidos: string,
      private identificacion: string,
      private estadoCivil: string
    ) {}
  
    public cambiarEstadoCivil(nuevoEstadoCivil: string): void {
      this.estadoCivil = nuevoEstadoCivil;
    }
  
    public imprimirInformacion(): void {
      console.log("Nombre:", this.nombre);
      console.log("Apellidos:", this.apellidos);
      console.log("Identificación:", this.identificacion);
      console.log("Estado Civil:", this.estadoCivil);
    }
  }
  
  class Empleado extends Persona {
    constructor(
      nombre: string,
      apellidos: string,
      identificacion: string,
      estadoCivil: string,
      private anoIncorporacion: number,
      private numDespacho: string
    ) {
      super(nombre, apellidos, identificacion, estadoCivil);
    }
  
    public reasignarDespacho(nuevoDespacho: string): void {
      this.numDespacho = nuevoDespacho;
    }
  
    public imprimirInformacion(): void {
      super.imprimirInformacion();
      console.log("Año de Incorporación:", this.anoIncorporacion);
      console.log("Número de Despacho:", this.numDespacho);
    }
  }
  
  class Estudiante extends Persona {
    constructor(
      nombre: string,
      apellidos: string,
      identificacion: string,
      estadoCivil: string,
      private curso: string
    ) {
      super(nombre, apellidos, identificacion, estadoCivil);
    }
  
    public matricular(curso: string): void {
      this.curso = curso;
    }
  
    public imprimirInformacion(): void {
      super.imprimirInformacion();
      console.log("Curso:", this.curso);
    }
  }
  
  class Profesor extends Persona {
    constructor(
      nombre: string,
      apellidos: string,
      identificacion: string,
      estadoCivil: string,
      private departamento: string
    ) {
      super(nombre, apellidos, identificacion, estadoCivil);
    }
  
    public cambiarDepartamento(nuevoDepartamento: string): void {
      this.departamento = nuevoDepartamento;
    }
  
    public imprimirInformacion(): void {
      super.imprimirInformacion();
      console.log("Departamento:", this.departamento);
    }
  }
  
  class PersonalDeServicio extends Persona {
    constructor(
      nombre: string,
      apellidos: string,
      identificacion: string,
      estadoCivil: string,
      private seccion: string
    ) {
      super(nombre, apellidos, identificacion, estadoCivil);
    }
  
    public trasladarSeccion(nuevaSeccion: string): void {
      this.seccion = nuevaSeccion;
    }
  
    public imprimirInformacion(): void {
      super.imprimirInformacion();
      console.log("Sección:", this.seccion);
    }
  }
  
  // Programa de prueba
  const empleado = new Empleado(
    "Juan",
    "Pérez",
    "123456789",
    "Soltero",
    2010,
    "A101"
  );
  const estudiante = new Estudiante(
    "María",
    "Gómez",
    "987654321",
    "Casada",
    "Informática"
  );
  const profesor = new Profesor(
    "Carlos",
    "López",
    "456789123",
    "Soltero",
    "Lenguajes"
  );
  const personalServicio = new PersonalDeServicio(
    "Ana",
    "Rodríguez",
    "789123456",
    "Divorciada",
    "Biblioteca"
  );
  
  empleado.imprimirInformacion();
  console.log("-------------------------");
  estudiante.imprimirInformacion();
  console.log("-------------------------");
  profesor.imprimirInformacion();
  console.log("-------------------------");
  personalServicio.imprimirInformacion();
  
  // Ejecución de métodos adicionales
  empleado.reasignarDespacho("B203");
  estudiante.matricular("Arquitectura");
  profesor.cambiarDepartamento("Arquitectura");
  personalServicio.trasladarSeccion("Decanato");
  
  console.log("-------------------------");
  empleado.imprimirInformacion();
  console.log("-------------------------");
  estudiante.imprimirInformacion();
  console.log("-------------------------");
  profesor.imprimirInformacion();
  console.log("-------------------------");
  personalServicio.imprimirInformacion();
  
   
  