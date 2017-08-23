module.exports = {
    nitro: require('./models/nitro'),
    prize: require('./models/prize'),

// Define relationships below
    loadRelationships: function loadRelationships() {
        this.prize.default.hasOne(this.nitro.default, {foreignKey: 'id', targetKey: 'id'});
    }
}