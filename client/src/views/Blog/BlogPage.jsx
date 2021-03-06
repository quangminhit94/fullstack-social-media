import React, { useEffect, useState, Fragment } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';

// material-ui components
// import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button'
// import IconButton from '@material-ui/core/IconButton'
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

// core components
import GridContainer from 'components_material/Grid/GridContainer.jsx';
import ItemGrid from 'components_material/Grid/ItemGrid.jsx';
import PostCard from 'components_material/Cards/PostCard.jsx';

import blogPageStyle from './blogPageStyle.jsx';

const BlogPage = (props) => {
  const { classes, showLoading, ...rest } = props;

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
    posts_per_page: 3,
  };

  const [getPost, setPost] = useState(initialState.posts);

  const fetchPosts = async () => {
    const res = await Axios.get('posts/get/all_posts');
    setPost(res.data);
  };
  useEffect(() => {
    console.log(getPost);
    // load posts
    fetchPosts();

    // // pagination
    // if (postContext.postsState && !stateLocal.fetched) {
    //   const indexOfLastPost = 1 * stateLocal.posts_per_page
    //   const indexOfFirstPost = indexOfLastPost - stateLocal.posts_per_page
    //   const last_page = Math.ceil(postContext.postsState.length / stateLocal.posts_per_page)

    //   setState({
    //     ...stateLocal,
    //     fetched: true,
    //     posts: [...postContext.postsState],
    //     num_posts: postContext.postsState.length,
    //     max_page: last_page,
    //     posts_slice: postContext.postsState.slice(indexOfFirstPost,
    //       indexOfLastPost)
    //   })
    //   console.log(true)
    // }
  }, []);

  const renderedPosts = getPost ? (
    Object.values(getPost).map((post, key) => {
      return (
        <ItemGrid key={key} xs={12} sm={6} md={6}>
          <PostCard
            headerColor="blue"
            cardTitle={
              <Link
                to={{
                  pathname: `/blog/post/${post.pid}/comments`,
                  state: { post },
                }}
              >
                {post.title}
              </Link>
            }
            cardSubtitle={<p>cardSubtitle</p>}
            content={<span>{post.body}</span>}
            footer={
              <Fragment>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </Fragment>
            }
          />
        </ItemGrid>
      );
    })
  ) : (
    <p>No data show</p>
  );

  return (
    <div>
      <div className={classes.container}>
        <GridContainer justify="center">{renderedPosts}</GridContainer>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  showLoading: state.loading_reducer.showLoading,
});

export default compose(
  withStyles(blogPageStyle),
  connect(mapStateToProps, null),
)(BlogPage);
