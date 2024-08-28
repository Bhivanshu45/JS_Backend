require('dotenv').config()

const express = require('express')
// import express from "express"

const app = express()

const port = 4000
// port used to listen 

const gitData = {
    "login": "Bhivanshu45",
    "id": 170157800,
    "node_id": "U_kgDOCiRm6A",
    "avatar_url": "https://avatars.githubusercontent.com/u/170157800?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Bhivanshu45",
    "html_url": "https://github.com/Bhivanshu45",
    "followers_url": "https://api.github.com/users/Bhivanshu45/followers",
    "following_url": "https://api.github.com/users/Bhivanshu45/following{/other_user}",
    "gists_url": "https://api.github.com/users/Bhivanshu45/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Bhivanshu45/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Bhivanshu45/subscriptions",
    "organizations_url": "https://api.github.com/users/Bhivanshu45/orgs",
    "repos_url": "https://api.github.com/users/Bhivanshu45/repos",
    "events_url": "https://api.github.com/users/Bhivanshu45/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Bhivanshu45/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 2,
    "public_gists": 0,
    "followers": 0,
    "following": 1,
    "created_at": "2024-05-18T04:05:01Z",
    "updated_at": "2024-08-28T04:03:20Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req,res)=> {
    res.send('<h1>Go to login or signup for profile</h1>')
})

app.get('/instagram', (req,res)=> {
    res.send('bhivanshu.lawaniya')
})

app.get('/github',(req,res) => {
    res.json(gitData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})