import { Component } from '@angular/core';
import { marcadores } from 'src/app/models/marcadores';

@Component({
  selector: 'app-indumentaria',
  templateUrl: './indumentaria.component.html',
  styleUrls: ['./indumentaria.component.css']
})
export class IndumentariaComponent {
// PROPIprecio PÚBLICA (TIPO ARRAY)
public info: marcadores[];
constructor(){
  this.info = [
    {
      id: "",
      nombre: "Posca Amarillo",
      precio: 8000,
      imagen: "https://acdn.mitiendanube.com/stores/001/421/947/products/amarillo1-0e6d8923aed4c6853616409610867820-1024-1024.jpg",
      alt: "Posca Mop'r Rosado"
    },
    {
      id: "",
      nombre: "Posca Dorado",
      precio: 5700,
      imagen: "https://nacional.cl/media/catalog/product/cache/8c23bea774b3b1fa2a2bbbf684ab2c26/7/0/70024206-1.jpg",
      alt: "Marcador Posca Amarillo"
    },
    {
      id: "",
      nombre: "Posca Plateado",
      precio: 8000,
      imagen: "https://arteacr.com/wp-content/uploads/2020/06/27848-Marcador-Posca-plateado-PC-8K-PX113613000-600x600.jpg",
      alt: "Aerosol Hardcore"
    },
    {
      id: "",
      nombre: "Posca Naranja",
      precio: 8000,
      imagen: "https://http2.mlstatic.com/D_NQ_NP_928110-MLA49437144583_032022-O.webp",
      alt: "Aerosol Hardcore"
    }
  ]
}
}
