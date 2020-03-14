import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import moment from 'moment';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";

import Pagination from "react-js-pagination";

export default function PostsHooks() {
  const [posts, setPosts] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [opacity, setOpacity] = useState(0);
  const [posts_motion, setPosts_motion] = useState([]);
  const [num_posts, setNum_posts] = useState(0);
  const [page_range, setPage_range] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const [posts_per_page, setPosts_per_page] = useState(5);
  const [posts_slice, setPosts_slice] = useState([]);
  const [posts_search, setPosts_search] = useState([]);
  const [posts_search_motion, setPosts_search_motion] = useState([]);

  useEffect(
    () => {
      const fetchData = () => {
        Axios.get('posts/get/all_posts')
          .then(res => setPosts(res.data))
          // .then(() => setPosts(this.props.posts))
          .catch(err => console.error(err))
      }

      fetchData()
    },
    []
  )
  return (
    <div>
      {posts.map((post) => <p>{post.body}</p>)}
    </div>
  )
}
