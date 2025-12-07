import Image from "next/image"
import Link from "next/link"
import NavItems from "./NavItems"
import UserDropdown from "./UserDropdown"

const Header = () => {
    return (
        <header className="sticky top-0 header">
            <div className="container header-wrapper">
                <Link
                    href={'/'}
                >
                    <Image
                        src={'/assets/icons/logo.svg'}
                        alt="Karmalytics Logo"
                        width={140}
                        height={40}
                        className="h-10 w-auto cursor-pointer"
                    />
                </Link>

                <nav className="hidden sm:block">
                    <NavItems />
                </nav>

                <UserDropdown />
            </div>
        </header>
    )
}

export default Header