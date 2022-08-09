import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig =  {
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/index' },
        {
          path: '/day_1',
          component: '../pages/Day1',
        },
        {
          path: '/day_1/grail',
          component: '../pages/Day1/grail.tsx'
        },
        {
          path: '/day_1/doubleFly',
          component: '../pages/Day1/doubleFly.tsx'
        },
        {
          path: '/day_2',
          component: '../pages/Day2'
        },
        {
          path: '/day_2/back-stage-manage',
          component: '../pages/Day2/backstageManage.tsx'
        }
      ]
    }
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: 'everyday-interview',
      dll: true,
      locale: {
        enable: true,
        default: 'en-US',
      },
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
}

export default config;
