//Constructor base
function DispositivoElectronico(marca){
    this.marca = marca;
};

//Metodo prender
DispositivoElectronico.prototype.encender = function(){
    console.log(`El dispositivo de marca ${this.marca} esta encendido`);
};

//Metodo apagar
DispositivoElectronico.prototype.apagar = function(){
    console.log(`El dispositivo de marca ${this.marca} esta apagado`);
};

//Herencia del Prototipo
function TelefonoMovil(marca, modelo){
    DispositivoElectronico.call(this, marca);
    this.modelo = modelo;
};

TelefonoMovil.prototype = Object.create(DispositivoElectronico.prototype);
TelefonoMovil.prototype.constructor = TelefonoMovil;

//Metodo llamar
TelefonoMovil.prototype.hacerLlamada = function(numero){
    console.log(`Llamando al ${numero} desde ${this.marca} ${this.modelo}`);
};

//Metodo tomarFoto
TelefonoMovil.prototype.tomarFoto = function(){
    console.log(`Tomando una foto con ${this.marca} ${this.modelo}`);
};

const miTelefono = new TelefonoMovil('Samsung', 'Galaxy S21');
miTelefono.encender();
miTelefono.hacerLlamada();
miTelefono.tomarFoto();
miTelefono.apagar();

