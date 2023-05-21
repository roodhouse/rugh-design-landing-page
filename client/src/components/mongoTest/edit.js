import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

export default function Edit() {

  const [form, setForm] = useState({
    title: "",
    author: "",
    image: "",
    content: "",
    excerpt: "",
    records: [],
  });


// quill options
const modules = {
    toolbar: [
        [{ font: [] }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
        [{ script:  "sub" }, { script:  "super" }],
        ["blockquote", "code-block"],
        [{ list:  "ordered" }, { list:  "bullet" }],
        [{ indent:  "-1" }, { indent:  "+1" }, { align: [] }],
        ["link", "image", "video"],
        ["clean"],
    ],
}

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      const response = await fetch(`http://localhost:5001/record/${params.id.toString()}`);
      // const response = await fetch(`https://rugh.design:27015/record/${params.id.toString()}`);

      if (!response.ok) {
        const message = `An error has occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const record = await response.json();
      if (!record) {
        window.alert(`Record with id ${id} not found`);
        navigate("/");
        return;
      }

      setForm(record);
    }

    fetchData();

    return;
  }, [params.id, navigate]);

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  function quillChange(content, delta, source, editor) {
    // update the form with the content from quill editor
    updateForm(({content: content}))
}

  async function onSubmit(e) {
    e.preventDefault();

    const editedPost = {
      title: form.title,
      author: form.author,
      content: form.content,
      excerpt: form.excerpt,
      image: form.image
    };

    // This will send a post request to update the data in the database.
    await fetch(`http://localhost:5001/update/${params.id}`, {
      method: "POST",
      body: JSON.stringify(editedPost),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    // await fetch(`https://rugh.design:27015/update/${params.id}`, {
    //   method: "POST",
    //   body: JSON.stringify(editedPost),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    // });

    navigate("/");
  }

  // Convert author int to person
  function authorName() {
    let theAuthor = form.author
    
    if(theAuthor === 2) {
      theAuthor = 'Laura Rugh'
    } else {
      theAuthor = form.author
    }

    return theAuthor;
  }

  // console.log(form.content)
  // console.log(form.content.rendered)

  console.log('test from edit')

  // This following section will display the form that takes input from the user to update the data.
  return (
    <div>
      <h3>Update Record</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={form.title.rendered || form.title}
            onChange={(e) => updateForm({ title: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author: </label>
          <input
            type="text"
            className="form-control"
            id="author"
            value={authorName()}
            onChange={(e) => updateForm({ author: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Image: </label>
          <input
            type="text"
            className="form-control"
            id="image"
            value={form.jetpack_featured_media_url || form.image}
            onChange={(e) => updateForm({ image: e.target.value })}
          />
          <img alt={form.title.rendered || form.title} src={form.jetpack_featured_media_url || form.image} />
        </div>
        
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <ReactQuill
            className="form-control"
            id="quillEditor"
            modules={modules}
            theme="snow"
            value={form.content.rendered || form.content}
            onChange={quillChange}
          />
        </div>
        <br />

        <div className="form-group">
          <input
            type="submit"
            value="Update Record"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
