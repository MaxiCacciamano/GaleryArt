import React, { useEffect } from 'react'
import ImageGrid from './ImageGrid';

export const Home = () => {
    const [images, setImage] = useState([]);

    useEffect(()=>{
        fetch('https://api.example.com/images')
          .then(response=>response.json())
          .then(data=>setImage(data))
    }, [])
  return (
    <div>
        <h1>My Image Galery</h1>
        <ImageGrid images={images}/>
    </div>
  )
}
