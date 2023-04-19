import React from 'react'

function AboutAfya() {
  return (
    <article>
        <h2>Afya APP</h2>
        <p>This is a fullstack web application that can be used to register patients in facility and capture patients basic/vital information on each visits.</p>
        <h5>Technologies used:</h5>
        <ol>
            <h5>Client Server</h5>
            <li>React + Vite</li>
            <li>Bootstrap</li>
        </ol>

        <ol>
            <h5>Server</h5>
            <li>Django</li>
            <li>Django Rest Framework for API development</li>
            <li>Database: PostgreSQL (production) and MySQL(development) </li>
        </ol>
    </article>
  )
}

export default AboutAfya