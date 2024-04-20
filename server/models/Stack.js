const { DataTypes } = require('sequelize');
const Stack = sequelize.define('Stack', {
    Category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Topic: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Questions: {
        type: DataTypes.JSON,
        allowNull: false
    }
})

module.exports = Stack;