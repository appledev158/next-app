import Image from "next/image";
import Logo from "@assets/img/logo.png";
import Link from "next/link";

export default function Brand () {
  return(
    <div className="w-24">
      <Link href={"/"}>
        <Image src={Logo} alt="logo" />
      </Link>
    </div>
  )
}