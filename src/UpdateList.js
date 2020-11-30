import React, {useState} from "react";

function App(){

    const [user, setUser] = useState({
            "id" : 1,
            "title" : "Make a meal",
            "description" : "lorem ipsum",
            "status" : 0,
            "createdAt" : "2019-11-15 18:00"
    });

    return (
        <div>
            <div>{user}</div>
        </div>
    )
}

export default UpdateList;
