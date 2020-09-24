import React from 'react'
import SearchMenu from 'components_bootstrap/Search/SearchMenu'
import RepoList from 'components_bootstrap/CustomList/RepoList'

const ThunkGit = () => (
  <div>
    <SearchMenu user='gaearon' />
    <RepoList />
  </div>
)

export default ThunkGit
