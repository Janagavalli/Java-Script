// compound interest = p(1+r/n)nt

p=100
r=3
n=4
t=5
a=p*(Math.pow((1+(r/n)),t))
ci=a-p
console.log("compound interest is" ,+ci)

//another way of using power

p=100
r=3
n=4
t=5
a=p*(1+(r/n))**t
ci=a-p
console.log("ci is:" +ci)