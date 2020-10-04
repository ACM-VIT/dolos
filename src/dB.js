let Sequelize=require('sequelize')

const sequelize =new Sequelize('_databasename__','user_name','password',{
    host:'localhost',
    dialect: 'mysql'
})

const Table_1=sequelize.define('table_name',{ // Create only if not exist
    col_1_name:{
        type: Sequelize.INTEGER,
        autoIncerment: true,
        primaryKey:true 
    
    },
    col_2_name :{
        type : Sequelize.STRING,
         allowNull : false
    }

})



sequelize.sync()

exports=module.exports={
   Table_1
}