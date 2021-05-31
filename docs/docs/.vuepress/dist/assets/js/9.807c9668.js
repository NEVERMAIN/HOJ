(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{356:function(s,a,t){"use strict";t.r(a);var n=t(41),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"后端部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#后端部署"}},[s._v("#")]),s._v(" 后端部署")]),s._v(" "),t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),t("p",[s._v("下载本项目，进入到当前文件夹执行打包命令")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://gitee.com/himitzh0730/hoj-deploy.git "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" hoj-deploy/src/backend\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("当前文件夹为打包"),t("code",[s._v("hoj-backend")]),s._v("镜像的相关文件，将这些文件复制到同一个文件夹内，"),t("strong",[s._v("然后打包"),t("a",{attrs:{href:"https://gitee.com/himitzh0730/hoj/tree/master/hoj-springboot/DataBackup",target:"_blank",rel:"noopener noreferrer"}},[s._v("DataBackup"),t("OutboundLink")],1),s._v("（SpringBoot项目）成jar包也放到当前文件夹")]),s._v("，之后执行以下命令进行打包成镜像")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("docker build -t hoj-backend "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("项目依赖于hoj-redis，hoj-nacos，hoj-mysql等镜像成功启动，以及根据前面三个镜像的配置修改环境参数才可正常启动")])]),s._v(" "),t("p",[s._v("docker-compose 启动")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("hoj-backend")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    image: registry.cn-shenzhen.aliyuncs.com/hcode/hoj_backend")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" hoj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("backend\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("container_name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" hoj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("backend\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("restart")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" always\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("depends_on")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" hoj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("redis\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" hoj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("mysql\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" hoj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("nacos\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./hoj/file"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/hoj/file\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./hoj/testcase"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/hoj/testcase\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./hoj/log/backend"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/hoj/log/backend\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" TZ=Asia/Shanghai\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" BACKEND_SERVER_PORT=6688 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# backend服务端口号")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" NACOS_URL=172.20.0.4"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8848")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# hoj-nacos的url")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" NACOS_USERNAME=root "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# nacos的管理员账号")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" NACOS_PASSWORD=hoj123456 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# nacos的管理员密码")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" JWT_TOKEN_SECRET=default "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 加密秘钥 默认则生成32位随机密钥")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" JWT_TOKEN_EXPIRE=86400 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# token过期时间默认为24小时 86400s")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" JWT_TOKEN_FRESH_EXPIRE=43200 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# token默认12小时可自动刷新")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" JUDGE_TOKEN=default "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 调用判题服务器的token 默认则生成32位随机密钥")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" MYSQL_HOST=172.20.0.3 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# hoj-mysql的host")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" MYSQL_PUBLIC_HOST=172.20.0.3 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果判题服务是分布式，请提供当前mysql所在服务器的公网ip")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" MYSQL_PORT=3306 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# hoj-mysql端口号")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" MYSQL_DATABASE_NAME=hoj "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 改动需要修改hoj-mysql镜像,默认为hoj")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" MYSQL_USERNAME=root \n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" MYSQL_ROOT_PASSWORD=hoj123456 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# hoj-mysql的root账号密码")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" EMAIL_SERVER_HOST=smtp.qq.com "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 请使用邮件服务的域名或ip")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" EMAIL_SERVER_PORT=465 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 请使用邮件服务的端口号")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" EMAIL_USERNMAE="),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("your_email_username "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 请使用对应邮箱账号")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" EMAIL_PASSWORD="),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("your_email_password "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 请使用对应邮箱密码")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" REDIS_HOST=172.20.0.2 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# hoj-redis的host")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" REDIS_PORT=6379 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# hoj-redis的port")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" REDIS_PASSWORD=hoj123456 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#hoj-redis的密码")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" OPEN_REMOTE_JUDGE=true "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 是否开启对hdu和codeforces的虚拟判题")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开启虚拟判题请提供对应oj的账号密码 格式为 ")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# username1,username2,...")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# password1,password2,...")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" HDU_ACCOUNT_USERNAME_LIST=\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" HDU_ACCOUNT_PASSWORD_LIST=\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" CF_ACCOUNT_USERNAME_LIST=\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" CF_ACCOUNT_USERNAME_LIST=\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"6688:6688"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("networks")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("hoj-network")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ipv4_address")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 172.20.0.5\n        \n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("hoj-redis")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" redis"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("5.0.9"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("alpine\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("container_name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" hoj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("redis\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("restart")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" always\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./hoj/data/redis/data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/data\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("networks")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("hoj-network")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ipv4_address")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 172.20.0.2\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"6379:6379"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("command")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" redis"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("server "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v('requirepass "hoj123456" '),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("appendonly yes\n        \n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("hoj-mysql")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" registry.cn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("shenzhen.aliyuncs.com/hcode/hoj_database\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("container_name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" hoj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("mysql\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("restart")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" always\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./hoj/data/mysql/data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/var/lib/mysql\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" MYSQL_ROOT_PASSWORD=hoj123456\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" TZ=Asia/Shanghai\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" NACOS_USERNAME=root\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" NACOS_PASSWORD=hoj123456\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3306:3306"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("networks")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("hoj-network")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ipv4_address")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 172.20.0.3\n      \n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("hoj-nacos")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nacos/nacos"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("server"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("1.4.2\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("container_name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" hoj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("nacos\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("restart")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" always\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("depends_on")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" \n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" hoj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("mysql\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" JVM_XMX=384m\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" JVM_XMS=384m\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" JVM_XMN=192m\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" MODE=standalone\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" SPRING_DATASOURCE_PLATFORM=mysql\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" MYSQL_SERVICE_HOST=172.20.0.3\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" MYSQL_SERVICE_PORT=3306\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" MYSQL_SERVICE_USER=root\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" MYSQL_SERVICE_PASSWORD=Hzh"),t("span",{pre:!0,attrs:{class:"token important"}},[s._v("&hy2020")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" MYSQL_SERVICE_DB_NAME=nacos\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" NACOS_AUTH_ENABLE=true "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开启鉴权")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("networks")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("hoj-network")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("driver")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" bridge\n     "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ipam")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("config")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n         "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("subnet")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 172.20.0.0/16\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br"),t("span",{staticClass:"line-number"},[s._v("59")]),t("br"),t("span",{staticClass:"line-number"},[s._v("60")]),t("br"),t("span",{staticClass:"line-number"},[s._v("61")]),t("br"),t("span",{staticClass:"line-number"},[s._v("62")]),t("br"),t("span",{staticClass:"line-number"},[s._v("63")]),t("br"),t("span",{staticClass:"line-number"},[s._v("64")]),t("br"),t("span",{staticClass:"line-number"},[s._v("65")]),t("br"),t("span",{staticClass:"line-number"},[s._v("66")]),t("br"),t("span",{staticClass:"line-number"},[s._v("67")]),t("br"),t("span",{staticClass:"line-number"},[s._v("68")]),t("br"),t("span",{staticClass:"line-number"},[s._v("69")]),t("br"),t("span",{staticClass:"line-number"},[s._v("70")]),t("br"),t("span",{staticClass:"line-number"},[s._v("71")]),t("br"),t("span",{staticClass:"line-number"},[s._v("72")]),t("br"),t("span",{staticClass:"line-number"},[s._v("73")]),t("br"),t("span",{staticClass:"line-number"},[s._v("74")]),t("br"),t("span",{staticClass:"line-number"},[s._v("75")]),t("br"),t("span",{staticClass:"line-number"},[s._v("76")]),t("br"),t("span",{staticClass:"line-number"},[s._v("77")]),t("br"),t("span",{staticClass:"line-number"},[s._v("78")]),t("br"),t("span",{staticClass:"line-number"},[s._v("79")]),t("br"),t("span",{staticClass:"line-number"},[s._v("80")]),t("br"),t("span",{staticClass:"line-number"},[s._v("81")]),t("br"),t("span",{staticClass:"line-number"},[s._v("82")]),t("br"),t("span",{staticClass:"line-number"},[s._v("83")]),t("br"),t("span",{staticClass:"line-number"},[s._v("84")]),t("br"),t("span",{staticClass:"line-number"},[s._v("85")]),t("br"),t("span",{staticClass:"line-number"},[s._v("86")]),t("br"),t("span",{staticClass:"line-number"},[s._v("87")]),t("br"),t("span",{staticClass:"line-number"},[s._v("88")]),t("br"),t("span",{staticClass:"line-number"},[s._v("89")]),t("br"),t("span",{staticClass:"line-number"},[s._v("90")]),t("br"),t("span",{staticClass:"line-number"},[s._v("91")]),t("br"),t("span",{staticClass:"line-number"},[s._v("92")]),t("br"),t("span",{staticClass:"line-number"},[s._v("93")]),t("br"),t("span",{staticClass:"line-number"},[s._v("94")]),t("br"),t("span",{staticClass:"line-number"},[s._v("95")]),t("br"),t("span",{staticClass:"line-number"},[s._v("96")]),t("br"),t("span",{staticClass:"line-number"},[s._v("97")]),t("br"),t("span",{staticClass:"line-number"},[s._v("98")]),t("br"),t("span",{staticClass:"line-number"},[s._v("99")]),t("br"),t("span",{staticClass:"line-number"},[s._v("100")]),t("br"),t("span",{staticClass:"line-number"},[s._v("101")]),t("br"),t("span",{staticClass:"line-number"},[s._v("102")]),t("br"),t("span",{staticClass:"line-number"},[s._v("103")]),t("br"),t("span",{staticClass:"line-number"},[s._v("104")]),t("br"),t("span",{staticClass:"line-number"},[s._v("105")]),t("br"),t("span",{staticClass:"line-number"},[s._v("106")]),t("br"),t("span",{staticClass:"line-number"},[s._v("107")]),t("br")])]),t("h2",{attrs:{id:"文件介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件介绍"}},[s._v("#")]),s._v(" 文件介绍")]),s._v(" "),t("h3",{attrs:{id:"_1-check-nacos-sh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-check-nacos-sh"}},[s._v("#")]),s._v(" 1. check_nacos.sh")]),s._v(" "),t("p",[s._v("用于检测nacos是否启动完成，然后再执行启动backend")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 访问nacos注册中心，获取http状态码")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CODE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -I -m "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" -o /dev/null -s -w %"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("http_code"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  http://$NACOS_URL/nacos/index.html"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 判断状态码为200")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$CODE")]),s._v(" -eq "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输出绿色文字，并跳出循环")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -e "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token entity",title:"\\033"}},[s._v("\\033")]),s._v("[42;34m nacos is ok "),t("span",{pre:!0,attrs:{class:"token entity",title:"\\033"}},[s._v("\\033")]),s._v('[0m"')]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("break")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 暂停1秒")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# while结束时，执行容器中的run.sh。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" /run.sh\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])]),t("h3",{attrs:{id:"_2-run-sh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-run-sh"}},[s._v("#")]),s._v(" 2. run.sh")]),s._v(" "),t("p",[s._v("启动backend的springboot jar包")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/sh")]),s._v("\n\njava -Djava.security.egd"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("file:/dev/./urandom -jar  /app.jar\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"_3-dockerfile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-dockerfile"}},[s._v("#")]),s._v(" 3. Dockerfile")]),s._v(" "),t("div",{staticClass:"language-dockerfile line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" java"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("8\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" *.jar /app.jar\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" check_nacos.sh /check_nacos.sh\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" run.sh /run.sh\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENV")]),s._v(" TZ=Asia/Shanghai\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENV")]),s._v(" BACKEND_SERVER_PORT=6688\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VOLUME")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/hoj/file"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/hoj/testcase"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" ln "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),s._v(" /etc/timezone\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CMD")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bash"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/check_nacos.sh"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXPOSE")]),s._v(" $BACKEND_SERVER_PORT\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);