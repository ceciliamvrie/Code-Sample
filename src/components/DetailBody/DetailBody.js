import React from 'react'

const DetailBody = ({ detailBody, name }) => (
  <div>
    <h4>Why { name }?</h4>
    <p>{ detailBody }</p>
  </div>
)

DetailBody.defaultProps = {
  detailBody: 'No description provided'
}

export default DetailBody
