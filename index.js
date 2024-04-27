let button1 = document.querySelector("#button1")
let button2 = document.querySelector("#button2")
let button3 = document.querySelector("#button3")
let button4 = document.querySelector("#button4")
let button5 = document.querySelector("#button5")
let button6 = document.querySelector("#button6")
let button7 = document.querySelector("#button7")
let button8 = document.querySelector("#button8")
let button9 = document.querySelector("#button9")
let button10 = document.querySelector("#button10")
let button11 = document.querySelector("#button11")
let button12 = document.querySelector("#button12")
let button13 = document.querySelector("#button13")
let button14 = document.querySelector("#button14")
let button15 = document.querySelector("#button15")
let button16 = document.querySelector("#button16")
let button17 = document.querySelector("#button17")
let button18 = document.querySelector("#button18")
let button19 = document.querySelector("#button19")
let button20 = document.querySelector("#button20")
let input1 = document.querySelector("#input1")
let input2 = document.querySelector("#input2")
let input3 = document.querySelector("#input3")
let txt = document.querySelector('#txt')
button1.addEventListener("click", () => {
    let a= input1.value;
    let b= input2.value;
    let s= input3.value;
if(a<=b){
    if(b<=s){

        txt.textContent +=a+' < '+b+' < '+s+' = true'
    }else{
        txt.textContent +='folse'

    }
}else{
    txt.textContent +='folse'

}

});
button2.addEventListener("click", () => {
    let a= input1.value;
    let b= input2.value;
    let s=[]
for(a;a<=b;a++){
    s.push(a)
}
let z=s.pop()
let n=s.shift()
txt.textContent +='['+s+']'
console.log(s)

});
button4.addEventListener("click", () => {
    let a= +input1.value;
    let b= +input2.value;
    let s=[]
    let d=0
for(a;a<=b;a++){
    d+=a
    s.push(a)

}

txt.textContent +='['+s+']                                                      '
txt.textContent +=d+'yiginddisi                                     '
console.log(s)
console.log(d+'yigindi')

});
button7.addEventListener("click", () => {
    let a=input3.value;
    let b=a.split('')

    let s=[]
function arr(a){
    for(let i=0;i<=b.length-1;i++){
        let w=Number(a[i])
       let f=w+i
       s.push(f)
    }
}
arr(b)
// arr(["lemonade", "beer", "water"])
txt.textContent +='['+s+']                                                      '
console.log(s)
});
button8.addEventListener("click", () => {
    let a=input3.value;
    let b=a.split(' ')

    let s=[]
function arr(a){
    for(let i=0;i<=a.length;i++){
        if(a[i]=='cola'){
        }else if(a[i]=='fanta'){
          }else{
              s.push(a[i])
          }
    }
}
arr(b)
// arr(["lemonade", "beer", "water"])
txt.textContent +='['+s+']                                                      '
console.log(s)
});
button9.addEventListener("click", () => {
    let a=input3.value;
    let b=a.split('')
    let s=0
for(let i=0;i<=b.length;i++){
    s+=1
}
txt.textContent +=s+'=kiritilgan iborat               '
});
button10.addEventListener("click", () => {
    let a=input3.value;
let b=a.split('')
    let d=b.sort()
    let f=d.sort((a,b)=>a-b)
    let w=f.pop()
    console.log(f)
    f.unshift(w)
txt.textContent +='['+f+']                                                      '
});
button11.addEventListener("click", () => {
    let a= +input1.value;
    let b= +input2.value;
    let s=[]
    let d=0
    for(a;a<=b;a++){
        d+=a
        s.push(a)
    }
    let m=s.pop()
    let z=s.shift()
txt.textContent +='['+s+`]=${a}-dan ${b}-gacha sonlar`
console.log(s)
});
button12.addEventListener("click", () => {
    let a=input3.value;
    let b=a.split('')
    console.log(b)
   let c=0
   let v=0
    let s=[]
for(let i=0;i<=b.length-1;i++){
    c+=1
}
for(let l=0;l<=b.length-1;l++){
    let k=b[l]**c
    console.log(k)
    v+=k
}
console.log(v)

if(a==v){
    txt.textContent +="true"
}else{
    txt.textContent +="folse"
}
});
button13.addEventListener("click", () => {
    let a= input3.value;
    let b=a.split('')
    console.log(b)
   let c=0
    let s=[]
for(let i=0;i<=b.length-1;i++){
    let n=b[i].toUpperCase();
    console.log(n)
 if(b[i]===n){

    s.push(b[i])
    c+=1
    console.log('salom')
 }

}
txt.textContent +='['+s+']                                  '
txt.textContent +=c+'= katalari yigindisi                                     '
});
button14.addEventListener("click", () => {
    let a= input3.value;
    let b=a.split('')
console.log(b)
     let l=[]
    let s=[]
for(let i=0;i<=b.length-1;i++){
    console.log(b[i])

    if(b[i]==0){
        l.push(b[i])
        console.log('salom')
    }else{
        s.push(b[i])
    }
}
console.log(s)
console.log(l)

// let z=s.pop()
// let n=s.shift()
txt.textContent +='['+s+']'

});
button15.addEventListener("click", () => {

    let a=input3.value;
    let b=a.split('')
    function javob1(b){
        console.log(b)
        txt.textContent +='['+b+']                               '
        let s=b.sort((a,b)=>a-b)
        console.log(s)                                                      
        let d=s.pop()
        console.log(d) 
        txt.textContent +=d+'=eng katasi                                         '
    }
    javob1(b)
    function javob2(b){
        console.log(b)
        let s=b.sort((a,b)=>a-b)
        console.log(s)                                                      
        let d=s.pop()
        console.log(d)                                                      
    }
    javob2([21,32,54,65,8,795,])
});
