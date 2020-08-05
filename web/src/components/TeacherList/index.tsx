import React from 'react';
import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';
import './style.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars3.githubusercontent.com/u/58996235?s=460&u=11e8cb516f930ec53f22d4a378dbaf9851fb6c30&v=4" alt="Giuseppe Foza"/>
                        <div>
                            <strong>Giuseppe Foza</strong>
                            <span>Lógica de Programação</span>
                        </div>
                    </header>

                    <p>
                        Apaixonado por música e tecnologia.
                    </p>

                    <footer>
                        <p>
                            Preço/Hora
                            <strong>R$80,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsAppIcon} alt="whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    )
}

export default TeacherItem;