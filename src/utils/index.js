
const utils = {
    tronWeb: false,
    contract: false,

    async setTronWeb(tronWeb, contractAddress) {
        this.tronWeb = tronWeb;
        this.contract = await tronWeb.contract().at(contractAddress)
    },

};

export default utils;

//TA2Ho8RrQABHEC8NbgtRfTCS8H5KREDtku