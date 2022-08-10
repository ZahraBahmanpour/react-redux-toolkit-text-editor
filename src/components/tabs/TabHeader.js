import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import SaveModal from "../modal/Modal";

export default function TabHeader({ title, id, unSaved }) {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const clickHandler = () => {
    navigate(`/${id}`);
  };
  return (
    <>
      {isModalOpen && <SaveModal show={isModalOpen} id={id} />}
      <div onClick={clickHandler}>
        {title.slice(0, 10)}...
        <IoCloseSharp className="text-danger" />
      </div>
    </>
  );
}
