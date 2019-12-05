import React, { useState } from 'react';

function UserActions({createUser, deleteUser, setUserDetails}){
    const [userId,setUserId] = useState("");
    const [name,setName] = useState("");
    const [language,setLanguage] = useState("");
    const [description,setDescription] = useState("");

    const [userIdToDelete,setUserIdToDelete] = useState("");
    return(
        <React.Fragment>
            <div>
            <form onSubmit={e => createUser(e, { userId, name, language, description }, setUserDetails)}>
                <label>
                    UserId:
                    <input type="text" name="userId" value={userId} onChange={e => setUserId(e.target.value)} />
                </label>
                <label>
                    Name:
                    <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
                </label>
                <label>
                    Language:
                    <input type="text" name="language" value={language} onChange={e => setLanguage(e.target.value)} />
                </label>
                <label>
                    Description:
                    <input type="text" name="description" value={description} onChange={e => setDescription(e.target.value)} />
                </label>
                    <input type="submit" value="Create" />
            </form>
            </div>

            <div>
            <form onSubmit={e => deleteUser(e, userIdToDelete, setUserDetails)}>
                <label>
                    UserId:
                    <input type="text" name="userId" value={userIdToDelete} onChange={e => setUserIdToDelete(e.target.value)} />
                </label>
                    <input type="submit" value="Delete" />
            </form>
            </div>
        </React.Fragment>
    )

}

export default UserActions;