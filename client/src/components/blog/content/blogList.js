import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaEye } from 'react-icons/fa'
import { AiFillDelete } from 'react-icons/ai';
import 'react-quill/dist/quill.snow.css';
import parse from 'html-react-parser';

// Todo:
// 1. Create card for blog posts and replace Record below
// 2. Clean up unneeded code
// 3. Style, mobile first

const Record = (props) => (
  <tr className="border-b bg-[gainsboro] text-[#676766]">
    <td className="px-6 py-4">{props.record.title.rendered || props.record.title}</td>
    <td className="px-6 py-4">{props.record.author}</td>
    <td className="px-6 py-4 w-[50%]">{parse(props.record.excerpt.rendered || props.record.excerpt)}</td>
    <td className="px-6 py-4"><img alt={props.record.title.rendered || props.record.title} src={props.record.jetpack_featured_media_url || props.record.image} /></td>
    <td className="px-6 py-4 flex flex-row justify-between">
    <Link className="text-blue-700 flex items-center" to={`/review/${props.record._id}`}><span className="inline-block mr-1"><FaEye /></span>View</Link> |
      <Link className="text-green-700 flex items-center" to={`/edit/${props.record._id}`}><span className="inline-block mr-1"><FaEdit /></span>Edit</Link> |
      <button className="text-red-700 flex items-center"
        onClick={() => {
          props.deleteRecord(props.record._id);
        }}
      >
        <span className="inline-block mr-1"><AiFillDelete /></span>Delete
      </button>
    </td>
  </tr>
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

  // Display the posts
  return (
    <>
      <div className="max-w-[1000px] mx-auto p-4 pt-60 sm:pt-0 flex flex-col sm:flex-row justify-center w-full h-full">
        <div className="max-w-[100%] text-center sm:text-right flex flex-col items-center sm:items-end">
          <p className="text-4xl text-[#676766] font-bold inline border-b-4 border-[#E5C1C1] pt-4 sm:pt-0">Color Review</p>
          <p className="py-4">transform your space</p>
        </div>
        <div id="allPosts">
          All posts here
        </div>
      </div>
    </>
  );
}


