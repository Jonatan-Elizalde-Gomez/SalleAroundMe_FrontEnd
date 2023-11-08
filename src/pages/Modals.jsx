import React from 'react';
import Swal from 'sweetalert2';
import Checkmark from '../assets/checkmark-circle-outline.png';
import Alert from '../assets/alert-circle-outline.png';
import '../App.css';

class Modals extends React.Component {
    showModalDelete = () => {
        Swal.fire({
          html: `
            <div class="w-510px h-197px p-1 ">
              <div class="text-zinc-800 text-xl font-semibold font-Inter text-left">
                <span class="text-zinc-800 text-xl font-semibold font-Inter">Error al eliminar registro</span>
              </div>
              <div class="text-neutral-500 text-base font-normal font-Inter text-left">
                <span class="text-neutral-500 text-base font-normal font-Inter">Descripción del error</span>
              </div>
            </div>
          `,
          confirmButtonText: 'Cancelar', 
          cancelButtonText: 'Aceptar',
          showCancelButton: true,
        }).then((result) => {
            // al presionar el boton aceptar se imprime en consola el mensaje
          if (result.isConfirmed) {
            console.log('Registro eliminado');
          }
        });
      };
  
    showModalErrorDelete = () => {
        Swal.fire({
            html: `
              <div class="w-510px h-342px p-12 rounded">
                <div class="w-111px h-111px relative text-center">  
                  <img src="${Alert}" style="display: block; margin: 0 auto;">
                </div>
                <div class="text-center text-zinc-800 text-xl font-semibold font-Inter">
                  <span class="text-zinc-800 text-xl font-semibold font-Inter">Error al eliminar registro</span>
                </div>
                <div class="text-center text-neutral-500 text-base font-normal font-Inter">
                  <span class="text-neutral-500 text-base font-normal font-Inter">Descripción del error</span>
                </div>
              </div>
            `,
            showConfirmButton: false,
          });
        };
  
    showModalSuccessDelete = () => {
        Swal.fire({
          html: `
            <div class="w-510px h-342px p-12">
              <div class="w-111px h-111px relative text-center">  
                <img src="${Checkmark}" style="display: block; margin: 0 auto;">
              </div>
              <div class="text-center text-zinc-800 text-xl font-semibold font-Inter">
                <span class="text-zinc-800 text-xl font-semibold font-Inter">Registro eliminado</span>
              </div>
              <div class="text-center text-neutral-500 text-base font-normal font-Inter">
                <span class="text-neutral-500 text-base font-normal font-Inter">El registro fue eliminado correctamente</span>
              </div>
            </div>
          `,
          showConfirmButton: false,
        });
      };
      
    render() {
      return (
        <div className='flex justify-center items-center h-screen'>
            <div className='px-8'>
         <button
              className="bg-sky-600 hover:bg-sky-800 text-white text-sm py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={this.showModalDelete}
            >
              Modal 1
            </button>
            </div>
            <div className='px-8'>
            <button
              className="bg-sky-600 hover:bg-sky-800 text-white text-sm py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={this.showModalErrorDelete}
            >
              Modal 2
            </button>
            </div>

            <div className='px-8'>
            <button
              className="bg-sky-600 hover:bg-sky-800 text-white text-sm py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={this.showModalSuccessDelete}
            >
              Modal 3
            </button>
            </div>
        </div>
      );
    }
  };
  
  export default Modals;
  
