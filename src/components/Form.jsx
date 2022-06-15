import React, {useState} from 'react'
import { Input, Grid, Textarea, Button } from '@nextui-org/react';
import {useNavigate} from 'react-router-dom'


export default function Form(props) {

  const navigate = useNavigate()


    const userInputHandler = (e) => {
        props.setUserInput({...props.userInput, [e.target.name]: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault()
        props.setList(prev=> [...prev, props.userInput])
        // props.onSavePost(userInput)

        props.setUserInput({
            name:'',
            title: '',
            content: ''    
        })

        navigate('/show')
    }


  return (
    <div style={{display:'flex', flexDirection:'column', marginTop:'5em'}}>
        <form onSubmit={submitHandler}>
         <Grid>
        <Input 
          name= 'name'
          aria-label='n'
          rounded
          bordered
          color="primary" 
          animated= 'true'
          labelLeft='Name:'
          width='70%'
          onChange={userInputHandler}
          value={props.userInput.name}
          css={{margin: '20px'}}
        />
      </Grid>
      <Grid>
        <Input 
          name='title'
          aria-label='t'
          rounded
          bordered
          color="primary" 
          animated= 'true'
          labelLeft='Title:'
          width='70%'
          onChange={userInputHandler}
          value={props.userInput.title}
          css={{margin: '20px'}}
        />
      </Grid>
      <Grid>
        <Textarea
         name='content'
          bordered
          color="primary"
          labelPlaceholder="Content:"
          width='70%'
          css={{margin: '20px'}}
          value={props.userInput.content}
          onChange={userInputHandler}
        />
      </Grid>
      <Grid >
        <Button shadow color="gradient" type='submit' css={{margin: '0 auto'}} >
          Create Post
        </Button>
      </Grid>
        </form>
    </div>
  )
}
