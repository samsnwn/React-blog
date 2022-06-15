import Post from './Post'
import { Text } from "@nextui-org/react";

export default function ShowAllPosts(props) {


  return (
    <div>
      {props.data.length !== 0 ? <div style={{width: '80%', margin: '0 auto', marginTop: '80px'}}>
        {props.data.map((el,i) => (<Post key={i} index={i}  name={el.name}title={el.title} content={el.content} deleteHandler={props.deleteHandler} />))}
    </div> : <div> <Text
        h1
        size={40}
        css={{
          textGradient: "45deg, $purple600 -20%, $pink600 100%",
        }}
        weight="bold"
      >
        You have no posts yet!
      </Text></div> }
    </div>
    
  )
}
