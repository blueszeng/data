echo '启动数据模拟服务器....'
babel-node src/server.js &
babel-node src/gameServer.js
echo '启动服务器成功....'
