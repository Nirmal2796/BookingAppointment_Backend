const Sequelize=require('sequelize').Sequelize;

const sequelize=new Sequelize('node-complete','root','Nirmal@27',{
    dialect:'mysql',
    host:'localhost'
});

module.exports=sequelize;