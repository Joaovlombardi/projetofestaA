const mongoose = require('mongoose');

const PartySchema = new mongoose.Schema({
    title : {
        type: String,
        required : true  
    },
    description : {
        type : string
    },
    partyDate : {
        type : Date
    },
    photos: {
        type : Array
    },
    privacy : {
        type : Boolean
    },
    userId : {
        type: mongoose.ObjetcId
    }
});

const Party = mongoose.model("Party", PartySchema);
module.exports = Party;