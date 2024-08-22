import { RiDeleteBin6Line } from "react-icons/ri";
import { TiPencil } from "react-icons/ti";
import { RiShareBoxLine } from "react-icons/ri";
import { BiSolidToggleRight } from "react-icons/bi";
import { cardData } from "../data/data";

// eslint-disable-next-line react/prop-types
function Card({ title, questionCount }) {
  return (
    <>
      <div className="relative border-[1px] border-blue-500 md:flex rounded-lg shadow-xl mt-8">
        <div className="bg-gray-100 rounded-tl-lg rounded-bl-lg md:w-1/3 relative">
          <div className="absolute top-0 left-0 bg-gray-200 text-blue-500 font-medium text-sm px-3 py-1 rounded-tl-lg rounded-br-lg">
            Open
          </div>
          <div className="p-8">
            <p className="text-2xl font-bold">{title}</p>
            <p className="text-sm font-medium">Total Questions: {questionCount}</p>
          </div>
        </div>
        <div className="md:p-8 p-4 md:w-2/3">
          <p className="text-gray-600 md:pt-0 pt-2 lg:text-base text-sm">
            Background Details: What needs to be done and why. What needs 
            to be done disrupted. Lorem ipsum dolor sit amet
          </p>
        </div>
        <div className="flex gap-2 items-center p-8 pt-2 md:pt-6">
          <div className="mr-6 text-blue-500">
            <div className="flex justify-center">
              <BiSolidToggleRight className="text-2xl" />
            </div>
            <p className="text-sm">Open</p>
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
      {cardData.map((card, index) => (
        <Card key={index} title={card.title} questionCount={card.questionCount} />
      ))}
    </div>
  );
}

export default CardList;
