@echo off
echo ================================================
echo   CyberOps — Local Development Server
echo ================================================
echo.
echo Starting local server on http://localhost:8080
echo Press Ctrl+C to stop.
echo.
node -e "const h=require('http'),f=require('fs'),p=require('path'),M={'.html':'text/html','.css':'text/css','.js':'application/javascript','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.ico':'image/x-icon','.webp':'image/webp','.woff2':'font/woff2'};h.createServer((q,r)=>{let u=q.url==='/'?'/index.html':q.url.split('?')[0];let fp=p.join(__dirname,u);if(f.existsSync(fp)&&f.statSync(fp).isFile()){r.writeHead(200,{'Content-Type':M[p.extname(fp)]||'application/octet-stream'});f.createReadStream(fp).pipe(r)}else{r.writeHead(404);r.end('404')}}).listen(8080,()=>{console.log('Server running at http://localhost:8080');console.log('Open this URL in your browser.')})"
pause
