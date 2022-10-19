import { Component } from "react";
import { createPortal } from "react-dom";
//import PropTypes from 'prop-types';

import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {


    render() {
        return createPortal (
            <div className={css.Overlay}>
                <div className={css.Modal}>{ this.props.children}</div>
            </div>,
            modalRoot,
        );
    }
}


/*Modal.propTypes = {

};*/


//export default Modal;
