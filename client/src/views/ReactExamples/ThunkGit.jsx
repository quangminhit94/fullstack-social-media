import React from 'react'
import SearchMenu from 'components_bootstrap/Search/SearchMenu'
import RepoList from 'components_bootstrap/CustomList/RepoList'

import BootstrapWrapper from 'HOC/BootstrapWrapper'
const ThunkGit = () => (
  <div>
    <SearchMenu user='gaearon' />
    <RepoList />
  </div>
)

export default BootstrapWrapper(ThunkGit)
