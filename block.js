const { GENESIS_DATA } = require('./config');
const cryptoHash = require('./crypto-hash');

class Block {
    constructor({ timestamp, lasthash, hash, data }) {
        this.timestamp = timestamp;
        this.lasthash = lasthash;
        this.hash = hash;
        this.data = data;
    }

    static genesis() {
        return new this(GENESIS_DATA);
    }

    static mineBlock({ lastBlock, data }) {
        const timestamp = Date.now();
        const lasthash = lastBlock.hash;

        return new this({
            timestamp,
            lasthash,
            data,
            hash: cryptoHash(timestamp, lasthash, data)
        });
    }
}

module.exports = Block;