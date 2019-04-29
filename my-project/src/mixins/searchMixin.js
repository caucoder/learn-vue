export default {
    computed: {
        filterBlogs: function(){
            return this.blogs.filter((blog) => {
                return blog.title.match(this.search);
            });
        }
    }
};