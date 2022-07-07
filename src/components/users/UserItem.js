import React from 'react';
import PropTypes from 'prop-types';

 /* this is class based component.
  "this" keyword is used to only class based component.
  export class UserItem extends Component {
    render() {

    }
  } 
  render() is used for the class based component*/

const  UserItem = ({user: { login, avatar_url, html_url}}) =>  { 
    return (
      <div className='card text-center'>
        <img src={avatar_url} alt="" className='round-img' style={{ width: '60px' }} />

        <h3>{login}</h3>

        <div>
          <a href={html_url} className="btn btn-dark btn-sm my-1" >
            More
          </a>
        </div>
      </div>
    );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;