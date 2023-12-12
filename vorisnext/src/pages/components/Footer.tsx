import Link from "next/link"
import style from "@/styles/App.module.css"

const Footer = () =>{
    return(
        <div className={style.footer}>
            <ul>
                <li>
                    &copy; Priscilla Van der Schoot
                </li>
            </ul>
        </div>
    )
}

export default Footer