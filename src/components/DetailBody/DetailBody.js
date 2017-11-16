import React from 'react'

import './styles.sass'

const DetailBody = ({ detailBody, name }) => (
  <div>
    <h4>Why { name }?</h4>
    <hr/>
    <p>{ detailBody }</p>
  </div>
)

DetailBody.defaultProps = {
  detailBody: 'No description provided'
}

export default DetailBody
