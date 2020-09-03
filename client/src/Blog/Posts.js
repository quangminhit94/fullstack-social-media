import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as ACTIONS from 'store/actions/actions'
import Axios from 'axios'
import moment from 'moment';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";

import Pagination from "react-js-pagination";


export class Posts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      opacity: 0,
      posts_motion: [],
      num_posts: 0,
      page_range: 0,
      activePage: 1,
      posts_per_page: 5,
      posts_slice: [],
      posts_search: [],
      posts_search_motion: []
    }
  }

  componentDidMount() {
    this.handleTransition()
    Axios.get('posts/get/all_posts')
      .then(res => this.props.set_posts(res.data))
      .then(() => this.add_posts_to_state(this.props.posts))
      .catch(err => console.error(err))
  }
  handleTransition = () => {
    setTimeout(() => this.setState({ opacity: 1 }), 400)
  }
  add_search_posts_to_state = (posts) => {
    this.setState({ posts_search: [] })
    this.setState({ posts_search: [...posts] })
    this.animate_search_posts()
  }
  animate_search_posts = () => {
    this.setState({ posts_search_motion: [] })
    let i = 1
    this.state.posts_search.map(post => {  // eslint-disable-line
      setTimeout(() => { this.setState({ posts_search_motion: [...this.state.posts_search_motion, post] }) }, 400 * i);
      i++;
    })
  }
  add_posts_to_state = (posts) => {
    this.setState({ posts: [...posts] })
    this.setState({ num_posts: this.state.posts.length })
    this.setState({ page_range: this.state.num_posts / 5 })

    this.slice_posts();
    this.animate_posts();
  }
  slice_posts = () => {
    const indexOfLastPost = this.state.activePage * this.state.posts_per_page
    const indexOfFirstPost = indexOfLastPost - this.state.posts_per_page


    this.setState({ posts_slice: this.state.posts.slice(indexOfFirstPost, indexOfLastPost) })
  }


  animate_posts = () => {
    this.setState({ posts_motion: [] })
    let i = 1
    this.state.posts_slice.map(post => {  // eslint-disable-line
      setTimeout(() => { this.setState({ posts_motion: [...this.state.posts_motion, post] }) }, 400 * i);
      i++;
    })
  }
  handlePageChange = (pageNumber) => {
    this.setState({ activePage: pageNumber });

    setTimeout(() => { this.slice_posts() }, 50)
    setTimeout(() => { this.animate_posts() }, 100)
  }

  handleSearch = (event) => {
    const search_query = event.target.value

    Axios.get('/api/get/search_posts', { params: { search_query: search_query } })
      .then(res => this.props.posts_success(res.data))
      .then(() => this.add_search_posts_to_state(this.props.search_posts))
      .catch(err => console.error(err))
  }

  RenderPosts = post => (
    <div className="CardStyles">
      <Card >
        <CardHeader
          title={<Link to={{ pathname: '/post/' + post.post.pid, state: { post } }}>
            {post.post.title}
          </Link>}
          subheader={
            <div className="FlexColumn">
              <div className="FlexRow">
                {moment(post.post.date_created).format('MMMM Do, YYYY | h:mm a')}
              </div>
              <div className="FlexRow">
                By:
                <Link style={{ paddingLeft: '5px', textDecoration: 'none' }}
                  to={{ pathname: "/user/" + post.post.author, state: { post } }}>
                  {post.post.author}
                </Link>
              </div>
              <div className="FlexRow">
                <i className="material-icons">thumb_up</i>
                <div className="notification-num-allposts"> {post.post.likes} </div>
              </div>
            </div>
          }
        />
        <br />
        <CardContent>
          <span style={{ overflow: 'hidden' }}> {post.post.body} </span>
        </CardContent>
      </Card>
    </div>
  )

  render() {
    return (
      <div>

        {this.props.is_authenticated
          ? <Link to='/add_post'>
            <Button color='secondary' variant='contained'>Add Post</Button>
          </Link>
          : <Link to='/signup'>
            <Button color='primary' variant='contained'>Sign Up to Add Posts</Button>
          </Link>}

        <div>
          <TextField
            id='search'
            label='Search'
            margin='normal'
            onChange={this.handleSearch}></TextField>
        </div>
        <div>
          {this.state.posts_search
            ? this.state.posts_search_motion.map(post =>
              <this.RenderPosts key={post.pid} post={post}></this.RenderPosts>
            ) : null}
        </div>

        <div>
          <h1>All Posts</h1>
          {this.state.posts
            ? this.state.posts_motion.map(post =>
              <this.RenderPosts key={post.pid} post={post}></this.RenderPosts>
            ) : null}
          <Pagination
            activePage={this.state.activePage}
            itemsCountPerPage={5}
            totalItemsCount={this.state.num_posts}
            pageRangeDisplayed={this.state.page_range}
            onChange={this.handlePageChange}
          />
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts_reducer.posts,
  is_authenticated: state.auth_reducer.is_authenticated,
  search_posts: state.posts_reducer.search_posts
})

const mapDispatchToProps = (dispatch) => ({
  set_posts: posts => dispatch(ACTIONS.fetchDbPosts(posts)),
  posts_success: posts => dispatch(ACTIONS.fetchSearchPosts(posts)),
  posts_failure: () => dispatch(ACTIONS.removeSearchPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
