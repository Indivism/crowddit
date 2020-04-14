import React from 'react'
import { Media } from 'reactstrap';

export default props => (
    <div>
        {props.loggedIn && <div>Welcome to Crowddit</div>}
        <Media>
            <Media left>
                <Media object src="https://www.w3schools.com/images/w3schools_green.jpg">

                </Media>
                <Media body>
                    <Media heading>
                        Reddit
                    </Media>
                    blah
                </Media>
            </Media>
        </Media>
    </div>
)
