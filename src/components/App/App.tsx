import { useEffect, useState } from "react";
import fetchFotos from "../../foto-api";
import "./App.css";

import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import toast from "react-hot-toast";
import ImageModal from "../ImageModal/ImageModal";
import { Image } from "./App.type";


interface GalleryResponse {
  results: Image[];
}
export default function App() {
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [gallery, setGallery] = useState<Image[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<boolean>(false);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [imgs, setImgs] = useState<Image | null>(null);

  useEffect(() => {
    if (query === "") {
      return;
    }
    async function getData() {
      try {
        setIsLoaded(true);
        setErrorMessage(false);
        const data: GalleryResponse = await fetchFotos(query, page);
        setGallery((prevGallery) => {
          return [...prevGallery, ...data.results];
        });
        if (data.results.length === 0) {
          toast.error("Invalid request", {
            position: "top-right",
            style: {
              height: "70px",
              width: "350px",
              fontSize: "25px",
            },
          });
        }
      } catch (e) {
        setErrorMessage(true);
      } finally {
        setIsLoaded(false);
      }
    }
    getData();
  }, [page, query]);

  function handleSearch(newQuery: string) {
    setQuery(newQuery);
    setGallery([]);
    setPage(1);
  }

  function handelLoadMore() {
    setPage(page + 1);
  }

  function openModal(img: Image) {
    setImgs(img);
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
    setImgs(null);
  }

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {errorMessage && <ErrorMessage />}
      {gallery.length > 0 && (
        <ImageGallery items={gallery} openModal={openModal} />
      )}
      {modalIsOpen && imgs &&(
        <ImageModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          imgUrl={imgs.urls.regular}
        />
      )}
      {gallery.length > 0 && !isLoaded && (
        <LoadMoreBtn onClick={handelLoadMore} />
      )}
      {isLoaded && <Loader />}
    </div>
  );
}
