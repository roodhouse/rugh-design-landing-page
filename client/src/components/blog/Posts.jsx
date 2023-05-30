import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router";
import parse from "html-react-parser";
import "./styles.css";
import Sidebar from "./sidebar/Sidebar";
import Footer from "../Footer";
import InstagramEmbed from "./InstagramEmbed";
import Services from "../color/schemes/Services";
import { Helmet } from "react-helmet-async";

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
          faScript.src =
            "https://use.fontawesome.com/releases/v5.15.3/js/all.js";
          document.body.appendChild(instaScript);
          document.body.appendChild(pinScript);
          document.body.appendChild(faScript);
        }, 1200);
      }
    }, [insta]);

    return null;
  }; 

  setTimeout(() => {});
  const params = useParams();
  const navigate = useNavigate();

  // This method fetches the records from the database.
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      async function getRecords() {
        const id = params.slug.toString();
        
        const response = await fetch(
          `https://rugh.design:5001/record/${params.slug.toString()}`
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
    }, 900);
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

  // Find the ad div and style
  useEffect(() => {
    const hiddenAdAfter = document.querySelector("#bodyDiv > div:nth-child(3)");
    const hiddenAdBefore = document.querySelector(
      "#bodyDiv > div.mblog-opening > p:nth-child(7) > a:nth-child(5)"
    );
    if (hiddenAdAfter && hiddenAdBefore) {
      const hiddenAdDivBefore =
        hiddenAdBefore.nextSibling.parentElement.parentElement.nextSibling
          .nextSibling;
      const hiddenAdDivAfter = hiddenAdAfter.previousSibling.previousSibling;
      if (hiddenAdDivBefore === hiddenAdDivAfter) {
        hiddenAdDivBefore.classList.add("newAdDivClass");
      }
    }
  }, [isLoading]);

  // Change text format of h2's that are too large
  useEffect(() => {
    // Get all of the H2 elements that match the selector `.cwunew h2`
    const headings = document.querySelectorAll(".cwunew h2");
    // Iterate over the elements and change the text format of each element
    for (const heading of headings) {
      // Split the words by any space character
      const words = heading.textContent.split(" ");
      // For each word capitalize the 1st character then append the 1st character to the remaining lowercase characters
      for (let i = 0; i < words.length; i++) {
        words[i] =
          words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
      }
      // Rejoin the words with a space in between each word
      heading.textContent = words.join(" ");
    }
  }, [isLoading]);

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
  setTimeout(changeImgWidth, 1);

  // style the ad div's
  function styleAdDiv() {
    // Grab all of the ad divs
    let cr_ad = document.getElementsByClassName("cr_ad");
    // Make sure the ad divs exist then turn them into an array and for each one style the parent div
    if (cr_ad.length > 0) {
      Array.from(cr_ad).forEach((el) => {
        el.parentElement.style.marginBottom = "1rem";
        el.parentElement.style.border = "0.1rem solid #676766";
        el.parentElement.style.boxShadow = "1px 4px 9px 1px #676766";
        el.parentElement.style.padding = "1rem";
        el.parentElement.style.borderRadius = "1rem";
      });
    } else {
      return;
    }
  }
  // Run the styleAdDiv after 1 ms
  setTimeout(styleAdDiv, 1);

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

  // Spoiler sections display or hide content based on which spoiler is clicked
  setTimeout(spoilerSection, 1);
  function spoilerSection() {
    setTimeout(() => {
      // Grab spoiler icon divs store them in an array
      const plusIcon = document.querySelectorAll(".su-spoiler-icon");
      const iconArray = Array.from(plusIcon);
      // for each item create an i element, appended it and fill it with the icon
      iconArray.forEach((el) => {
        const iconP = document.createElement("i");
        el.appendChild(iconP);
        iconP.classList.add("fa", "fa-solid", "fa-plus");
      });
      // Grab the spoiler titles and place them in an array
      const spoilerTitle = document.querySelectorAll(".su-spoiler-title");
      const spoilerTitleArray = Array.from(spoilerTitle);
      // On click of any item check if selectedSpoiler is class is applied and if so remove it and hide the content
      spoilerTitleArray.forEach((el) => {
        const spoilerMain = el.parentElement;
        spoilerMain.addEventListener("click", (event) => {
          if (event.target.closest(".su-spoiler-title")) {
            const spoilerContent = el.nextSibling;
            if (spoilerContent.style.display === "block") {
              el.classList.remove("selectedSpoiler");
              spoilerContent.style.display = "none";
              const iconMinus = el.firstChild.firstChild;
              iconMinus.classList.remove("fa-minus");
              iconMinus.classList.add("fa-plus");
            } else {
              el.classList.add("selectedSpoiler");
              spoilerContent.style.display = "block";
              const iconMinus = el.firstChild.firstChild;
              iconMinus.classList.remove("fa-plus");
              iconMinus.classList.add("fa-minus");
            }
            for (const spoiler of spoilerTitleArray) {
              if (spoiler !== el) {
                spoiler.classList.remove("selectedSpoiler");
                spoiler.nextSibling.style.display = "none";
                const iconMinus = spoiler.firstChild.firstChild;
                iconMinus.classList.remove("fa-minus");
                iconMinus.classList.add("fa-plus");
              }
            }
          }
        });
      });
    }, 1000);
  }

  // Get tags function
  let tags = [];
  async function getTags() {
    if (!isLoading) {
      const postTags = records.tags;

      const response = await fetch(`https://rugh.design:5001/tags/`);

      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const allTags = await response.json();
      if (!allTags) {
        window.alert(`no tags`);
        return;
      }

      postTags.forEach((el) => {
        const newTag = allTags.find((tag) => tag.id === el);
        const newNameTag = newTag.name;
        tags.push(newNameTag);
      });
    } else {
      console.log("still loading");
    }
    return tags;
  }
  getTags();
  
  async function metaTag() {
    if(!isLoading) {
      await setTimeout(() => {
          tags.forEach((el) => {
            const newMeta = document.createElement('meta');
            newMeta.setAttribute('property', 'article:tag');
            newMeta.content = el;
            document.getElementsByTagName('head')[0].appendChild(newMeta)
            return (
              `<meta property="article:tag" content=${el}>`
            ) 
          })
        }, 800)
    } else {
      console.log('meta tag func still loading')
    }
    }
