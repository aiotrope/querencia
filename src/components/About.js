import { useState, useEffect } from 'react'
import axios from 'axios'

import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'

import ListItemText from '@mui/material/ListItemText'

const About = () => {
  const url = 'https://jsonplaceholder.typicode.com/posts'
  const [posts, setPosts] = useState([])

  useEffect(() => {
    let mounted = true
    const fetchAllPosts = async () => {
      try {
        const response = await axios.get(url)

        if (response.data && mounted) {
          setPosts(response.data)
        }
      } catch (error) {
        console.error(error)
      }
    }
    fetchAllPosts()

    return () => {
      mounted = false
    }
  }, [])

  return (
    <Box component='main' sx={{ p: 3 }}>
      <Toolbar />
      <List
        sx={{
          width: '100%',
          height: 400,
          maxWidth: 360,
          bgcolor: 'background.paper',
          listStyle: 'none',
        }}
        component='ul'
      >
        {posts.map((element) => (
          <ListItem key={element.id} sx={{ display: 'list-item' }} component='li'>
            <ListItemText>{element.title}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default About
