
import React from 'react';
import TimeAgo from 'react-timeago';
import PropTypes from 'prop-types';

const Comment = ({ username, userUrl, content, createAt }) => (
    <div className="comment-box">
        <b>{content}</b>
        <br />
        Submitted 
        <TimeAgo date={createAt} />
         by
         <a href={userUrl}>{username}</a>
    </div>
);

Comment.propTypes = {
    username: PropTypes.string,
    userUrl: PropTypes.string,
    content: PropTypes.string,
    createAt: PropTypes.number,
};

export default Comment;