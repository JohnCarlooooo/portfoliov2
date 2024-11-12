"use client";

import { MdDownload } from "react-icons/md";
import PillButton from "./PillButton";
import { motion, useAnimationControls } from "framer-motion";

const DownloadButton = () => {
  const fileName = "John Carlo Carbonel - Oct. 15, 2024.docx";
  const controls = useAnimationControls();
  const animate = async () => {
    await controls.start({ y: 30 });
    await controls.start({ visibility: "hidden", transition: { duration: 0 } });
    await controls.start({ y: -30, transition: { duration: 0.1 } });
    await controls.start({
      visibility: "visible",
      transition: { duration: 0 },
    });
    await controls.start({ y: 0 });
  };
  const handleOnclick = () => {
    animate();
    const a = document.createElement("a");
    const url = `/download/${fileName}`;
    a.href = url;
    a.download = url.split("/").pop();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  return (
    <PillButton
      className="flex flex-row items-center gap-2 overflow-hidden"
      onClick={handleOnclick}
    >
      <span>DOWNLOAD CV</span>
      <motion.span animate={controls}>
        <MdDownload />
      </motion.span>
    </PillButton>
  );
};

export default DownloadButton;
