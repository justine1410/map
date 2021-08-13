let map =document.querySelector('#map');
let paths = map.querySelectorAll('.map__image a');
let links = map.querySelectorAll('.map__list a');

//Polyfill du foreach
if(NodeList.prototype.forEach === undefined){
    NodeList.prototype.forEach = (callback)=>{
        [].forEach.call(this, callback)
    }
}

//lien entre le survole des régions et la transformation du la liste //
paths.forEach((path)=>{
    path.addEventListener('mouseenter',(e)=>{
        let id = path.id.replace('region-','' )
        let liste = document.querySelectorAll('#liste-'+id)
        console.log(id, liste);

        map.querySelectorAll('.is-active').forEach((item)=>{
            item.classList.remove('is-active')
        })
        liste[0].classList.add('is-active') 
    })
}) 



