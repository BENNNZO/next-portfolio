import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
    return (
        <section className="flex flex-col-reverse lg:flex-row gap-10 justify-center lg:justify-between items-center h-screen">
            <div className="relative">
                {/* <div>
                    <div className="-z-10 absolute top-0 left-0 w-12 h-12 bg-blue-700 blur-[50px]"></div>
                    <div className="-z-10 absolute top-[25%] left-[10%] w-12 h-12 bg-blue-700 blur-[50px]"></div>
                    <div className="-z-10 absolute top-[67%] left-[50%] w-12 h-12 bg-blue-700 blur-[50px]"></div>
                </div> */}
                <div className="flex flex-row gap-2">
                    <Image src="/logo/slice_1.png" width={48} height={10} alt="logo slice 1" className="invert" />
                    <Image src="/logo/slice_2.png" width={36} height={10} alt="logo slice 2" className="invert" />
                    <Image src="/logo/slice_3.png" width={24} height={10} alt="logo slice 3" className="invert" />
                    <Image src="/logo/slice_4.png" width={12} height={10} alt="logo slice 4" className="invert" />
                </div>
                <h1 className="mt-4 text-3xl sm:text-4xl font-bold">Benjamin Phillips</h1>
                <p className="font-semibold opacity-50">FULL STACK DEVELOPER</p>
            </div>
            <div className="overflow-hidden rounded-[100%] relative max-w-96">
                <img
                    className="relative left-2.5 scale-125 -top-3 drop-shadow-md"
                    src="/img/profile.png"
                    alt="picture of me"
                />
            </div>
        </section>
    )
}