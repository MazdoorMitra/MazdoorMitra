
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const contractorSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  projects: [
    {
      projectName: { type: String, required: true },
      projectDescription: { type: String, required: true },
      supervisorName: { type: String, required: true },
      contactDetailSupervisor: { type: String, required: true },
      orders: [
        {
          date: { type: String, required: true },
          customer: { type: String, require: true },
          amount: { type: Number, required: true },
          paymentMethod: { type: String, required: true },
          transaction: { type: Number, require: true }
        }

      ],
      labourers: [
        {
          name: { type: String, required: true, default: 'Unknown' }, // Default value for name
          location: { type: String, required: true, default: 'Unknown Location' }, // Default value for location
          jobType: { type: String, required: true, default: 'Unknown Job Type' }, // Default value for jobType
          wage: { type: Number, required: true, default: 0 }, // Default value for wage
          phoneNumber: { type: Number, required: true, default: 0 }, // Default value for phoneNumber
          attendance: [
            {
              date: { type: Date, required: true },
              status: { type: String, enum: ['Present', 'Absent'], required: true },
            }
          ]
          // phoneNumber:{type:Number,required:true}

        },

      ],
      
    }
  ],
});

contractorSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

contractorSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('Contractor', contractorSchema);
