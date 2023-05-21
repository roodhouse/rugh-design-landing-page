import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import parse from "html-react-parser";
import "./styles.css";
import { FaArrowRight } from 'react-icons/fa'
import { FaArrowLeft } from 'react-icons/fa'
import { FaEllipsisH } from 'react-icons/fa'

export default function BlogList() {
  const [records, setRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      // const response = await fetch(`http://localhost:5001/record`);
      const response = await fetch(`http://rugh.design:5001/record`);

      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setRecords(records);
      setIsLoading(false);
    }

    getRecords();

    return;
  }, [records.length]);

  // Remove read more div
  function removeReadMore() {
    if (!isLoading) {
      const readMoreDiv = document.getElementsByClassName('readmorelink')
      if (readMoreDiv.length > 0) {
        Array.from(readMoreDiv).forEach((el) => {
          el.parentElement.remove()
          console.log('items removed, warning above now invalid')
        })
      } else {
        return;
      }
    } 
  }

  removeReadMore();
  
  function Pagination() {
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 6;

    useEffect(() => {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(records.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(records.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, records]);

    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % records.length;
      setItemOffset(newOffset);
    };
    const recordList = currentItems.map((record) => {
      return (
        <div key={record._id} className="flex flex-col lg:flex-row flex-wrap gap-y-20 items-center lg:justify-evenly pb-20 pt-10 lg:max-w-[45%]">
          <div className="max-w-[100%] overflow-hidden border-[0] border-solid border-[#e5e7eb] text-center box-border rounded bg-[rgb(255,255,255)] shadow-[0_2px_1px_-1px_rgba(0,0,0,0.2),0_1px_1px_0_rgba(0,0,0,0.14),0_1px_3px_0_rgba(0,0,0,0.12)]">
            <img
              src={record.jetpack_featured_media_url || record.image}
              alt={record.title.rendered || record.title}
              className="max-w-[100%] w-[100%] h-auto block bg-cover bg-no-repeat bg-center object-cover"
            />
            <div className="p-4">
              <div className="mt-0 mx-0 mb-[0.35em] text-[#676766] font-medium text-2xl leading-8 tracking-normal">
                {record.title.rendered || record.title}
              </div>
              <p className="m-0 font-light text-sm text-justify tracking-[0.01071em] text-[#676766] leading-6">
                {parse(record.excerpt.rendered || record.excerpt)}
              </p>
            </div>
            <div className="flex items-center p-2">
              <Link
                to={`/review/${record.slug}`}
                className="text-[#676766] inline-flex items-center justify-center relative bg-[transparent] outline-[0] border-[0] m-[0] cursor-pointer align-middle no-underline font-normal text-[0.8125rem] tracking-[0.02857em] uppercase
                               min-w-[64px] py-1 px-[5px] rounded transition duration-[250ms]
                               hover:text-[#676766] hover:bg-[hsla(0,41%,83%,.19)]"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      );
    });

    return (
      <>
        <div id="allPosts" className="lg:flex lg:flex-row lg:flex-wrap lg:justify-around lg:items-start">{recordList}</div>
        <div id="pagination">
          <ReactPaginate
            breakLabel={<FaEllipsisH />}
            breakClassName="breakLink"
            nextLabel={<FaArrowRight />}
            nextLinkClassName="nextLink"
            onPageChange={handlePageClick}
            pageRangeDisplayed={1}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel={<FaArrowLeft />}
            previousLinkClassName="previousLink"
            renderOnZeroPageCount={null}
            containerClassName="paginationContainer"
          />
        </div>
      </>
    );
  }

  // Display the posts
  return (
    <>
      <div className="max-w-[1000px] mx-auto pb-4 pt-60 flex flex-col justify-center w-full h-full">
        <div className="max-w-[100%] text-center lg:text-right flex flex-col items-center lg:items-end">
          <p className="text-4xl md:text-5xl text-[#676766] font-bold inline border-b-4 border-[#E5C1C1] pt-4 lg:pt-0">
            Color Review
          </p>
          <p className="py-4">transform your space</p>
        </div>
        <div id="postContainer">{Pagination()}</div>
      </div>
    </>
  );
}
