import { useEffect, useState } from "react";
import {
  fetchFriendsData,
  onSubmitForm,
  handleEdit,
  handleDelete,
} from "./api_services";

function View() {
  const [friendsList, setFriendsList] = useState([]);
  const [open, setOpen] = useState(false);
  const [postData, setPostData] = useState({
    name: "",
    email: "",
  });
  const [data, setData] = useState({
    name: "",
    email: "",
  });

  const toggleEditForm = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  useEffect(() => {
    fetchFriendsData().then((res) => {
      setFriendsList(res);
    });
  }, []);

  return (
    <div className="view">
      <div>
        <p className="heading">Friends List</p>
        <div className="input__house">
          <p className="subtext">Friend's Name:</p>
          <input
            onChange={(e) => setPostData({ ...postData, name: e.target.value })}
            value={postData.name}
            className="input__fields"
            type="text"
          />
          <p className="subtext">Email:</p>
          <input
            onChange={(e) =>
              setPostData({ ...postData, email: e.target.value })
            }
            value={postData.email}
            className="input__fields"
            type="text"
          />
        </div>
        <button
          onClick={() => onSubmitForm(postData)}
          className="submit__friend"
        >
          Submit Friend
        </button>
      </div>
      <hr />
      <div>
        <ul className="friendslist__house">
          {friendsList.map((friend) => {
            return (
              <li key={friend.friend_id}>
                <p>
                  <span className="subtext">Name: </span>
                  {friend.name}
                </p>
                <p>
                  <span className="subtext">Email:</span> {friend.email}
                </p>

                <button onClick={toggleEditForm}>Edit</button>
                <button
                  onClick={() =>
                    handleDelete(friend.friend_id, setFriendsList, friendsList)
                  }
                >
                  Delete
                </button>
                <div className={open ? "input__block" : "input__hidden"}>
                  <input
                    onChange={(e) =>
                      setData({
                        email: friend.email,
                        name: e.target.value,
                      })
                    }
                    type="text"
                    placeholder="Change name"
                  />
                  <input
                    onChange={(e) =>
                      setData({
                        name: friend.name,
                        email: e.target.value,
                      })
                    }
                    type="text"
                    placeholder="Change email"
                  />
                  <button onClick={() => handleEdit(friend.friend_id, data)}>
                    Submit
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default View;
