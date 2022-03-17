const Koa = require('koa');
const KoaRouter = require('koa-router');
const app = new Koa();
const router = new KoaRouter()

router.get('/hello/:name', async (ctx, next) => {
    let name = ctx.params.name
    ctx.response.body = `<h1>Hello, ${name}</h1>`
})

app.use(router.routes())
app.listen(3000)