import Navbar from "../components/Navbar"

export default function Login() {
    return (
        <>
            <Navbar />
            <div className="w-full h-[91%] flex justify-center items-center">
                <div className="w-[417px] h-[477px] bg-white">
                    <div className="w-full text-center text-[33px]">
                        <h1 className="font-bold mt-[30px]">로그인</h1>
                    </div>
                </div>
            </div>
        </>
    )
}