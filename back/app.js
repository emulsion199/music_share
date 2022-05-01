const express = require('express');
//file system 관련 documentation: https://nodejs.org/api/fs.html
const { readFile, writeFile } = require('fs/promises');
// id generating library
const shortid = require('shortid');
const app = express();
const port = 3200;
const path = './data/'


app.get('/', (req, res) => {
  res.send('Hello World!')
})

//플레이리스트 정보 READ요청 들어오는 경로
app.get('/playlists', async (req, res) => {
  // 한 번 요청마다 적절한 개수의 playlist dat를 response
  res.send('data');
})

//특정 플레이리스트 정보 READ요청 들어오는 경로
app.get('/playlists/:playlistId', async (req, res) => {
  // playlistId에 해당하는 파일을 읽어서 관련 정보를 return
  const playlistId = req.params.playlistId;
  try {
    let playlist = await readFile(path + 'playlists/' + playlistId, 'utf8');
    res.send(playlist);
  } catch {
    res.send('error!');
  }
})

//레이리스트 CREATE 요청 들어오는 경로
app.post('/playlists', async (req, res) => {
  try {
    // * req로 받은 data를 적절히 변형하는 과정 필요
    let data = {};
    await writeFile(path + 'playlists/' + shortid.generate(), JSON.stringify(data));
    res.send('create success');
  } catch (error) {
    console.log(error);
    res.send('error!');
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})