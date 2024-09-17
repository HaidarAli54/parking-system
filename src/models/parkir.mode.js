const { DataTypes } = require('sequelize');
const sequelize = require("../../pkg/db");

const Parkir = sequelize.define('parkir', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: "users",
        key: "id"
    },
    duration: {
        type: DataTypes.INTEGER
    },
    total: {
        type: DataTypes.INTEGER
    },
    nopol: {
        type: DataTypes.STRING
    }
}, {
    sequelize: sequelize,
    timestamps: true,
    paranoid: true,
    underscored: true,
    deletedAt: 'deleted_at',
    updatedAt: 'updated_at',
    createdAt: 'created_at'
});
Parkir.belongsTo(User, {targetKey: 'id', foreignKey: 'user_id'})

module.exports = Parkir