export class Mascota {
  
  public id: number;
	public nombre: string;
 	public tipo: string;
  public FechaDeNacimiento: string;
  

  constructor(nombre:string, tipo:string, FechaDeNacimiento:string) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.FechaDeNacimiento = FechaDeNacimiento;
    
  }


}
