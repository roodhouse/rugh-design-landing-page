import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Container, TextField, Button, Typography, Paper } from '@mui/material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function CreatePost() {

    //quill state
    const [ value, setValue ] = useState({
        content: ''
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

    // navigate after form is submitted
    const navigate = useNavigate();

    // form state
    const [form, setForm] = useState({
        title: '',
        author: '',
        excerpt: '',
        image: '',
    })

    // update form and setForm 
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    function quillChange(content, delta, source, editor) {
        setValue(editor.getHTML())
        
        console.log(value)
    }


    // on form submit
    async function onSubmit(e) {
        e.preventDefault();
    
        // form["content"] = Object.values(value.ops[0])[0];
        form['content'] = value;
        const newPost = { ...form };

        await fetch('http://localhost:5001/record/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPost),
        })
        .catch(error => {
            window.alert(error);
            return;
        })

        setForm({ title: '', author: '', excerpt: '', image: ''})
        setValue({ content: ''})
        navigate('/dashboard');

    }

  return (
    <>  
        <Container component='main'>
            <Paper sx={{bgcolor: 'red'}}>
                <form onSubmit={onSubmit}>
                    <TextField
                        placeholder='Title'
                        label='title'
                        type='text'
                        id='title'
                        value={form.title}
                        onChange={(e) => updateForm({ title: e.target.value})}
                    
                    />
                    <TextField 
                    
                        placeholder='author'
                        label='author'
                        type='text'
                        id='author'
                        value={form.author}
                        onChange={(e) => updateForm({ author: e.target.value})}
                    
                    />

                    <TextField 
                    
                    placeholder='excerpt'
                    label='excerpt'
                    type='text'
                    id='excerpt'
                    value={form.excerpt}
                    onChange={(e) => updateForm({ excerpt: e.target.value})}
                
                />

                    <ReactQuill 
                        id='quillEditor' 
                        modules={modules} 
                        theme='snow' 
                        value={value} 
                        onChange={quillChange} 
                        placeholder='Content goes here...' />


                    <TextField 
                    placeholder='image'
                    label='image'
                    type='text'
                    id='image'
                    value={form.image}
                    onChange={(e) => updateForm({ image: e.target.value})}
                
                />
                    <div>
                        <input type="submit" value="Create Post" />
                    </div>

                </form>

            </Paper>
        </Container>

    </>
  )
}

export default CreatePost