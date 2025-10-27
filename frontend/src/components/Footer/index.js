import '.styles.css';

export function Footer() {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} - Todos os direitos reservados.
                <br /> Desenvolvido por Senai.
            </p>
        </footer>
    );
}

export default Footer;