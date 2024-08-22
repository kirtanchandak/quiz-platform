import { RiDeleteBin6Line } from "react-icons/ri";
import { TiPencil } from "react-icons/ti";
import { RiShareBoxLine } from "react-icons/ri";
import { BiSolidToggleRight } from "react-icons/bi";
import { cardData } from "../data/data";
import bin from "../assets/bin.svg"

// eslint-disable-next-line react/prop-types
function Card({ title, questionCount }) {
  return (
    <>
      <div className="relative border-[0.25px] md:flex rounded-xl shadow-md mt-[10px]">
        <div className="bg-[#F9FAFF] rounded-tl-xl md:rounded-bl-xl rounded-bl-none md:rounded-tr-none rounded-tr-xl md:w-1/3 relative">
          <div className="absolute top-0 left-0 bg-[#EDF0FE] font-medium text-sm px-3 py-1 rounded-tl-xl rounded-br-xl text-[#4C6EF5]">
            Open
          </div>
          <div className="py-[37px] px-[66px]">
            <p className="text-2xl font-bold">{title}</p>
            <p className="text-sm font-medium">Total Questions: {questionCount}</p>
          </div>
        </div>
        <div className="flex items-center md:py-[37px] md:px-[66px] px-12 py-4 md:w-2/3">
          <p className="text-gray-600 md:pt-0 pt-2 lg:text-base text-sm">
            Background Details: What needs to be done and why. What needs 
            to be done disrupted. Lorem ipsum dolor sit amet
          </p>
        </div>
        <div className="flex items-center justify-center gap-2 md:py-[37px] md:px-[36px] px-12 py-4">
          <div className="mr-6 text-blue-500">
            <div className="flex justify-center">
              <BiSolidToggleRight className="text-2xl" />
            </div>
            <p className="text-xs">Open</p>
          </div>
          <div className="border-2 border-gray-300 p-2 shadow-md rounded-lg flex items-center justify-center">
            <RiDeleteBin6Line className="text-xl" />
          </div>
          <div className="border-2 border-gray-300 p-2 shadow-md rounded-lg flex items-center justify-center">
            <TiPencil className="text-xl" />
          </div>
          <div className="border-2 border-gray-300 p-2 shadow-md rounded-lg flex items-center justify-center">
            <RiShareBoxLine className="text-xl" />
          </div>
        </div>
      </div>
    </>
  );
}

function CardList() {
  return (
    <div>
       <div className="relative border-[0.25px] border-[#4C6EF5] md:flex rounded-xl shadow-md mt-[10px]">
        <div className="bg-[#F9FAFF] rounded-tl-xl md:rounded-bl-xl rounded-bl-none md:rounded-tr-none rounded-tr-xl md:w-1/3 relative">
          <div className="absolute top-0 left-0 bg-[#F0F1F6] font-medium text-sm px-3 py-1 rounded-tl-xl rounded-br-xl text-[#646669]">
            Closed
          </div>
          <div className="py-[37px] px-[66px]">
            <p className="text-2xl font-bold">Challenge 1</p>
            <p className="text-sm font-medium">Total Questions: 1</p>
          </div>
        </div>
        <div className="flex items-center py-[37px] px-[66px] md:w-2/3">
          <p className="text-gray-600 md:pt-0 pt-2 lg:text-base text-sm">
            Background Details: What needs to be done and why. What needs 
            to be done disrupted. Lorem ipsum dolor sit amet
          </p>
        </div>
        <div className="flex items-center gap-2 py-[37px] px-[36px]">
          <div className="mr-6 text-blue-500">
            <div className="flex justify-center">
              <BiSolidToggleRight className="text-2xl" />
            </div>
            <p className="text-xs text-[#212529]">Closed</p>
          </div>
          <div className="border-2 border-gray-300 p-2 shadow-md rounded-lg flex items-center justify-center">
            <RiDeleteBin6Line className="text-xl" />
          </div>
          <div className="border-2 border-gray-300 p-2 shadow-md rounded-lg flex items-center justify-center">
            <TiPencil className="text-xl" />
          </div>
          <div className="border-2 border-gray-300 p-2 shadow-md rounded-lg flex items-center justify-center">
            <RiShareBoxLine className="text-xl" />
          </div>
        </div>
      </div>
      {cardData.map((card, index) => (
        <Card key={index} title={card.title} questionCount={card.questionCount} />
      ))}
    </div>
  );
}

export default CardList;