metaTag()

// Get categories
let categories = []
async function getCategories() {
  if (!isLoading) {
    const postCategories = records.categories
    const response = await fetch(`https://rugh.design:5001/categories/`);

    if(!response.ok) {
      const message = `An error occured: ${response.statusText}`;
      window.alert(message);
      return;
    }

    const allCats = await response.json();
      if (!allCats) {
        window.alert(`no categories`);
        return;
      }
      
      postCategories.forEach((el) => {
        const newCat = allCats.find((cat) => cat.id === el);
        const newNameCat = newCat.name;
        categories.push(newNameCat);
      });
  } else {
    console.log("cats still loading");
  }
  return categories;
}
// Set primary category in the meta tag
async function metaCat() {
  if(!isLoading) {
    await setTimeout(() => {
        
          const newCategory = document.createElement('meta');
          newCategory.setAttribute('property', 'article:section');
          newCategory.content = categories[0];
          document.getElementsByTagName('head')[0].appendChild(newCategory) 
      }, 800)
  } else {
    console.log('cat meta tag func still loading')
  }
  }
metaCat()



// Description meta
 function truncateExcerpt(string, limit) {
      if ( string.length > limit ) {
        const metaExcerpt = string.substring(0, limit) + '...';
        const newMeta = document.createElement('meta');
        newMeta.setAttribute('name', 'description');
        newMeta.content = metaExcerpt;
        document.getElementsByTagName('head')[0].appendChild(newMeta)
        // Provide for the og description
        const ogNewMeta = document.createElement('meta');
        ogNewMeta.setAttribute('property', 'og:description');
        ogNewMeta.content = metaExcerpt
        document.getElementsByTagName('head')[0].appendChild(ogNewMeta)
        // Provide for the twitter description
        const twNewMeta = document.createElement('meta');
        twNewMeta.setAttribute('name', 'twitter:description');
        twNewMeta.content = metaExcerpt;
        document.getElementsByTagName('head')[0].appendChild(twNewMeta)
      } else {
        console.log('smaller')
      } 
}

 if (!isLoading) {
  truncateExcerpt(records.excerpt.rendered || records.excerpt, 120)
  getCategories()
 }

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <Helmet>
          <title>{records.title.rendered || records.title}</title>
          
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={`${records.title.rendered || records.title}` } />
      <meta property="og:url" content={`https://rugh.design/review/${records.slug}`} />
      <meta property="og:site_name" content="Rugh Design" />
      <meta property="article:publisher" content="https://www.facebook.com/lauraerugh" />
      <meta property="og:updated_time" content={records.modified}/>
      <meta property="og:image" content={records.jetpack_featured_media_url || records.image}/>
      <meta property="og:image:secure_url" content={records.jetpack_featured_media_url || records.image}/>
      <meta property="og:image:width" content='1024'/>
      <meta property="og:image:height" content='1024'/>
      <meta property="og:image:alt" content={`${records.title.rendered || records.title}` }/>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={records.jetpack_featured_media_url || records.image} />
      <meta name="twitter:label1" content="Written by" />
      <meta name="twitter:data1" content={authorName()} />
      <meta name="twitter:label2" content="Time to read" />
      <meta name="twitter:data2" content='Less than a minute' />
        </Helmet>
      )}
      <div id="wrapper" className="w-full h-full">
        {/* <Navbar /> */}
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <div id="containerDiv" className="max-w-[100%] h-full pt-44">
            <div id="mainAndSideDiv" className="block lg:flex xl:mx-8">
              <div
                id="contentDiv"
                className="max-w-[100%] lg:w-[75%] text-center mx-2 mb-2 xl:w-[1034px] xl:mx-0 xl:mr-8"
              >
                <div id="titleDiv" className="mb-2 sm:my-8">
                  <h1 id="header" className="text-4xl">
                    {records.title.rendered || records.title}
                  </h1>
                </div>
                <div
                  id="metaDiv"
                  className="flex flex-row justify-between mb-2"
                >
                  <div id="dateDiv">{flipDate()}</div>
                  <div id="authorDiv">{authorName()}</div>
                </div>
                <div id="postDiv">
                  <div
                    id="bodyDiv"
                    className="[&_h2]:text-3xl
                           [&_h3]:!text-2xl 
                           [&_p]:text-justify [&_p]:my-2 text-center [&_p]:leading-8
                           lg:[&_p]:text-left
                           [&_a]:text-[#8ab7ae]
                           [&_h4]:font-bold
                           sm:[&_h2]:mt-8 
                           sm:[&_h3]:mt-8 
                           sm:[&_p]:my-4
                           sm:[&_h4]:text-xl
                           "
                  >
                    {parsedContent()}
                  </div>
                </div>
              </div>
              <div
                id="sidebarDiv"
                className="hidden lg:flex w-[25%] flex-col items-center justify-center mr-2 mt-60 xl:w-[590px] xl-mr-0"
              >
                <Sidebar />
              </div>
            </div>
            <Services />
            <Footer />
            <InstagramEmbed />
          </div>
        )}
      </div>
    </>
  );
}

export default Posts;
