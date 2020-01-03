

function getFirstSelector(selector){
  var  selected = document.querySelector(selector)
  return(selected)
}

function nestedTarget(){
  var output = document.querySelector('#nested .target')
  return(output)
}

function deepestChild(){
  var output1 = document.querySelector('#grand-node div div div div')
  return(output1)
}

function increaseRankBy(n){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');

  for (let i = 0; i < lis.length; i++) {
   lis[i].innerHTML = (parseInt(lis[i].innerHTML,10) + n).toString()
  }
  for (let i = 0; i < lis.length; i++) {
   console.log(lis[i].innerHTML)
 }
}
