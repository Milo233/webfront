:: �¼ӵ��ļ���ӵ�git
git add .
:: ����̨�����ύ��־
set /p logmsg=�������ύ��־
:: �ύ����
git commit -a -m %logmsg%
git push -u origin master
