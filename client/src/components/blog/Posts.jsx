import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import Navbar from '../Navbar';
import parse from 'html-react-parser';
import './styles.css'
import Footer from '../Footer';
import Placehold from '../../assets/laura.jpg'
import Services from '../color/schemes/Services';

function Posts() {
  const [records, setRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  const navigate = useNavigate();

  // This method fetches the records from the database.
  useEffect(() => {
    setIsLoading(true);
    async function getRecords() {
      const id = params.id.toString();
      const response = await fetch(`http://localhost:5001/record/${params.id.toString()}`);

      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const record = await response.json();
      if (!record) {
        window.alert(`Record with id ${id} not found`)
        navigate('/');
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

    if(isLoading) {
      parsedC = 'loading'
    } else {
      parsedC = parse(records.content.rendered || records.content)
    }


    return parsedC;
  }

  // Filp the date format
  function flipDate() {
    if(!isLoading) {
      let splitDate = records.date.split('T')[0].split('-');
      let newDate = splitDate[1] + '-' + splitDate[2] + '-' + splitDate[0]
      return newDate
    } 
  }
  
  // Name of author change
  function authorName() {
    let theAuthor = records.author
    
    if(theAuthor === 2) {
      theAuthor = 'Laura Rugh'
    } else {
      theAuthor = records.author
    }

    return theAuthor;
  }

  console.log(records)

        // <div>
        //   <h1>{records.title.rendered || records.title}</h1>
        //   <div>{parsedContent()}</div>
        // </div>

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
             
              <div id="paraDiv" className='text-center'>
                {parsedContent()}
              </div>
            </div>
          </div>
          <div id="sidebarDiv" className="hidden sm:block w-[25%]"></div>

          <Services />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Posts