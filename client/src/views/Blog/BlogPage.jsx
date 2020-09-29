import React, { useContext, useEffect, useState} from 'react'
import Axios from 'axios'
import { connect } from 'react-redux'
import { compose } from 'redux'

// context
import { PostContext } from 'utils/context/PostContextState'

// material-ui components
import withStyles from "material-ui/styles/withStyles";

// core components
import GridContainer from "components_material/Grid/GridContainer.jsx";
import ItemGrid from "components_material/Grid/ItemGrid.jsx";
import PostCard from 'components_material/Cards/PostCard.jsx'

// custom components
import ConcurrentUserNumber from 'components_custom/ConcurrentUserNumber.jsx'

import registerPageStyle from "assets/jss/views/registerPageStyle.jsx";

const BlogPage = (props) => {
  const { classes, showLoading, ...rest } = props

  // const initialState = {
  //   posts: [],
  //   fetched: false,
  //   fist_page_load: false,
  //   pages_slice: [1, 2, 3, 4, 5],
  //   max_page: null,
  //   items_per_pages: 3,

  //   currentPage: 1,
  //   num_posts: null,
  //   posts_slice: null,
  //   post_search: [],
  //   posts_per_page: 3
  // }

  // const postContext = useContext(PostContext);
  // const [stateLocal, setState] = useState(initialState)
  
  // useEffect(() => {
  //   // load posts
  //   if (!postContext.postsState) {
  //     Axios.get('posts/get/all_posts')
  //       .then(res => postContext.handleAddPosts(res.data))
  //       .catch((err) => console.log(err))
  //   }

  //   // pagination
  //   if (postContext.postsState && !stateLocal.fetched) {
  //     const indexOfLastPost = 1 * stateLocal.posts_per_page
  //     const indexOfFirstPost = indexOfLastPost - stateLocal.posts_per_page
  //     const last_page = Math.ceil(postContext.postsState.length / stateLocal.posts_per_page)

  //     setState({
  //       ...stateLocal,
  //       fetched: true,
  //       posts: [...postContext.postsState],
  //       num_posts: postContext.postsState.length,
  //       max_page: last_page,
  //       posts_slice: postContext.postsState.slice(indexOfFirstPost,
  //         indexOfLastPost)
  //     })
  //     console.log(true)
  //   }
  // }, [postContext, stateLocal])

  // sample
  /**
   * 
  <ListCard>
    <PostCard />
  </ListCard>
   */

  return (
    <div>
      {/* <div className={classes.container}> */}
        <GridContainer justify="center">
          <ItemGrid xs={12} sm={6} md={4}>
            <h1>ABC</h1>
            <PostCard />
            <ConcurrentUserNumber { ...rest }/>
          </ItemGrid>
        </GridContainer>
      {/* </div> */}
    </div>
  )
}

const mapStateToProps = (state) => ({
  showLoading: state.loading_reducer.showLoading
})

export default compose(
  withStyles(registerPageStyle),
  connect(mapStateToProps, null)
)(BlogPage)