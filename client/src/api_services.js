import axios from "axios";

// (get) friends
const fetchFriendsData = async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/friends/");
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};

// (post) a friend
const onSubmitForm = async (postData) => {
  try {
    await axios({
      url: "http://localhost:5000/api/friends",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: postData,
    });

    window.location = "/";
  } catch (err) {
    console.error(err.message);
  }
};

// (update) friend
const handleEdit = async (id, data) => {
  try {
    await axios({
      method: "put",
      url: `http://localhost:5000/api/friends/${id}`,
      data: data,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.error(err.message);
  }
};

// (delete) friend
const handleDelete = async (id, setState, currState) => {
  try {
    await axios({
      url: `http://localhost:5000/api/friends/${id}`,
      method: "DELETE",
    });

    setState(currState.filter((entry) => entry.friend_id !== id));
  } catch (err) {
    console.error(err.message);
  }
};

export { fetchFriendsData, onSubmitForm, handleEdit, handleDelete };
