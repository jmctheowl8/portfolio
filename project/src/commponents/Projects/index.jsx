import './index.scss'
import { useState, useEffect } from 'react'

const projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const images = [
    'https://picsum.photos/200/300?random=1',
    'https://picsum.photos/200/300?random=2',
    'https://picsum.photos/200/300?random=3',
  ]

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length)
    }, 3000) // change image every 3 seconds

    return () => clearInterval(intervalId)
  }, [currentIndex, images])

  return (
    <div className="container project-page">
      <div className="text-zone">
        <h1>My work</h1>

        <div className="gallery">
          <img src={images[currentIndex]} alt="Gallery Image" />
        </div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur corrupti in dolorum obcaecati,
          optio consectetur adipisci, aspernatur iusto nobis ab velit officia nostrum quas doloremque ullam
           reprehenderit soluta labore ratione.
        </p>
      </div>
    </div>
  )
}

export default projects