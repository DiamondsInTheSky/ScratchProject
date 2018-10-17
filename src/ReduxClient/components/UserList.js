import React from 'react';

const UserList = (props) => {
  const { userList } = props;
  console.log(userList);
  const buttonStyle = {
    backgroundColor: 'blue',
    marginRight: '2px',
    color: 'white'
  }
  const UserComponents = userList.map((user) => {
    return (
      <div><button style={buttonStyle} onClick={()=>{props.addUser({ userid:user.id, userName: user.firstname })}}>{user.firstname}</button></div>
    )
  })
  return (UserComponents)
}


module.exports = UserList;