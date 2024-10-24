import Image from "next/image";
export default function PageNotFound() {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center">
        <Image src="/images/error-2.png" width={400} height={400} style={{ filter: "drop-shadow(3px 3px 10px #ffffff)" }} alt="" />
      </div>
    );
  }