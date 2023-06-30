# 前端工程化

前端工程化就是致力于提升工程的开发效率、协作效率、项目质量，贯穿项目设计、开发、测试、上线、维护的整个过程。

## 优势 ​

### 在开发层面

1. 引入了模块化和包的概念，作用域隔离，解决了代码冲突的问题
2. 按需导出和导入机制，让编码过程更容易定位问题
3. 自动化的代码检测流程，有问题的代码在开发过程中就可以被发现
4. 编译打包机制可以让使用开发效率更高的编码方式，比如 Vue 组件、 CSS 的各种预处理器
5. 引入了代码兼容处理的方案（ e.g. Babel ），可以让自由使用更先进的 JavaScript 语句，而无需顾忌浏览器兼容性，因为最终会帮转换为浏览器兼容的实现版本
6. 引入了 Tree Shaking 机制，清理没有用到的代码，减少项目构建后的体积

### 团队协作

1. 统一的项目结构 ​

以前的项目结构比较看写代码的人的喜好，虽然一般在研发部门里都有 “团队规范” 这种东西，但靠自觉性去配合的事情，还是比较难做到统一，特别是项目很赶的时候。
工程化后的项目结构非常清晰和统一，以 Vue 项目来说基本都有如下目录结构：

- `src` 是源码目录
- `src/main.ts` 是入口文件
- `src/views` 是路由组件目录
- `src/components` 是子组件目录
- `src/router` 是路由目录

2. 统一的代码风格

写代码时会有诸如字符串用双引号还是单引号，缩进是 Tab 还是空格，如果用空格到底是要 4 个空格还是 2 个空格等一堆 “没有什么实际意义” 、但是不统一的话协作起来又很难受的问题。

3. 可复用的模块和组件
   在前端工程化里，可以抽离成一个开箱即用的 npm 组件包，并且很多包都提供了模块化导出，配合构建工具的 Tree Shaking ，可以抽离用到的代码，没有用到的其他功能都会被抛弃，不会一起发布到生产环境。

4. 代码健壮性有保障
   在开发阶段 TypeScript 编译器就会检查代码是否有问题，而不是之前必须在运行阶段才能发现。

## 实践工程化的流程 ​

基于 Vue 3 的项目，最主流的工程化组合拳有以下两种：

| 常用方案 | Runtime | 构建工具 | 前端框架 |
| :------: | :-----: | :------: | :------: |
|  方案一  |  Node   | Webpack  |   Vue    |
|  方案二  |  Node   |   Vite   |   Vue    |

方案一是比较传统并且过去项目使用最多的方案组合，但从 2021 年初随着 Vite 2.0 的发布，伴随着更快的开发体验和日渐丰富的社区生态，新项目很多都开始迁移到方案二。

### 工程化的基石 Node.js

Node.js （简称 Node ） 是一个基于 Chrome V8 引擎构建的 JS 运行时（ JavaScript Runtime ）。
它让 JavaScript 代码不再局限于网页上，还可以跑在客户端、服务端等场景，极大的推动了前端开发的发展，现代的前端开发几乎都离不开 Node 。

### 构建工具

构建工具可以理解为是 “一套” 工具链、工具集，构建工具通常集 “语言转换 / 编译” 、 “资源解析” 、 “代码分析” 、 “错误检查” 、 “任务队列” 等非常多的功能于一身。
如 “语言转换 / 编译” 就是把代码转换成兼容度更高的低版本 JS 代码，这样我们就能直接使用最新 ES 语法。
除了 “语言转换 / 编译” 这个好处之外，在实际的开发中，构建工具可以更好的提高开发效率、自动化的代码检查、规避上线后的生产风险。

