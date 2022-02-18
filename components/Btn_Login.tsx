import Link from "next/link"

export default function Btn_Login() {
    return (
        <>
            <Link href="/login"><button className="border-[3px] w-[102px] h-[42px] border-[#1A74FB] rounded-full">로그인</button></Link>
        </>
    )
}