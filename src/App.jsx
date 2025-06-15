import { useState } from "react";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("Public");
  const [hasFriends, setHasFriends] = useState(false); // Toggle for testing

  const publicPosts = [
    {
      user: "Liam Bennett",
      location: "The Tipsy Tavern",
      time: "12m",
      content:
        "Amazing night at The Tipsy Tavern! The 'Midnight Martini' was top notch.",
      image:
        "https://images.unsplash.com/photo-1603570419983-d8f30d0d1ff8?auto=format&fit=crop&w=600&q=80",
      likes: 23,
      comments: 5,
      shares: 2,
    },
  ];

  const friendPosts = hasFriends
    ? [
        {
          user: "Sophia Mitchell",
          location: "The Gilded Grape",
          time: "1h",
          content:
            "Wine night at The Gilded Grape — perfect vibes and great ambiance.",
          likes: 12,
          comments: 3,
          shares: 0,
        },
      ]
    : [];

  const renderPosts = (posts) =>
    posts.map((post, index) => (
      <div key={index} className="post">
        <div className="post-header">
          <div>
            <strong>{post.user}</strong> <br />
            <span className="location">{post.location}</span> •{" "}
            <span className="time">{post.time}</span>
          </div>
          <div>•••</div>
        </div>
        <div className="post-content">{post.content}</div>
        {post.image && <img className="post-image" src={post.image} alt="" />}
        <div className="post-reactions">
          <span>❤️ {post.likes}</span>
          <span>💬 {post.comments}</span>
          <span>🔁 {post.shares}</span>
        </div>
      </div>
    ));

  const renderFriendsTab = () => {
    if (!hasFriends) {
      return (
        <div className="empty-state">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
            alt="No friends"
            className="empty-icon"
          />
          <p>No friends yet</p>
          <button className="invite-button">Invite Friends</button>
        </div>
      );
    }
    return renderPosts(friendPosts);
  };

  return (
    <div className="app">
      <header className="header">
        <h2>BarFinder</h2>
        <input className="search" placeholder="Search" />
      </header>

      <div className="tabs">
        <div className="tab-toggle">
          <button
            className={activeTab === "Public" ? "tab active" : "tab"}
            onClick={() => setActiveTab("Public")}
          >
            Public
          </button>
          <button
            className={activeTab === "Friends" ? "tab active" : "tab"}
            onClick={() => setActiveTab("Friends")}
          >
            Friends
          </button>
        </div>
      </div>

      <div className="feed">
        {activeTab === "Public" ? renderPosts(publicPosts) : renderFriendsTab()}
      </div>

      <nav className="bottom-nav">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1946/1946488.png"
          alt="Home"
          className="nav-icon"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/81/81251.png"
          alt="Search"
          className="nav-icon"
        />
        <img
          src="https://www.freeiconspng.com/thumbs/camera-icon/camera-icon-21.png"
          alt="Camera"
          className="nav-icon"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
          alt="Profile"
          className="nav-icon"
        />
      </nav>
    </div>
  );
}

export default App;
