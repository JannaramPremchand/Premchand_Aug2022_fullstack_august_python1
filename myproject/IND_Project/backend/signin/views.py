from django.shortcuts import redirect, render
import mysql.connector as sql
em=''
pwd=''
# Create your views here.
def signinaction(request):
    global em,pwd
    if request.method=="POST":
        m=sql.connect(host="localhost",user="root",passwd="password",database='leetcodeproject')
        cursor=m.cursor()
        d=request.POST
        for key,value in d.items():
            if key=="email":
                em=value
            if key=="password":
                pwd=value
        
        c="select * from users where email='{}' and password='{}'".format(em,pwd)
        cursor.execute(c)
        t=tuple(cursor.fetchall())
        if t==():
            return render(request,'error.html')
        else:
            request.session['user']=em
            return render(request,"welcome.html")

    return render(request,'login_page.html')
