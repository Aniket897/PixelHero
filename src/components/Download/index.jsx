import { CheckCircle, XCircle } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react"
import DownloadBtn from "./DownloadBtn";
import UserInfo from "./UserInfo";


const qualities = [
    { size: "small", ratio: "640x960" },
    { size: "medium", ratio: "1920x2660" },
    { size: "big", ratio: "2400x3600" },
    { size: "original", ratio: "3850x5640" },
]


const Download = ({ image, close , isHistory }) => {
    const [selectedSize, selectSize] = useState("small");



    const ref = useRef();


    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            close();
        }
    }


    useEffect(() => {
        document.addEventListener("click", handleClickOutside)
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener("click", handleClickOutside)
            document.body.style.overflow = 'unset';
        }
    }, [])




    return (
        <div className="fixed top-0 left-0 bg-[#0000006f] flex items-center justify-center h-screen w-screen">
            <div ref={ref} className="w-[90vw] bg-white text-black p-4 rounded-lg border shadow-md max-h-[90vh] overflow-y-scroll max-lg:flex max-lg:flex-col max-lg:gap-y-[30px]">
                {/* header */}
                <div className="flex items-center justify-between p-4">
                    <p>Preview ID : {image.id}</p>
                    <button
                        onClick={close}>
                        <XCircle size={20} />
                    </button>
                </div>
                <div className="flex gap-5 justify-between w-full max-lg:flex-col">
                    {/* Image Container */}
                    <div className="flex-1 items-center flex justify-center">
                        <img src={image.webformatURL} alt="" />
                    </div>
                    {/* Right Container */}
                    <div className="lg:w-[30%] max-lg:px-2 flex flex-col gap-y-4">
                        <div className="flex flex-col gap-y-5">
                            <p className="font-bold text-xl">Download</p>
                            <div>
                                {qualities.map((item, index) => {
                                    return (
                                        <div
                                            onClick={() => selectSize(item.size)}
                                            className="flex items-center justify-between border p-3 rounded-md cursor-pointer"
                                            key={index}>
                                            <p>{item.size}</p>
                                            <div className="flex items-center gap-4">
                                                <p>{item.ratio}</p>
                                                <div
                                                    className="w-5 h-5 rounded-full border  text-green-500 flex items-center justify-center">
                                                    {selectedSize == item.size && <CheckCircle size={15} weight="fill" />}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            {/* Download Button */}
                            <DownloadBtn
                                image={image}
                                isHistory={isHistory}
                            />
                        </div>
                        <UserInfo image={image} />
                    </div>
                </div>
                <div className="flex items-center gap-2 mt-5 flex-wrap">
                    <p className="font-bold">Tags : </p>
                    {
                        image.tags.split(",").map((item, index) => {
                            return (
                                <span
                                    className="py-2 text-xs px-3 rounded-md bg-gray-200 w-fit"
                                    key={index}>
                                    {item.trim()}
                                </span>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Download;