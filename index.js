require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const githubData = {
    "login": "harshgharsandiya",
    "id": 114327999,
    "node_id": "U_kgDOBtCBvw",
    "avatar_url": "https://avatars.githubusercontent.com/u/114327999?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/harshgharsandiya",
    "html_url": "https://github.com/harshgharsandiya",
    "followers_url": "https://api.github.com/users/harshgharsandiya/followers",
    "following_url": "https://api.github.com/users/harshgharsandiya/following{/other_user}",
    "gists_url": "https://api.github.com/users/harshgharsandiya/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/harshgharsandiya/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/harshgharsandiya/subscriptions",
    "organizations_url": "https://api.github.com/users/harshgharsandiya/orgs",
    "repos_url": "https://api.github.com/users/harshgharsandiya/repos",
    "events_url": "https://api.github.com/users/harshgharsandiya/events{/privacy}",
    "received_events_url": "https://api.github.com/users/harshgharsandiya/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Harsh Gharsandiya",
    "company": null,
    "blog": "",
    "location": "India",
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 14,
    "public_gists": 0,
    "followers": 3,
    "following": 9,
    "created_at": "2022-09-25T05:53:03Z",
    "updated_at": "2024-03-17T15:40:35Z"
  }

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send("anomy")
})

app.get('/login', (req, res) => {
    res.send('<h1> Please login at chai aur code </h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>Chai aur Code</h2>')
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})