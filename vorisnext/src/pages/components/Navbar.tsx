import Link from "next/link"
import style from "@/styles/App.module.css"

const Navbar = () =>{
    return(
        <div className={style.navbar}>
            <ul>
                <li>
                    <Link href="/" className={style.navlink}>Home</Link>
                </li>
                <li>
                    <Link href="/blog" className={style.navlink}>Blog</Link>
                </li>
                <li>
                    <Link href="/players" className={style.navlink}>Spelers</Link>
                </li>
                <li>
                    <Link href="/games" className={style.navlink}>Wedstrijden</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar