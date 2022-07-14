class MyHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <header>
            <a href="/index.html"><img src="imgs/glass.png" alt="" class="logo"></a>
            <ul>
                <li><a href="/index.html">Home</a></li>
                <li><a href="/espec.html">Especificações</a></li>
                <li><a href="/fotos.html">Fotos</a></li>
            </ul>
        </header>
        `
    }
}
customElements.define('my-header', MyHeader)

class MyFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <footer>
            <span>Copyright © 2022 - by Mateus Farias</span>
            <span><a href="">Facebook</a> | <a href="">Twitter</a></span>
        </footer>
        `
    }
}
customElements.define('my-footer', MyFooter)


//Function especicacoes
function mudarInfo(e){
    document.getElementById('areaV').style.display = 'none'
    switch(e){
        case 1: 
        document.getElementById('bateria').style.display = 'inline'
        document.getElementById('sensores').style.display = 'none'
        document.getElementById('camera').style.display = 'none'
        document.getElementById('tela').style.display = 'none'
        break
        case 2: 
        document.getElementById('bateria').style.display = 'none'
        document.getElementById('sensores').style.display = 'none'
        document.getElementById('camera').style.display = 'inline'
        document.getElementById('tela').style.display = 'none'
        break
        case 3: 
        document.getElementById('bateria').style.display = 'none'
        document.getElementById('sensores').style.display = 'none'
        document.getElementById('camera').style.display = 'none'
        document.getElementById('tela').style.display = 'inline'
        break
        case 4: 
        document.getElementById('bateria').style.display = 'none'
        document.getElementById('sensores').style.display = 'inline'
        document.getElementById('camera').style.display = 'none'
        document.getElementById('tela').style.display = 'none'
        break
    }
}