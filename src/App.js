import React, {useEffect, useState} from 'react';
import UserTable from './UserTable';
import UserActions from './UserActions';
import axios from 'axios';

const baseUrl = 'https://l4e2a4hnej.execute-api.us-east-1.amazonaws.com/dev';

const getUser = async (setUserDetails) => {
  const response = await axios.get(`${baseUrl}/Users`);
  setUserDetails(response.data);
}
const deleteUser = async (event,userId,setUserDetails) => {
  event.preventDefault();
  await axios.delete(`${baseUrl}/User/${userId}`);
  getUser(setUserDetails);
}

const createUser = async (event, createUserDetails, setUserDetails) => {
  event.preventDefault();
  await axios.post(`${baseUrl}/Users`, createUserDetails);
  getUser(setUserDetails);
}

function App() {
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    getUser(setUserDetails);
  }, []);

  return (
    <div> 
      <h1>User Details Table</h1>
    <React.Fragment>
      <UserTable userDetails={userDetails} />
      <UserActions createUser={createUser} deleteUser={deleteUser} setUserDetails={setUserDetails} />
    </React.Fragment>
    </div>
  );
}

export default App;
