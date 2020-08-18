import React from 'react'
import Search from './ThunkGitChild/Search'
import Repos from './ThunkGitChild/Repos'


const ThunkGit = () => (
  <div>
    <Search user='gaearon' />
    <Repos />
  </div>
)

export default ThunkGit
