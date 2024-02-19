import Image from "next/image";
import Logo from "@assets/img/logo.png";

export default function Brand () {
  return(
    <div className="w-24">
      <Image src={Logo} alt="logo" />
    </div>
  )
}