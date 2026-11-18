import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {competitorResponse} from './src/competitors.mjs';
const root=path.join(path.dirname(fileURLToPath(import.meta.url)),'public');
const catalog=JSON.parse(await fs.readFile(path.join(root,'catalog.json'),'utf8'));
const port=Number(process.env.PORT||4173);
const types={'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.json':'application/json','.jpg':'image/jpeg','.xlsx':'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'};
http.createServer(async(req,res)=>{try{const url=new URL(req.url,`http://127.0.0.1:${port}`);if(url.pathname==='/api/competitors'){
 if(req.method!=='POST'){res.writeHead(405);res.end();return}if(req.headers.origin&&req.headers.origin!==`http://${req.headers.host}`){res.writeHead(403);res.end();return}
 let body='';for await(const chunk of req){body+=chunk;if(body.length>2048){res.writeHead(413);res.end();return}}const result=await competitorResponse(JSON.parse(body),process.env,catalog);res.writeHead(result.status,{'Content-Type':'application/json','Cache-Control':'no-store'});res.end(JSON.stringify(result.body));return}
 const requested=decodeURIComponent(url.pathname==='/'?'/index.html':url.pathname);const file=path.resolve(root,'.'+requested);if(!file.startsWith(root+path.sep)){res.writeHead(403);res.end();return}const bytes=await fs.readFile(file);res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream','X-Content-Type-Options':'nosniff'});res.end(bytes)
}catch(e){res.writeHead(404,{'Content-Type':'application/json'});res.end(JSON.stringify({error:'Requested resource not found'}))}}).listen(port,'127.0.0.1',()=>console.log(`FW27 board: http://127.0.0.1:${port}`));
