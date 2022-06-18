import Image from "next/image";
import styles from "../styles/Navbar.module.css"

const Navbar = () => {
    return (
        <div className={styles.container}>

            <div className={styles.item}>
                <div className={styles.callButton}>
                    <Image src="/img/telephone.png" height="30px" width="30px" alt=""></Image>
                </div>
                <div className={styles.texts}>
                    <div className={styles.text}>ORDER NOW</div>
                    <div className={styles.text}>012 345 6789</div>
                </div>
            </div>

            <div className={styles.item}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>Home</li>
                    <li className={styles.listItem}>Products</li>
                    <li className={styles.listItem}>Menu</li>
                    <Image src="/img/paid.png" alt="" height="50px" width="50px" />
                    <li className={styles.listItem}>Events</li>
                    <li className={styles.listItem}>Blogs</li>
                    <li className={styles.listItem}>Contact</li>
                </ul>
            </div>

            <div className={styles.item}>
                <div className={styles.cart}>
                    <Image src="/img/cart.png" alt="" height="30px" width="30px"></Image>
                    <div className={styles.counter}>2</div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;