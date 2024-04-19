import Image from 'next/image';

export default function Nav() {
    return (
        <nav className=' fixed top-0 left-0 p-2 flex flex-row justify-between items-center w-screen'>
            <Image
                src="/logo/logo.svg"
                width={75}
                height={100}
                alt='logo'
                className='invert'
            />
            <ul className='flex flex-row gap-2 px-2'>
                <li>
                    <a href="#about">
                        About
                    </a>
                </li>
                <li>
                    <a href="#projects">
                        Projects
                    </a>
                </li>
                <li>
                    <a href="#contact">
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    )
}