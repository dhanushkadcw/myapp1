import React from 'react'
import TopicBox from '../components/TopicBox'
import Content from '../components/Content'

export default function Home() {
  return (
    <div>
        <h1>This is Homepage</h1>
        <TopicBox foods='shawarma '>
            <span>This is the discription</span>
        </TopicBox>
        <TopicBox foods='rice'>
            <p>This is a child under the topicbox component</p>
        </TopicBox>
        <TopicBox foods='hoppers'/>
        <Content/>

    </div>
  )
}
