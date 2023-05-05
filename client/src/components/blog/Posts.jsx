import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import parse from 'html-react-parser';
import './styles.css'
import Footer from '../Footer';
import Services from '../color/schemes/Services';
import { Helmet } from 'react-helmet-async';
import WPAPI from 'wpapi';

function Posts() {
  const [records, setRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [style, setStyle] = useState(false);

  // setStyle to true once the DOMContentLoaded
  document.addEventListener("DOMContentLoaded", (event) => {
    setStyle(true);
  });

  const params = useParams();
  const navigate = useNavigate();

  // This method fetches the records from the database.
  useEffect(() => {
    setIsLoading(true);
    async function getRecords() {
      const id = params.id.toString();
      const response = await fetch(
        `http://localhost:5001/record/${params.id.toString()}`
      );

      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const record = await response.json();
      if (!record) {
        window.alert(`Record with id ${id} not found`);
        navigate("/");
        return;
      }

      setRecords(record);
      setIsLoading(false);
    }

    getRecords();

    return;
  }, []);

  // parse the html from the content
  function parsedContent() {
    let parsedC;

    if (isLoading) {
      parsedC = "loading";
    } else {
      parsedC = parse(records.content.rendered || records.content);
    }

    return parsedC;
  }

  // Filp the date format
  function flipDate() {
    if (!isLoading) {
      let splitDate = records.date.split("T")[0].split("-");
      let newDate = splitDate[1] + "-" + splitDate[2] + "-" + splitDate[0];
      return newDate;
    }
  }

  // Name of author change
  function authorName() {
    let theAuthor = records.author;

    if (theAuthor === 2) {
      theAuthor = "Laura Rugh";
    } else {
      theAuthor = records.author;
    }

    return theAuthor;
  }

  // Change width of image containers
  function changeImgWidth() {
    let imgArr = [];
    let originalDiv = document.querySelectorAll('[id^="attachment_"]');
    imgArr.push(originalDiv);
    let newImgArr = imgArr[0];

    newImgArr.forEach((img) => {
      img.style.maxWidth = "100%";
    });
  }

  changeImgWidth();

  // hide p&S ad
  function hideAd() {
    let cr_ad = document.getElementsByClassName("cr_ad");
    if (cr_ad.length > 0) {
      Array.from(cr_ad).forEach((el) => el.parentElement.remove());
    } else {
      return;
    }
  }

  hideAd();

  // Change the style of toc after doc loads
  useEffect(() => {
    if (style) {
      const toc = document.querySelector(".cr_toc");
      if (toc) {
        toc.style.marginBottom = "0.5rem";
      }
    } else {
      setTimeout(() => {
        const toc = document.querySelector(".cr_toc");
        if (toc) {
          toc.style.marginBottom = "0.5rem";
        }
      }, 200);
    }
  }, [style]);

  return (
    <div id="wrapper" className="w-full h-full">
      {/* <Navbar /> */}
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div id="containerDiv" className="max-w-[100%] h-full pt-44">
          <div
            id="contentDiv"
            className="max-w-[100%] sm:w-[75%] text-center mx-2 mb-2"
          >
            <div id="titleDiv" className="mb-2">
              <h1 className="text-4xl">
                {records.title.rendered || records.title}
              </h1>
            </div>
            <div id="metaDiv" className="flex flex-row justify-between mb-2">
              <div id="dateDiv">{flipDate()}</div>
              <div id="authorDiv">{authorName()}</div>
            </div>
            <div id="postDiv">
              <div
                id="bodyDiv"
                className="[&_h2]:text-3xl 
                           [&_h3]:!text-2xl 
                           [&_p]:text-justify [&_p]:my-2 text-center [&_p]:leading-8
                           [&_a]:text-[#8ab7ae]
                           [&_h4]:font-bold
                           "
              >
                {parsedContent()}
              </div>
            </div>
          </div>
          <div id="sidebarDiv" className="hidden sm:block w-[25%]"></div>
          <Services />
          <Footer />
          <Helmet>
            <script
              async
              defer
              src="//assets.pinterest.com/js/pinit.js"
            ></script>
          </Helmet>
        </div>
      )}
    </div>
  );
}

export default Posts