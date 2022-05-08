import { default as Bike} from '../assets/bikeMap.png';
import { default as Patin} from '../assets/patineteMap.png';



  // get coge todos los vehiculos y los muestra.
  //Esta funcion sera llamada para mostrar los vehiculos en el mapa
  // y poder mostrar las caracteristicas de cada uno.
  // async function MARKERS_DATA() {
  //     const res = await axios.get("http://localhost:8080/api/v1/vehiculos");
  //     console.log(res.data);
  // }
export const MARKERS_DATA = [
  {
    idveh: '1',
    aparcadoOk: true,
    libre: false,
    ubicacion: [40.45315837994751, -3.7266484767199968],
    tipo: Bike
  },
  {
    idveh: '2',
    aparcadoOk: true,
    libre: true,
    ubicacion: [40.44825417535705, -3.727239427533021],
    tipo: Patin
  },
  {
    idveh: '3',
    aparcadoOk: true,
    libre: true,
    ubicacion: [40.45103467433095, -3.7286027050636923],
    tipo: Bike
  },
  {
    idveh: '4',
    aparcadoOk: true,
    libre: false,
    ubicacion: [40.45109528341348, -3.7269433686504914],
    tipo: Patin
  },
  {
    idveh: '5',
    aparcadoOk: true,
    libre: true,
    ubicacion: [40.453108820770204, -3.7285451813995856],
    tipo: Bike
  }
];