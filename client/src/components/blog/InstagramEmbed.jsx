import React, { useEffect, useState } from "react";

 // load up instagram feed 
 const InstagramEmbed = () => {
    const [insta, setInsta] = useState(false);

    // setInsta to true once the DOMContentLoaded
  document.addEventListener("DOMContentLoaded", (event) => {
    setInsta(true);
    console.log('hi from insta')
  });

    useEffect(() => {
        if (insta) {

            if (window.location.pathname.startsWith("/review")) {
              const script = document.createElement("script");
              script.src = "https://www.instagram.com/embed.js";
              document.body.appendChild(script);
              console.log('Instagram embed')
            } else {
                console.log('test')
            }
        }
    }, [insta]);
  
    return null;
  };

export default InstagramEmbed;