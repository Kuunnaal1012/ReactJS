function customRender(reactElement ,container){
/*
    const domElement = document.createElement
    (reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.target)


    container.appendChild(domElement)
*/

const domElement =document.createElement
(reactElement.type)
domElement.innerHTML =reactElement.children;

for (const prop in reactElement.props) {

    if (prop ==='children') continue;
    domElement.setAttribute(prop,reactElement.props[prop])
}
container.appendChild(domElement)
}






const reactElement ={
type: 'a',
props:{
href: "https://googlr.com",
target: 'blank'
},
children: 'Click me to vist google'
}


const mainContainer = document.querySelector('#root')

customRender(reactElement ,mainContainer)