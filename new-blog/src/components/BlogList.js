import BlogCard from './BlogCard';

function BlogList(props) {
console.log(props)
  const blogList = props.blogList.map((blog, index) => {
      return <BlogCard key={index} blog={blog}
      />
    })

  return (
    <div>
      {blogList}
    </div>
  );
}

export default BlogList;