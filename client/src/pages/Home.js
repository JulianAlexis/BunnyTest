import React, { Component } from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  render() {
    return( 
      <div className="linkedin">    
        <div className="link-linkedin">
          <a href="https://www.linkedin.com/oauth/v2/authorization?&response_type=code&client_id=78s8t0db8vcjsk&redirect_uri=http://localhost:3001/linkedin/auth&state=pleaseWork8">Login LinkedIn</a>
        </div>    
      </div>
    )
  }
}
