import { AppBar } from "@mui/material"
import { Menu } from "@mui/material"
import { MenuItem } from "@mui/material"
import Link from "next/link"
import { isLogin } from "../store/store"
import Btn_Login from "./Btn_Login"
import { useRecoilValue } from "recoil"
import Btn_Icon from "./Btn_Icon"

export default function Navbar() {
    return (
        <>
            <AppBar className="w-full h-[7%] pl-[1%] pr-[1%] flex flex-row items-center justify-between bg-transparent shadow-none">
                <div>
                    <Link href="/"><a className="text-[25px]">HANSEI-CTF</a></Link>
                </div>
                <div className="flex flex-row space-x-[102px]">
                    <Link href="/about"><a className="text-[18px] font-bold">ABOUT</a></Link>
                    <Link href="/wargame"><a className="text-[18px] font-bold">WARGAME</a></Link>
                    <Link href="/notice"><a className="text-[18px] font-bold">NOTICE</a></Link>
                </div>
                <div>
                    {useRecoilValue(isLogin) === false ? <Btn_Login /> : <Btn_Icon />}
                </div>
            </AppBar>
        </>
    )
}