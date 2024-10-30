const Koa = require('koa'); 
const Router = require('koa-router');
const fs = require('fs');

const content = JSON.parse(fs.readFileSync('./src/content/response.json', 'utf8')); 

const app = new Koa(); 
const router = new Router();

router.get('/api/v1/analysis', async (ctx) => {
  ctx.type = 'application/json';
  ctx.body = content; 
});

app.use(router.routes());
app.use(router.allowedMethods());

app.use(async (ctx, next) => {
  try {
    await next()
    if (ctx.status === 404) {
      ctx.type = 'html';
      ctx.body = '<p>Visit <code>/api/v1/analysis</code> to get the response</p>';  
    }
  } catch (err) {
    ctx.status = 500;
    ctx.body = err.message; 
  }
})

console.log('Server started on http://localhost:3000');
console.log('Visit /api/v1/analysis to get the response');
app.listen(3000);   