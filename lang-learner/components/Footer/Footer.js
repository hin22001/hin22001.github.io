import styles from './Footer.module.css'

const Footer = ({ children, alignment="center" }) => {
    return (
        <div className={styles.footer} style={{ textAlign: alignment }}>
            { children }
        </div>
    )
}

export default Footer