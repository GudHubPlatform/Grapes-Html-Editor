import Table from '@editorjs/table';
export default class CustomTable extends Table  { 
    constructor(data, api) {
        super(data, api);
        this.savedData = data;
        this.saveCount = 0;
    }
    static get toolbox() {
        return {
            title: 'Table',
            icon: '<svg enable-background="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m21.5 23h-19c-1.378 0-2.5-1.122-2.5-2.5v-17c0-1.378 1.122-2.5 2.5-2.5h19c1.378 0 2.5 1.122 2.5 2.5v17c0 1.378-1.122 2.5-2.5 2.5zm-19-21c-.827 0-1.5.673-1.5 1.5v17c0 .827.673 1.5 1.5 1.5h19c.827 0 1.5-.673 1.5-1.5v-17c0-.827-.673-1.5-1.5-1.5z"/><path d="m23.5 8h-23c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h23c.276 0 .5.224.5.5s-.224.5-.5.5z"/><path d="m23.5 13h-23c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h23c.276 0 .5.224.5.5s-.224.5-.5.5z"/><path d="m23.5 18h-23c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h23c.276 0 .5.224.5.5s-.224.5-.5.5z"/><path d="m6.5 23c-.276 0-.5-.224-.5-.5v-15c0-.276.224-.5.5-.5s.5.224.5.5v15c0 .276-.224.5-.5.5z"/><path d="m12 23c-.276 0-.5-.224-.5-.5v-15c0-.276.224-.5.5-.5s.5.224.5.5v15c0 .276-.224.5-.5.5z"/><path d="m17.5 23c-.276 0-.5-.224-.5-.5v-15c0-.276.224-.5.5-.5s.5.224.5.5v15c0 .276-.224.5-.5.5z"/></svg>'
        };
    }

    rendered(){
        let self = this.container;
        let addRowElement = self.querySelector('.tc-add-row');
        let addColumnElement = self.querySelector('.tc-add-column');
        addRowElement.addEventListener('click', (e) => {
            let oldRowQuantity = this.table.numberOfRows;
            setTimeout(() => {
                let newRowQuantity = this.table.numberOfRows;
                if (oldRowQuantity == newRowQuantity) {
                    this.table.addRow(undefined, true)
                }
            }, 0);
        });
        addColumnElement.addEventListener('click', (e) => {
            let oldColumnQuantity = this.table.numberOfColumns;
            setTimeout(() => {
                let newColumnQuantity = this.table.numberOfColumns;
                if (oldColumnQuantity == newColumnQuantity) {
                    this.table.addColumn(undefined, true)
                }
            }, 0);
        });
    }
}