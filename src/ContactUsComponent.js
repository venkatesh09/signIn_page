import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import LinkingComponent from "./LinkingComponent";
import { Link, Route } from 'react-router-dom';


class ContactUsComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      posts : [
        {
         id: "1",
         title: "My first post",
         excerpt: "This is my first post with more content inside",
         image: "https://bit.ly/2WNi2Ml"
        },
       
        {
         id:"2",
         title: "My second post",
         excerpt: "This is my second post with more content inside",
         image: "https://bit.ly/2WNi2Ml"
        },
      
        {
         id:"3",
         title: "My third post",
         excerpt: "This is my third post with more content inside",
         image: "https://bit.ly/2WNi2Ml"
        },
       ]
    }
  }


  render(){
    const { posts } = this.state;

  return (
    <div style={{ marginTop: 20, padding: 30 }}>

      <h3 style={{alignContent:'center'}}> Contact Us</h3>
      <Grid container spacing={40} justify="center">
        {posts.map(post => (
          <Grid item key={post.title}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="200"
                  image={post.image}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {post.title}
                  </Typography>
                  <Typography component="p">{post.excerpt}</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>

                <Link to={`/linking/${post.id}`} style={{ textDecoration: 'none' }}>
                      <Button color="primary" size="small">
                                View More
                        </Button> 
                </Link>
                
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
     
          {/* <Route exactly path='/linking/:id' component={LinkingComponent}>
          </Route> */}
         
    </div>
  );
}
}


export default ContactUsComponent;