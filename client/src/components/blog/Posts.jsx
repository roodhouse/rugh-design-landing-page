import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router';
import parse from 'html-react-parser';
import './styles.css'
import Footer from '../Footer';
import InstagramEmbed from './InstagramEmbed';
import Services from '../color/schemes/Services';
import { Helmet } from 'react-helmet-async';
import WPAPI from 'wpapi';
import {FaPlusCircle} from 'react-icons/fa'

function Posts() {
  const [records, setRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [style, setStyle] = useState(false);
  const [insta, setInsta] = useState(false);

  // setStyle to true once the DOMContentLoaded
  document.addEventListener("DOMContentLoaded", (event) => {
    setStyle(true);
    setInsta(true);
  });

  // load up instagram feed 
 const InstagramEmbed = () => {
  // setInsta to true once the DOMContentLoaded
  useEffect(() => {
      if (insta) {
            const instaScript = document.createElement("script");
            const pinScript = document.createElement("script");
            const faScript = document.createElement("script");
            instaScript.src = "https://www.instagram.com/embed.js";
            pinScript.src = "//assets.pinterest.com/js/pinit.js";
            faScript.src = "https://use.fontawesome.com/releases/v5.15.3/js/all.js";
            document.body.appendChild(instaScript);
            document.body.appendChild(pinScript);
            document.body.appendChild(faScript);
          } else {
            setTimeout(() => {
              const instaScript = document.createElement("script");
              const pinScript = document.createElement("script");
              const faScript = document.createElement("script");
              instaScript.src = "https://www.instagram.com/embed.js";
              pinScript.src = "//assets.pinterest.com/js/pinit.js";
              faScript.src = "https://use.fontawesome.com/releases/v5.15.3/js/all.js";
              document.body.appendChild(instaScript);
              document.body.appendChild(pinScript);
              document.body.appendChild(faScript);
            }, 1200);
          }
      
  }, [insta]);

  return null;
};

  const params = useParams();
  const navigate = useNavigate();

  setTimeout(() =>{
    
  })
  // This method fetches the records from the database.
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {

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

    }, 900)
    
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
      }, 1200);
    }
  }, [style]);

  // Spoiler sections
  setTimeout(spoilerSection, 1)
  function spoilerSection() {
    setTimeout(() => {
      const plusIcon = document.querySelectorAll('.su-spoiler-icon')
      const iconArray = Array.from(plusIcon)
      console.log(iconArray);
      iconArray.forEach((el) => {
        const iconP = document.createElement('i')
        el.appendChild(iconP)
        iconP.classList.add('fa')
        iconP.classList.add('fa-plus-circle')
        // const styles = window.getComputedStyle(el, '::before')
        // console.log(styles)
        // el.innerHTML = <FaPlusCircle />;
        // const content = styles.content;
        // console.log(content)
      }) 

      iconArray.forEach((el, i) => {
        el.addEventListener('click', (event) => {
          const removeStyle = document.querySelector('.testStyle');
          if(removeStyle) {

            removeStyle.classList.remove('testStyle');
          }
          if (event.target === el ) {
            el.classList.add('testStyle')
            console.log('hi')
        }
        });
      })
      }
    , 1000)
  }

console.log('test')

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
              <h1 id='header' className="text-4xl">
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
          <InstagramEmbed />
        </div>
      )}
    </div>
  );
}

export default Posts