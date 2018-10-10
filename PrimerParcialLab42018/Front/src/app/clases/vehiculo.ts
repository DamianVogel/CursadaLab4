export class Vehiculo {
  
  public id: number;
	public modelo: string;
 	public marca: string;
  public cantidadDePuertas: number;
  public RutaDeFoto: string;

  constructor( modelo:string, marca:string, cantidadDePuertas:number) {
    
    this.modelo = modelo;
    this.marca = marca;
    this.cantidadDePuertas = cantidadDePuertas;
    
  
  }


}
