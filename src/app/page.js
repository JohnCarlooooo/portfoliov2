import Image from "next/image";
import RunningTime from "./Components/RunningTime";
import DownloadButton from "./Components/Button/DownloadButton";

export default function Home() {
  return (
    <div className="grid grid-rows-[60px_1fr] min-h-screen">
      <div className="px-24 content-center grid grid-cols-[1fr] backdrop-blur">
        <div className="text-center">
          <span>
            <span className="text-orange customHover left">MANILA, PH</span>{" "}
            <RunningTime />
          </span>
        </div>
      </div>
      <div className="px-24 grid grid-cols-[1fr_auto] items-center">
        <div>
          <div className="mb-4 text-4xl">
            <span>Hello, My name is </span>
            <br />
            <h1 className="text-orange font-semibold text-5xl inline-block customHover left">
              John Carlo Carbonel,
            </h1>
            <br />
            <span>I'am a </span>
            <h1 className="text-orange font-semibold text-5xl inline-block customHover left">
              Full-Stack Web Developer
            </h1>
            <br />
            <span>& an aspiring </span>
            <h1 className="text-orange font-semibold text-5xl inline-block customHover left">
              DevOps Engineer
            </h1>
            .
          </div>
          <div>
            <DownloadButton />
          </div>
        </div>
        <div>
          <Image
            src="https://media1.tenor.com/m/Q6fRllN1LAQAAAAd/wow.gif"
            height={500}
            width={500}
            alt="a man in a suit and tie is wearing glasses and making a surprised face ."
          />
        </div>
      </div>
    </div>
  );
}
