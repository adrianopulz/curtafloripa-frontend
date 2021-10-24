import React from "react"
import { useRef } from 'react'
import useIntersectionObserver from '@react-hook/intersection-observer'
import { graphql } from "gatsby"
import YoutubeIcon from "../../YoutubeIcon"
import './video.scss'

const youtube_parser = url => {
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  return (match&&match[7].length === 11) ? match[7] : false;
}

const Video = data => {
  const node = data.node
  const url  = node.relationships.video.url
  const id = youtube_parser(url)

  const containerRef = useRef()
  const lockRef = useRef(false)
  const { isIntersecting } = useIntersectionObserver(containerRef)
  if (isIntersecting) {
    lockRef.current = true
  }

  return (
    <section className={"external-video"} ref={containerRef}>
      {lockRef.current ? (
        <iframe 
          width="560"
          height="315"
          title={node.relationships.video.name}
          src={`https://www.youtube.com/embed/${id}`} 
          frameBorder="0"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="allowfullscreen"
        ></iframe>
      ) : <YoutubeIcon /> }
    </section>
  )
}

export default Video

export const fragment = graphql`
  fragment ParagraphVideo on paragraph__video {
    id
    relationships {
      video: field_video {
        url: field_media_oembed_video
        id
        name
      }
    }
  }
`
