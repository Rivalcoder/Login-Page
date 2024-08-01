a=input("Enter the string : ")
b=len(a)
skip=1
c=[]
for i in range(0,b,1):
    temp=a[i]
    c.append(a[i])

for i in range(0,b-1,1):
    if(skip==1):
        c[i]=c[i].upper()
        skip=0
    elif((a[i]>='a' and a[i]<='z')or(a[i]>='A' and a[i]<='Z')):
        continue
    else:
        c[i+1]=c[i+1].upper()
    
print(''.join(c))
        

