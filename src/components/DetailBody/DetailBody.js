import React from 'react'

import './styles.sass'

const DetailBody = ({ detailBody, name }) => (
  <div>
    <h4>Why { name }?</h4>
    <hr/>
    <p className="detail-body">{ detailBody }</p>
  </div>
)

// provided default props if no detail body was given
DetailBody.defaultProps = {
  detailBody: 'No description provided'
}

export default DetailBody
