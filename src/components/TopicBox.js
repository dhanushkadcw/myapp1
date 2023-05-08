import React from 'react'
import './topicbox.css'

export default function TopicBox(props) {
    const topic = "My favorite food is "

    return (
    <div>
        <div className="TopicBox">
            <span className='text'>{topic}{props.foods}</span>
            <br />
            {this.prop.children}
        </div>
    </div>
  )
}
