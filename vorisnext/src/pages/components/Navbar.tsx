import Link from "next/link"

const Navbar = () =>{
    return(
        <div>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/blog">Blog</Link>
                </li>
                <li>
                    <Link href="/players">Spelers</Link>
                </li>
                <li>
                    <Link href="/games">Wedstrijden</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar