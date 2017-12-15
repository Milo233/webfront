:: 新加的文件添加到git
git add .
:: 控制台输入提交日志
set /p logmsg=请输入提交日志
:: 提交代码
git commit -a -m %logmsg%
git push -u origin master
