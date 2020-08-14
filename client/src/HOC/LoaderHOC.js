import React from 'react'
import PropTypes from 'prop-types'

export default (WrappedComponent) => {
  // const LoaderHOC = ({ ...props }) => !!props.textHome ? <div className='loader'></div> : <WrappedComponent {...props} />
  const LoaderHOC = ({ ...props }) => {
    console.log(!!props.textHome)
    return <WrappedComponent {...props} />
  }  
  LoaderHOC.propTypes = {
  }

  return LoaderHOC
}
