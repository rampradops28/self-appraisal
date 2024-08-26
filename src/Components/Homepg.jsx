import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faCommentDots, faShareAlt, faUserPlus, faSearch, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';
import Sidenavbar from './Sidenavbar'; // Make sure this path is correct
import Images from '../images/user_profile.png';
import insta from '../images/instagram.png';
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.jpg';

const Homepg = () => {
  const [posts, setPosts] = useState([
    {
      author: 'Robert Downey',
      email: 'drdoom@example.com',
      xp: 10,
      image: Images, // '../images/user_profile.png',
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit...',
      likes: ['steve', 'natasha', 'and 10 others'],
      comments: ['Comment 2', 'Comment 1'],
      showCommentInput: false,
      liked: false,
    },
    {
      author: 'Peter Parker',
      email: 'spiderman@example.com',
      xp: 15,
      image: Images, // '../images/user_profile.png',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
      likes: ['Robert', 'Tony', 'and 10 others'],
      comments: ['Comment 2', 'Comment 1'],
      showCommentInput: false,
      liked: false,
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [comment, setComment] = useState('');
  const [sidenavbarClosed, setSidenavbarClosed] = useState(true);
  const [sharePopup, setSharePopup] = useState(null); // To control the share popup

  const handleCommentClick = (index) => {
    const updatedPosts = [...posts];
    updatedPosts[index].showCommentInput = !updatedPosts[index].showCommentInput;
    setPosts(updatedPosts);
  };

  const handlePostComment = (index, commentText) => {
    const updatedPosts = [...posts];
    updatedPosts[index].comments.unshift(commentText);
    updatedPosts[index].showCommentInput = false;
    setPosts(updatedPosts);
    setComment('');
  };

  const handleDeleteComment = (postIndex, commentIndex) => {
    const updatedPosts = [...posts];
    updatedPosts[postIndex].comments.splice(commentIndex, 1);
    setPosts(updatedPosts);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleToggleSidenavbar = () => {
    setSidenavbarClosed(!sidenavbarClosed);
    const sidebar = document.querySelector('.sidenavbar');
    const mainContent = document.querySelector('.main-content');

    if (sidenavbarClosed) {
      sidebar.classList.add('open');
      mainContent.classList.add('fixed');
    } else {
      sidebar.classList.remove('open');
      mainContent.classList.remove('fixed');
    }
  };

  const handleLikeToggle = (index) => {
    const updatedPosts = [...posts];
    updatedPosts[index].liked = !updatedPosts[index].liked;
    setPosts(updatedPosts);
  };

  const handleShareClick = (index) => {
    setSharePopup(index === sharePopup ? null : index); // Toggle share popup
  };

  const handleFollow = (follower) => {
    console.log(`Followed ${follower}`);
    // Add your follow logic here
  };

  const followers = [
    { name: 'Alice Johnson', image: Images },
    { name: 'Bob Smith', image: Images },
    { name: 'Charlie Brown', image: Images },
    { name: 'Daisy Ridley', image: Images },
    { name: 'Evelyn Morales', image: Images }
  ];

  const hashtags = [
    '#ReactJS',
    '#JavaScript',
    '#WebDevelopment',
    '#CSS',
    '#Frontend'
  ];

  return (
    <div className="container"> 
      <Sidenavbar />
      
      <div className={`main-content ${sidenavbarClosed ? 'sidenavbar-closed' : 'sidenavbar-open'}`}>
      
        <div className="center-content">
          <div className="profile-section">
            <div className="profile-info">
              <img src={Images} alt="Profile" className="profile-image" />
              <h4 className="profile-name">Username</h4>
            </div>
            <div className="search-container">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="search-input"
              />
              <button className="search-btn">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
            <button className="add-post-btn">Add Post</button>
          </div>

          <div className="posts-container">
            {posts.map((post, postIndex) => (
              <div className="post-card" key={postIndex}>
                <div className="post-header">
                  <div className="experience-points">XP: {post.xp}</div>
                </div>
                <div className="post-author">
                  <h5>{post.author}</h5>
                  <span>{post.email}</span>
                </div>
                <img src={post.image} alt="Post" className="post-image" />
                <div className="post-content">
                  <p>{post.content}</p>
                  <div className="post-actions">
                    <button 
                      className={`icon-button ${post.liked ? 'liked active' : ''}`}
                      onClick={() => handleLikeToggle(postIndex)}
                    >
                      <FontAwesomeIcon icon={faThumbsUp} />
                    </button>
                    <button
                      className="icon-button"
                      onClick={() => handleCommentClick(postIndex)}
                    >
                      <FontAwesomeIcon icon={faCommentDots} />
                    </button>
                    <button
                      className="icon-button"
                      onClick={() => handleShareClick(postIndex)}
                    >
                      <FontAwesomeIcon icon={faShareAlt} />
                    </button>
                  </div>
                </div>
                <div className="post-likes">
                  <p>Liked by {post.likes.join(', ')}</p>
                </div>
                <div className="post-comments">
                  <div className="comment-list">
                    {post.comments.map((comment, commentIndex) => (
                      <div key={commentIndex} className="comment-item">
                        <p>{comment}</p>
                        <button
                          className="delete-comment-btn"
                          onClick={() => handleDeleteComment(postIndex, commentIndex)}
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </div>
                    ))}
                  </div>
                  {post.showCommentInput && (
                    <div className="post-comment-input">
                      <input
                        type="text"
                        placeholder="Write a comment..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="comment-input"
                      />
                      <button
                        className="post-btn"
                        onClick={() => handlePostComment(postIndex, comment)}
                      >
                        Post
                      </button>
                    </div>
                  )}
                </div>
                {sharePopup === postIndex && (
                  <div className="share-popup active">
                    <button className="close-popup" onClick={() => setSharePopup(null)}>
                      <FontAwesomeIcon icon={faTimes} />
                    </button>
                    <h4>Share this post</h4>
                    <div className="social-media-logos">
                      <div className="social-media-logo">
                        <img src={facebook} alt="Facebook" />
                      </div>
                      <div className="social-media-logo">
                        <img src={twitter} alt="Twitter" />
                      </div>
                      <div className="social-media-logo">
                        <img src={insta} alt="Instagram" />
                      </div>
                    </div>
                    <button className="share-button">Share</button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="right-sidebar">
        <div className="follower-suggestions">
          <h4>Followers Suggestions</h4>
          <ul className="suggestions-list">
            {followers.map((follower, index) => (
              <li key={index} className="suggestion-item">
                <img src={follower.image} alt={follower.name} className="follower-image" />
                <span>{follower.name}</span>
                <button className="follow-btn" onClick={() => handleFollow(follower.name)}>
                  <FontAwesomeIcon icon={faUserPlus} /> Follow
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="hashtag-suggestions">
          <h4>Popular Hashtags</h4>
          <ul className="suggestions-list">
            {hashtags.map((hashtag, index) => (
              <li key={index} className="suggestion-item">{hashtag}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Homepg;