import React, { useContext, useEffect, useState} from 'react'
import Axios from 'axios'
import { PostContext } from 'utils/context/PostContextState'

import GridContainer from "components_material/Grid/GridContainer.jsx";
import ItemGrid from "components_material/Grid/ItemGrid.jsx";

// import PostCard from 'component_material/Cards/PostCard.jsx'

const BlogPage = (props) => {

  const initialState = {
    posts: [],
    fetched: false,
    fist_page_load: false,
    pages_slice: [1, 2, 3, 4, 5],
    max_page: null,
    items_per_pages: 3,

    currentPage: 1,
    num_posts: null,
    posts_slice: null,
    post_search: [],
    posts_per_page: 3
  }

  const postContext = useContext(PostContext);
  const [stateLocal, setState] = useState(initialState)
  
  useEffect(() => {
    // load posts
    if (!postContext.postsState) {
      Axios.get('posts/get/all_posts')
        .then(res => postContext.handleAddPosts(res.data))
        .catch((err) => console.log(err))
    }

    // pagination
    if (postContext.postsState && !stateLocal.fetched) {
      const indexOfLastPost = 1 * stateLocal.posts_per_page
      const indexOfFirstPost = indexOfLastPost - stateLocal.posts_per_page
      const last_page = Math.ceil(postContext.postsState.length / stateLocal.posts_per_page)

      setState({
        ...stateLocal,
        fetched: true,
        posts: [...postContext.postsState],
        num_posts: postContext.postsState.length,
        max_page: last_page,
        posts_slice: postContext.postsState.slice(indexOfFirstPost,
          indexOfLastPost)
      })
      console.log(true)
    }
  }, [postContext, stateLocal])

  return (
    <div>
      <GridContainer>
        <ItemGrid xs={12} sm={6} md={4}>
          
        </ItemGrid>
      </GridContainer>
    </div>
  )
}

export default BlogPage
