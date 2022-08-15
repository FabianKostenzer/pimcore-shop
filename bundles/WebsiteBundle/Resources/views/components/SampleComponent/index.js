export default class SampleComponent {
    constructor(rootNode, props) {
        this.root = rootNode

        this.init()

    }

    init() {
        console.log('SampleComponent initialized: ' + this.root)
    }
}
