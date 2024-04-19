import Image from "next/image"

export default function Hero() {
    return (
        <section className="flex flex-col-reverse gap-10 justify-center h-screen">
            <div>
                <div className="flex flex-row gap-2">
                    <Image src="/logo/slice_1.png" width={60} height={10} alt="logo slice 1" className="invert" />
                    <Image src="/logo/slice_2.png" width={45} height={10} alt="logo slice 2" className="invert" />
                    <Image src="/logo/slice_3.png" width={30} height={10} alt="logo slice 3" className="invert" />
                    <Image src="/logo/slice_4.png" width={15} height={10} alt="logo slice 4" className="invert" />
                </div>
                <h1>Benjamin Phillips</h1>
                <p>FULL STACK DEVELOPER</p>
            </div>
            <div className="overflow-hidden rounded-full drop-shadow-2xl relative">
                <Image
                    className="relative left-2.5"
                    src="/img/profile.png"
                    width={500}
                    height={500}
                    alt="picture of me"
                />
            </div>
        </section>
    )
}