import {Sequelize} from 'sequelize';

//const sequelize = new Sequelize('mysql://root:Jvitor#66849883@localhost:3306/pitu');

const sequelize = new Sequelize('pitu', 'root', 'Jvitor#66849883', {
    dialect: 'mysql'
  })

export default sequelize;