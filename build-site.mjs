import fs from 'node:fs/promises';
await fs.mkdir('dist',{recursive:true});
await fs.cp('public','dist',{recursive:true,filter:src=>!src.endsWith('.xlsx')});
console.log('Static board packaged. Live AI endpoint requires separate server configuration.');
