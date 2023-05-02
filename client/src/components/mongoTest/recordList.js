import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaEye } from 'react-icons/fa'
import { AiFillDelete } from 'react-icons/ai';
import 'react-quill/dist/quill.snow.css';
import parse from 'html-react-parser';


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

export default function RecordList() {
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

  // This method will delete a record
  async function deleteRecord(id) {
    await fetch(`http://localhost:5001/${id}`, {
      method: "DELETE"
    });

    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }

  // This method will map out the records on the table
  function recordList() {
    return records.map((record) => {
      if (record.author === 2) {
        record.author = 'Laura Rugh'
      }
      
      return (
        <Record
          record={record}
          deleteRecord={() => deleteRecord(record._id)}
          key={record._id}
        />
      );
    });
  }

  console.log(records[4])
  // This following section will display the table with the records of individuals.
  return (
    <>
      <h3 className="p-4 text-[#676766]">Blog Posts</h3>
      <table className="w-full text-left font-light">
        <thead className="border-b bg-[gainsboro] font-medium text-[#676766]">
          <tr>
            <th className="px-6 py-4">Title</th>
            <th className="px-6 py-4">Author</th>
            <th className="px-6 py-4">Excerpt</th>
            <th className="px-6 py-4">Image</th>
            <th className="px-6 py-4">Action</th>
          </tr>
        </thead>
        <tbody>{recordList()}</tbody>
      </table>
    </>
  );
}
