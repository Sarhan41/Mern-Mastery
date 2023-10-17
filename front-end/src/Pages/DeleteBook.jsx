import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { BackButton, Spinner } from "../components";

const DeleteBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = () => {
    setLoading(true);
    axios.delete(`http://localhost:5555/books/${id}`).then((response) => {
      setLoading(false);
      navigate("/");
    }).catch((error) => {
      setLoading(false);
      alert('An error accured , Please Check Console')
      console.log(error);
    })
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Delete Book</h1>
        {loading ? <Spinner /> : ""}
      <div className="h-[60vh] border-2 border-sky-600  mx-4 justify-center items-center flex-col">
        <h1 className="text-6xl font-bold ml-4">
          Are You Sure You Want To Delete <br />{" "}
          <span className="text-sky-900">"{book.title}"</span> <br />
          Book?
        </h1>
        <div className="w-full items-center justify-center flex">
          <button
            className="bg-sky-400 hover:bg-sky-600 text-4xl font-extrabold w-[300px] rounded-full h-16"
            onClick={handleDelete}
          >
            Yes, Delete it
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteBook;
