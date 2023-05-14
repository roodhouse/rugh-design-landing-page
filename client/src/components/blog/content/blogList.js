import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import 'react-quill/dist/quill.snow.css';
import parse from 'html-react-parser';
import './styles.css'

// Todo:
// 2. Clean up unneeded code
// 3. Style, mobile first
// 4. Figure out how to sort with mongodb
// 5. Figure out pagination with mongodb react

const Record = (props) => (
  
  <div className="flex flex-col sm:flex-row flex-wrap gap-y-20 items-center sm:justify-evenly pb-20 pt-10">
    <div className="max-w-[100%] overflow-hidden border-[0] border-solid border-[#e5e7eb] text-center box-border rounded bg-[rgb(255,255,255)] shadow-[0_2px_1px_-1px_rgba(0,0,0,0.2),0_1px_1px_0_rgba(0,0,0,0.14),0_1px_3px_0_rgba(0,0,0,0.12)]">
      <img src={props.record.jetpack_featured_media_url || props.record.image} alt={props.record.title.rendered || props.record.title} className="max-w-[100%] w-[100%] h-auto block bg-cover bg-no-repeat bg-center object-cover"/>
      <div className="p-4">
        <div className="mt-0 mx-0 mb-[0.35em] text-[#676766] font-medium text-2xl leading-8 tracking-normal">{props.record.title.rendered || props.record.title}</div>
        <p className="m-0 font-light text-sm text-justify tracking-[0.01071em] text-[#676766] leading-6">{parse(props.record.excerpt.rendered || props.record.excerpt)}</p>
      </div>
      <div className="flex items-center p-2">
        <Link to={`/review/${props.record.slug}`} className="text-[#676766] inline-flex items-center justify-center relative bg-[transparent] outline-[0] border-[0] m-[0] cursor-pointer align-middle no-underline font-normal text-[0.8125rem] tracking-[0.02857em] uppercase
                               min-w-[64px] py-1 px-[5px] rounded transition duration-[250ms]
                               hover:text-[#676766] hover:bg-[hsla(0,41%,83%,.19)]">
                                Read More</Link>

      </div>
    </div>
  </div>
);

export default function BlogList() {
  const [records, setRecords] = useState([]);

  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:5001/record/`);

      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setRecords(records);
    }

    getRecords();

    return; 
  }, [records.length]);


  // This method will map out the records on the table
  function recordList() {
    return records.map((record) => {
      if (record.author === 2) {
        record.author = 'Laura Rugh'
      }
      
      return (
        <Record
          record={record}
          key={record._id}
        />
      );
    });
  }

  console.log(records)
  console.log(recordList())

  // Display the posts
  return (
    <>
      <div className="max-w-[1000px] mx-auto p-4 pt-60 sm:pt-0 flex flex-col sm:flex-row justify-center w-full h-full">
        <div className="max-w-[100%] text-center sm:text-right flex flex-col items-center sm:items-end">
          <p className="text-4xl text-[#676766] font-bold inline border-b-4 border-[#E5C1C1] pt-4 sm:pt-0">Color Review</p>
          <p className="py-4">transform your space</p>
        </div>
        <div id="allPosts">
          {recordList()}
        </div>
      </div>
    </>
  );
}


