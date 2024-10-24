import Image from "next/image";

export default function Loading() {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center min-h-screen mx-auto bg-black p-5">
  <div className="flex gap-5 justify-center md:justify-start">
    <Image 
      src="/images/sp1-m.png" 
      className="loading" 
      width={240} 
      height={240} 
      style={{ filter: "drop-shadow(3px 3px 10px #ffffff)" }} 
      alt="" 
    />
  </div>
  <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl mt-5 md:mt-0 md:ml-5">
    Loading...
  </h1>
</div>

    );
}