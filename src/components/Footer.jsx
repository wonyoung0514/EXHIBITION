import React from 'react';

const Footer = () => {
    return (
        <footer style={style.footer}>
            <p>© 2025 디지털미디어디자인과 이원영</p>
        </footer>
    );
};

const style = {
    footer: {
        backgroundColor: '#eee',
        padding: '1rem',
        textAlign: 'center',
        marginTop: '2rem'
    }
};

export default Footer;