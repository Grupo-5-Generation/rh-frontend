import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import FormFuncionarios from '../formfuncionarios/FormFuncionarios';
import './ModalFuncionario.css';

function ModalFuncionario() {
    return (
        <>
            <Popup
                trigger={
                    <button 
                        className='border rounded px-4 py-2 hover:bg-white hover:text-indigo-800'>
                        Novo Funcionario
                    </button>
                }
                modal
            >
                <FormFuncionarios />
            </Popup>
        </>
    );
}

export default ModalFuncionario;