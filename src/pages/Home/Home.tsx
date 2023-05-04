import { FC } from "react";
import AddBlogList from "../../components/AddBlogList/AddBlogList";
import Avatar from "../../ui/Avatar/Avatar";
import styles from './Home.module.scss'
import avatar from '../../assets/person.png'
import Posts from "../../components/Posts/Posts";
import RecommendedBlog from "../../ui/RecommendedBlog/RecommendedBlog";

const Home:FC = () => {

     const tabs = [
        {
          text: "For you",
          name: "For you",
          value: "For you",
          onChange: (arg: any) => {},
        },
        {
          text: "Popular",
          name: "Popular",
          value: "Popular",
          onChange: (arg: any) => {},
        },
        {
          text: "New",
          name: "New",
          value: "New",
          onChange: (arg: any) => {},
        },
        {
          text: "Your tags",
          name: "Your tags",
          value: "Your tags",
          onChange: (arg: any) => {},
        },
      ];
      const mockPosts = [
        {
          id: "1",
          name: "Post 1",
          description: "Description of post 1",
          likes: 10,
          imgUrl: "https://picsum.photos/id/1/200/200",
          time: "2 hours ago",
          liked: false,
          comented: false,
          folowed: false,
          coments: [],
        },
        {
          id: "4",
          name: "Post 4",
          description: "Description of post 4",
          likes: 40,
          imgUrl: "https://picsum.photos/id/4/200/200",
          time: "4 hours ago",
          liked: true,
          comented: false,
          folowed: true,
          coments: [],
        },
        {
          id: "3",
          name: "Post 5",
          description: "Description of post 4",
          likes: 40,
          imgUrl: "https://picsum.photos/id/4/200/200",
          time: "4 hours ago",
          liked: true,
          comented: false,
          folowed: true,
          coments: [],
        },
      ];


    return (
    <div className={styles.wrapper}>

        <div className={styles.left}>
            <div className={styles.blockAdd}>
                <div className={styles.mr}>
                  <Avatar width={70} height={70} url={avatar}/>  
                </div>
               
                <AddBlogList/> 
            </div>
            <Posts tabs={tabs} posts={mockPosts} />
        </div>   
        <div className={styles.right}>
            <div>
              <h2 className={styles.title}>Check out this blogs</h2>
              <div>
                <div className={styles.blog}>
                   <RecommendedBlog userName="Maks" desc="My manager Denis" width={350}/>
                </div>
               
                <div className={styles.blog}>
                   <RecommendedBlog userName="Maks" desc="My manager Denis" width={350}/>
                </div>
                <div className={styles.blog}>
                   <RecommendedBlog userName="Maks" desc="My manager Denis" width={350}/>
                </div>
              </div>
            </div>
        </div>
            
    </div>
    )
}

export default Home;