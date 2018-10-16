import React from 'react';

const UserList = (props) => {
  const { listOfUsers } = this.store.SOMEWHERE;
  const UserComponents = listOfUsers.map((user) => {
    return (
      <User 
        name={}
        userId={}
      />
    )
  })
  return UserComponents
}


module.exports = UserList;