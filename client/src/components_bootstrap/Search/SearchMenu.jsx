import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getRepos, clearRepos } from 'store/actions/thunk/thunk_actions'

const SearchMenu = ({ defaultUser, onGet, onClear }) => {
  let _input

  return (
    <div className="container">
      <h5>Getting Git repos by username</h5>
      <div className="row">
        <div className="col">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={() => onGet(_input.value)}
              >
                Get repos
            </button>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="input Git username"
              aria-label=""
              aria-describedby="basic-addon1"
              defaultValue={defaultUser}
              ref={node => _input = node}
            />
          </div>
        </div>
        <div className="col">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => onClear()}
          >
            Clear repos
        </button>
        </div>
      </div>
    </div>
  )
}

SearchMenu.propTypes = {
  defaultUser: PropTypes.string,
  onGet: PropTypes.func,
  onClear: PropTypes.func
}

const mapStateToProps = (state, ownProps) => ({
  defaultUser: ownProps.user
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onGet: (input) => dispatch(getRepos(input)),
  onClear: () => dispatch(clearRepos())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchMenu)
