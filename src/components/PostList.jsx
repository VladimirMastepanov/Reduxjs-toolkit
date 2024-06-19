import { useSelector, useDispatch } from 'react-redux';
import { postsSelectors, removePost } from '../features/posts/postsSlice.js';

const PosrList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(postsSelecrors.selectAll);

  return (
    <div>
      <h2>Post List</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.content}
            <button onClick={() => dispatch(removePost(post.id))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
    );
};

export default PostList;
