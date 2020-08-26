const http = require('http');
const path = require('path');
const fs = require('fs');

const mimeTypes = {
	'.js': 'text/javascript',
	'.html': 'text/html',
	'.css': 'text/css'
};

http.createServer((req, res) => {
	// 予期しないFaviconリクエストへの対応
	if (req.url === '/favicon.ico') {
		res.writeHead(404);
		res.end();
		return;
	}

	let lookup =  (req.url === '/') ? 'index.html' : req.url;
  if(req.url === '/about') {
    lookup = 'index.html'
  }
	f = 'dist/' + lookup;
	console.log(lookup);
	fs.readFile(f, (err, data) => {

		if (err) { // エラーハンドリング
			if (err.code === 'ENOENT') { // ディレクトリ、又はファイルが見つからない場合のエラー
				res.writeHead(404);
				res.end('Page is  not found.')
				return;
			} else {
				res.writeHead(500);
				res.end('ServerError')
				return;
			}
		}

		let headers = {'Content-Type': mimeTypes[path.extname(f)] || "text/plain"};
    res.writeHead(200, headers);
		res.end(data);
	});
}).listen(8000);
