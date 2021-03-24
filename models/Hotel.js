const mongoose = require('mongoose')

const hotelSchema = new mongoose.Schema({
	name: { type: String,
		required: true
		},
	locality: { type: String },
	stars:{ type: Number,
		enum: [1,2,3,4,5]
		}
	}
)

module.exports=mongoose.model('hotel', hotelSchema)
