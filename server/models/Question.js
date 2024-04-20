const Question = sequelize.define('Question', {
    Category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Topic: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Question: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Options: {
        type: DataTypes.JSON,
        allowNull: false
    },
    Answer: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Question;