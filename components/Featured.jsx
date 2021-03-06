import styles from "../styles/Featured.module.css"
import Image from "next/image"

const Featured = () => {
    const images = [
        "/img/pizza.png",
        "/img/paid.png",
        "/img/pizza.png",
    ]
    return (
        <div className={styles.container}>
            <div className={styles.arrowContainer} style={{ left: "0" }}>
                <Image src="/img/arrowl.png" alt="" layout="fill" />
            </div>
            <div className={styles.wrapper}>
                <div className={styles.imgContainer} >
                    <Image src="/img/pizza.png" alt="" layout="fill" objectFit="contain" />
                </div>
            </div>
            <div className={styles.arrowContainer} style={{ right: "0" }}>
                <Image src="/img/arrowr.png" alt="" layout="fill" />
            </div>
        </div>
    )
}

export default Featured