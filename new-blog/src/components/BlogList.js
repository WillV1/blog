import BlogCard from './BlogCard';

function BlogList(props) {
console.log(props)
  const blogList = props.blogList.map((blog) => {
      return <BlogCard key={blog._id} blog={blog}
      />
    })

  return (
    <div>
      <h1>My Blog Posts</h1>
      {blogList}
    </div>
  );
}

export default BlogList;