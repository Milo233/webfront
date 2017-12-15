::新加的文件添加到git
git add .
set /p logmsg=请输入提交日志\r\n
git commit -a -m %logmsg%
git push -u origin master
