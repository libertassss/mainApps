import UniversalRouter from 'universal-router'
import history from 'history/browser';
const routes = {
  path: '/',
  children: [
    { path: '/subApp3',
      action: () => 'http://localhost:5000/subApp2.js',
      children: [
        {
          path: '/home',
          action: () => 'http://localhost:5000/subApp2.js'
        },
        {
          path: '/button',
          action: () => 'http://localhost:5000/subApp2.js'
        }
      ]
    },
    {
      path: '/subApp1',
      action: () => 'http://localhost:5000/static/main.js',
      children: [
        {
          path: '/main',
          action: () => 'http://localhost:5000/static/main.js',
        },
        {
          path: '/test1',
          action: () => 'http://localhost:5000/static/main.js',
        },
        {
          path: '/test2',
          action: () => 'http://localhost:5000/static/main.js',
        }
      ]
    },
    { path: '/', action: () => 'http://localhost:5000/subApp2.js' }
  ]
}

const router = new UniversalRouter(routes)

const render = (path: string) => {
  router.resolve({ pathname: path }).then((result: any) => {
    var script = document.createElement('script');
    script.src = result;
    document.body.appendChild(script);
  })
}
const { location: { pathname }} = history;
render(pathname)

