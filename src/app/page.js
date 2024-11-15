import Image from "next/image";
import RunningTime from "./Components/RunningTime";
import DownloadButton from "./Components/Button/DownloadButton";

export default function Home() {
  return (
    <div className="px-8 lg:px-24 grid grid-rows-[60px_1fr] min-h-screen">
      <div className="content-center grid grid-cols-[1fr] backdrop-blur">
        <div className="text-center">
          <span>
            <span className="text-orange customHover left">MANILA, PH</span>{" "}
            <RunningTime />
          </span>
        </div>
      </div>
      <div className="grid grid-cols-[1fr_auto] items-center ">
        <div>
          <div className="mb-4 text-3xl lg:text-4xl">
            <span>Hello, My name is </span>
            <br />
            <h1 className="text-orange font-semibold text-4xl lg:text-5xl inline-block customHover left">
              John Carlo Carbonel,
            </h1>
            <br />
            <span>I'am a </span>
            <h1 className="text-orange font-semibold text-4xl lg:text-5xl inline-block customHover left">
              Full-Stack Web Developer
            </h1>
            <br />
            <span>& an aspiring </span>
            <h1 className="text-orange font-semibold text-4xl lg:text-5xl inline-block customHover left">
              DevOps Engineer
            </h1>
            .
          </div>
          <div>
            <DownloadButton />
          </div>
        </div>
        <div className="hidden lg:visible">
          <Image
            style={{ height: "auto", width: "auto" }}
            src="https://media1.tenor.com/m/Q6fRllN1LAQAAAAd/wow.gif"
            height={500}
            width={500}
            alt="Wow"
            unoptimized
            priority
          />
        </div>
      </div>
    </div>
  );
}
