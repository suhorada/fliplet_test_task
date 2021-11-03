# fliplet_test_task

# Backend test task

## Project start
1. Clone repo
2. Add .env at backend/ dir with PORT=3030 and RSS2JSON_URL=https://api.rss2json.com/v1/api.json
3. Start docker
4. Start commands
```
docker build -t [containerName] .
docker run -dp 3030:3030 [containerName]
```
5. Start terminal at frontend/ dir
6. run commands 
```
npm i
npm start
```

After you can go to localhost:3000 and see your website
## Api

### Forks
* GET: localhost:3030/news/rss
query: { rss_url }
