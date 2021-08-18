// dom selection
//getElementByID()=> node

const nodeH1 = document.getElementById('judul')
nodeH1.style.color = 'red'
nodeH1.style.background = 'grey'
nodeH1.innerHTML = 'bootcamp dojobox'


//getElemetsByTagName => HTML Collection

const paragraph = document.getElementsByTagName('P')
paragraph[1].style.background = 'yellow'

for(let i=0; i < (paragraph.length)-1; i++){
    paragraph[i].style.background = 'yellow';
}

const h1 = document.getElementsByTagName('h1')
h1[0].style.fontSize = '50px'


//document.query selector
const p4 = document.querySelector('#b p')

//style.color
//style.fontsize
p4.style.fontFamily = 'calibri'


//root document
const p = document.querySelector('p')

//ubah root
const sectionB = document.getElementById('b')

//root section B

//query selector ALL
const Pp = document.querySelector('p')

Pp[2].innerHTML = 'Ini diubah dari Javascript'
