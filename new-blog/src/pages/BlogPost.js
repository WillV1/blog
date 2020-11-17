import PostDisplay from './PostDisplay';

function BlogPost(props) {
console.log(props)
  const postDisplay = props.blog.map((post, index) => {
      return <PostDisplay key={index} post={post}
      />
    })

  return (
    <div>
      {postDisplay}
    </div>
  );
}

export default BlogPost;