

function BlogPost(props) {
  return (
    <div>
      <h2>{props.blog.title}</h2>
      <p>{props.blog.text}</p>
    </div>
  );
}

export default BlogPost;