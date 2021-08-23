import React from "react"
import { graphql } from "gatsby"
import './video.scss'

const youtube_parser = url => {
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  return (match&&match[7].length==11)? match[7] : false;
}

const Video = data => {
  const node = data.node
  const url  = node.relationships.video.url
  const id = youtube_parser(url)

  return (
    <section className={"external-video"}>
      <iframe 
        width="560" 
        height="315" 
        src={`https://www.youtube.com/embed/${id}`} 
        title={node.relationships.video.name}
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
      </iframe>
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