目前已经有很多流行的构建工具，例如： [Vite](https://github.com/vitejs/vite)、 [Webpack](https://github.com/webpack/webpack)、[Grunt](https://github.com/gruntjs/grunt) 、 [Gulp](https://github.com/gulpjs/gulp) 、 [Snowpack](https://github.com/FredKSchott/snowpack) 、 [Parcel](https://github.com/parcel-bundler/parcel) 、 [Rollup](https://github.com/rollup/rollup) … 每一个工具都有自己的特色。

#### Webpack

Webpack 是一个老牌的构建工具，前些年可以说几乎所有的项目都是基于 Webpack 构建的，生态最庞大，各种各样的插件最全面，对旧版本的浏览器支持程度也最全面。

点击访问：[Webpack 官网](https://webpack.js.org)

在开发流程上， Webpack 会先打包，再启动开发服务器，访问开发服务器时，会把打包好的结果直接给过去，下面是 Webpack 使用的 bundler 机制的工作流程。

![Webpack 的工作原理](images/bundler.png)

#### Vite

Vite 的作者也是熟悉的 Vue 作者尤雨溪，它是一个基于 ESM 实现的构建工具，主打更轻、更快的开发体验，主要面向现代浏览器，于 2021 年推出 2.x 版本之后，进入了一个飞速发展的时代，目前市场上的 npm 包基本都对 Vite 做了支持，用来做业务已经没有问题了。

毫秒级的开发服务启动和热重载，对 TypeScript 、 CSS 预处理器等常用开发工具都提供了开箱即用的支持，也兼容海量的 npm 包，如果是先用 Webpack 再用的 Vite ，会很快就喜欢上它！

点击访问：[Vite 官网](https://cn.vitejs.dev)

Vite 是基于浏览器原生的 ES Module ，所以不需要预先打包，而是直接启动开发服务器，请求到对应的模块的时候再进行编译，下面是 Vite 使用的 ESM 机制的工作流程。
![Vite 的工作原理](images/esm.png)

可以点击 Vite 官网的这篇文章： [为什么选 Vite](https://cn.vitejs.dev/guide/why.html) 了解更多的技术细节。

## 环境搭建

### 命令行工具

在前端工程化开发过程中，已经离不开各种命令行操作，例如：管理项目依赖、本地服务启动、打包构建，还有拉取代码 / 提交代码这些 Git 操作等等。

Windows 系统，可以使用自带的 CMD 或者 Windows PowerShell 工具。

但为了更好的开发体验，推荐使用以下工具（需要下载安装），可以根据自己的喜好选择其一：

|       名称       | 简介                                  |                           下载                            |
| :--------------: | :------------------------------------ | :-------------------------------------------------------: |
| Windows Terminal | 由微软推出的强大且高效的 Windows 终端 | [前往 GitHub 下载](https://github.com/microsoft/terminal) |
|      CMDer       | 一款体验非常好的 Windows 控制台模拟器 |   [前往 GitHub 下载](https://github.com/cmderdev/cmder)   |

Mac 系统，可以直接使用系统自带的 “终端” 工具或 ”[iterm2](https://iterm2.com)“

### Node.js

在 Node.js 官网提供了安装包的下载，不论是使用 Windows 系统还是 MacOS 系统， Node 都提供了对应的安装包，直接下载安装包并运行即可安装到的电脑里，就可以用来开发的项目了。

点击访问：[Node.js 官网下载](https://nodejs.org/zh-cn/download/)

建议使用[nvm](https://github.com/nvm-sh/nvm)进行版本管理，因为有些项目只能使用特定的 node 版本运行

## 初始化一个项目

如果想让一个项目成为 Node 项目，只需要在命令行 `cd` 到项目所在的目录，执行初始化命令

```bash
npm init
```

### package.json

执行完成项目的根目录下出现了一个名为 `package.json` 的 JSON 文件。

但在实际的项目中，往往需要填写更完善的项目信息，除了手动维护这些信息之外，在安装 npm 包等操作时， Node 也会帮写入数据到这个文件里，来了解一些常用字段的含义：

|     字段名      | 含义                                                                        |
| :-------------: | :-------------------------------------------------------------------------- |
|      name       | 项目名称，如果打算发布成 npm 包，它将作为包的名称                           |
|     version     | 项目版本号，如果打算发布成 npm 包，这个字段是必须的，遵循语义化版本号的要求 |
|   description   | 项目的描述                                                                  |
|    keywords     | 关键词，用于在 npm 网站上进行搜索                                           |
|    homepage     | 项目的官网 URL                                                              |
|      main       | 项目的入口文件                                                              |
|     scripts     | 指定运行脚本的命令缩写，常见的如 `npm run build` 等命令就在这里配置         |
|     author      | 作者信息                                                                    |
|     license     | 许可证信息，可以选择适当的许可证进行开源                                    |
|  dependencies   | 记录当前项目的生产依赖，安装 npm 包时会自动生成                             |
| devDependencies | 记录当前项目的开发依赖，安装 npm 包时会自动生成                             |
|      type       | 配置 Node 对 CJS 和 ESM 的支持                                              |

关于 package.json 的完整的选项可以在 [npm Docs](https://docs.npmjs.com/cli/v8/configuring-npm/package-json/) 上查阅。

### 模块 Module

前端工程化有两个最常用的概念模块（ Module ）和包（ Package ）
模块和包是 Node 开发最重要的组成部分，不管是全部自己实现一个项目，还是依赖各种第三方轮子来协助开发，项目的构成都离不开这两者。

在前端工程的发展过程中，不同时期诞生了很多不同的模块化机制，最为主流的有以下几种：

| 模块化方案 |            全称             |    适用范围     |
| :--------: | :-------------------------: | :-------------: |
|    CJS     |          CommonJS           |     Node 端     |
|    AMD     |   Async Module Definition   |     浏览器      |
|    CMD     |  Common Module Definition   |     浏览器      |
|    UMD     | Universal Module Definition | Node 端和浏览器 |
|    ESM     |          ES Module          | Node 端和浏览器 |

其中 AMD 、CMD 、 UMD 都已经属于偏过去式的模块化方案，在新的业务里，结合各种编译工具，可以直接用最新的 ESM 方案来实现模块化，所以可以在后续有接触的时候再了解。

ESM （ ES Module ） 是 JavaScript 在 ES6（ ECMAScript 2015 ）版本推出的模块化标准，旨在成为浏览器和服务端通用的模块解决方案。

CJS （ CommonJS ） 原本是服务端的模块化标准（设计之初也叫 ServerJS ），是为 JavaScript 设计的用于浏览器之外的一个模块化方案， Node 默认支持了该规范，在 Node 12 之前也只支持 CJS ，但从 Node 12 开始，已经同时支持 ES Module 的使用。

至此，不论是 Node 端还是浏览器端， ES Module 是统一的模块化标准了！

但由于历史原因， CJS 在 Node 端依然是非常主流的模块化写法，所以还是值得进行了解，
CJS 和 ESM 的最基本的区别。

> CJS 使用 `module.exports` 语法导出模块，可以导出任意合法的 JavaScript 类型，例如：字符串、布尔值、对象、数组、函数等等。
> 使用 `require` 导入模块，在导入的时候，当文件扩展名是 `.js` 时，可以只写文件名，而此时使用的是 `.cjs` 扩展名，所以需要完整的书写。

> ESM 使用 `export default` （默认导出）和 `export` （命名导出）这两个语法导出模块，和 CJS 一样， ESM 也可以导出任意合法的 JavaScript 类型，例如：字符串、布尔值、对象、数组、函数等等。
> 使用 `import ... from ...` 导入模块，在导入的时候，如果文件扩展名是 `.js` 则可以省略文件名后缀，否则需要把扩展名也完整写出来。

### 包 Package

包可以简单理解为模块的集合，一个包可以只提供一个模块的功能，也可以作为多个模块的集合集中管理
包通常是发布在官方的包管理平台 npmjs 上面，开发者需要使用的时候，可以通过包管理器安装到项目里，并在的代码里引入，开箱即用，使用包可以减少在项目中重复造轮子，提高项目的开发效率。

包管理器（ Package Manager ）是用来管理依赖包的工具，比如：发布、安装、更新、卸载等等。

Node 默认提供了一个包管理器 npm ，在安装 Node.js 的时候，默认会一起安装 npm 包管理器，可以通过以下命令查看它是否正常。

```bash
npm -v
```

常用包管理器 [npm](https://www.npmjs.com)、[yarn](https://yarnpkg.com)、[pnpm](https://pnpm.io)

| npm 命令                              | yarn 命令                     | pnpm 命令                     | 功能描述                         |
| :------------------------------------ | :---------------------------- | :---------------------------- | :------------------------------- |
| npm install                           | yarn (install)                | pnpm install                  | 根据 package.json 安装所有依赖   |
| npm install (--save/-S) [package]     | yarn add [package]            | pnpm add [package]            | 添加依赖包至 dependencies        |
| npm install [--save-dev/-D] [package] | yarn add [--dev/-D] [package] | pnpm add [--dev/-D] [package] | 添加依赖包至 devDependencies     |
| npm install [--global/-g]             | yarn global add               | pnpm add -g                   | 全局安装依赖包                   |
| npm uninstall [package]               | yarn remove [package]         | pnpm remove [package]         | 移除依赖包                       |
| npm update                            | yarn upgrade                  | pnpm upgrade                  | 升级依赖包                       |
| npm init                              | yarn init                     | pnpm init                     | 互动式创建 package.json 文件     |
| npm run                               | yarn run                      | pnpm                          | 运行 package.json 中预定义的脚本 |

node_modules 是 Node 项目下用于存放已安装的依赖包的目录

## Babel

Babel 是一个 JavaScript 编译器，它可以让开发者仅需维护一份简单的 JSON 配置文件，即可调动一系列工具链将源代码编译为目标浏览器指定版本所支持的语法

## TypeScript

TypeScript 简称 TS ，既是一门新语言，也是 JS 的一个超集，它是在 JavaScript 的基础上增加了一套类型系统，它支持所有的 JS 语句，为工程化开发而生，最终在编译的时候去掉类型和特有的语法，生成 JS 代码。

[`tsconfig.json`配置项](https://www.typescriptlang.org/tsconfig)

## 知识图谱

<iframe id="embed_dom" name="embed_dom" frameborder="0" style="display:block;margin-left:-244.5px; margin-top:-137.5px;width:489px; height:275px;" src="https://www.processon.com/embed/60a25b3c63768925076b7f08"></iframe>

## 现代化的开发概念

### MPA 与 SPA ​

首先来看 MPA 与 SPA ，这代表着两个完全相反的开发模式和用户体验，它们的全称和中文含义如下：

| 名词 |          全称           |    中文    |
| :--: | :---------------------: | :--------: |
| MPA  | Multi-Page Application  | 多页面应用 |
| SPA  | Single-Page Application | 单页面应用 |

MPA 的优点 ​
作为最传统也是最被广泛运用的模式，自然有它的优势存在：

首屏加载速度快
因为 MPA 的页面源码都是实实在在的写在 HTML 文件里，所以当 HTML 文件被访问成功，内容也就随即呈现（在不考虑额外的 CSS 、 图片加载速度的情况下，这种模式的内容呈现速度是最快的）。

SEO 友好，容易被搜索引擎收录
如果读者有稍微了解过一些 SEO 知识，会知道除了网页的 TKD 三要素之外，网页的内容也影响收录的关键因素，传统的多页面应用，网页的内容都是直接位于 HTML 文件内，例如下面这个有很多内容的网页：

MPA 的缺点 ​
说完 MPA 的优点，再来看看它的缺点，正因为有这些缺点的存在，才会催生出其他更优秀的开发模式出现。

页面之间的跳转访问速度慢
正如它的访问流程，每一次页面访问都需要完整的经历一次渲染过程，哪怕从详情页 A 的 “相关阅读” 跳转到详情页 B ，这种网页结构一样，只有内容不同的两个页面，也需要经历这样的过程。

用户体验不够友好
如果网页上的资源较多或者网速不好，这个过程就会有明显的卡顿或者布局错乱，影响用户体验。

开发成本高
传统的多页面模式缺少前端工程化的很多优秀技术栈支持，前端开发者在刀耕火种的开发过程中效率低下。如果是基于 PHP 等非前端语言开发，工作量通常更是压在一名开发者身上，无法做到前后端分离来利用好跨岗位协作。

SPA 的优点 ​
从上面的实现原理已经能总结出它的优势了：

只有一次完全请求的等待时间（首屏加载）
用户体验好，内部跳转的时候可以实现 “无刷切换”
因为不需要重新请求整个页面，所以切换页面的时候速度更快
因为没有脱离当前页面，所以 “页” 与 “页” 之间在切换过程中支持动画效果
脱离了页面跳页面的框架，让整个网站形成一个 Web App ，更接近原生 App 的访问体验
开发效率高，前后端分离，后端负责 API 接口，前端负责界面和联调，同步进行缩短工期
这也是为什么短短几年时间， SPA 的体验模式成为前端领域的主流。

SPA 的缺点 ​
虽然 SPA 应用在使用过程中的用户体验非常好，但也有自身的缺点存在：

首屏加载相对较慢
由于 SPA 应用的路由是由前端控制， SPA 在打开首页后，还要根据当前的路由再执行一次内容渲染，相对于 MPA 应用从服务端直出 HTML ，首屏渲染所花费的时间会更长。

不利于 SEO 优化
由于 SPA 应用全程是由 JavaScript 控制内容的渲染，因此唯一的一个 HTML 页面 index.html 通常是一个空的页面，只有最基础的 HTML 结构，不仅无法设置每个路由页面的 TDK ，页面内容也无法呈现在 HTML 代码里，因此对搜索引擎来说，网站的内容再丰富，依然只是一个 “空壳” ，无法让搜索引擎进行内容爬取。
