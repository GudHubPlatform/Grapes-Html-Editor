import Table from '@editorjs/table';
export default class CustomTable extends Table  { 
    constructor(data, api) {
        super(data, api);
        this.savedData = data;
        this.saveCount = 0;
    }
    static get toolbox() {
        return {
            title: 'New Table',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 350 350" enable-background="new 0 0 350 350"><path d="M5,350h340V0H5V350z M25,330v-62.212h300V330H25z M179.509,247.494H60.491L120,171.253L179.509,247.494z   M176.443,211.061l33.683-32.323l74.654,69.05h-79.67L176.443,211.061z M325,96.574c-6.384,2.269-13.085,3.426-20,3.426  c-33.084,0-60-26.916-60-60c0-6.911,1.156-13.612,3.422-20H325V96.574z M25,20h202.516C225.845,26.479,225,33.166,225,40  c0,44.112,35.888,80,80,80c6.837,0,13.523-0.846,20-2.518v130.306h-10.767l-104.359-96.526l-45.801,43.951L120,138.748  l-85.109,109.04H25V20z"/></svg>'
        };
    }

    rendered(){
        let plus = document.querySelector('.tc-add-row')
        console.log(plus)
        plus.addEventListener('click', (e) => {
            console.log(this)
            console.log(e.target)
            console.log(e.target.parentNode)
            console.log(this.table.getWrapper())
            
            setTimeout(() => {
                const clickedOnAddRowButton = e.target.closest(`.tc-add-row`);
                console.log(clickedOnAddRowButton.parentNode === this.table.getWrapper())
                
                if (clickedOnAddRowButton.parentNode === this.table.getWrapper()) {
                    this.table.addRow(undefined, true)
                }
            }, 1000);
        })
    }
    addRow () {
        console.log('asd')
    }

}