import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Container, TextField, Button, Typography, Paper } from '@mui/material';

function CreatePost() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        title: '',
        author: '',
        content: '',
        image: '',
    })

    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    async function onSubmit(e) {
        e.preventDefault();

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

        setForm({ title: '', author: '', content: '', image: ''})
        navigate('/');

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
                    
                    placeholder='content'
                    label='content'
                    type='text'
                    id='content'
                    value={form.content}
                    onChange={(e) => updateForm({ content: e.target.value})}
                
                />
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