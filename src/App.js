import {React, Component} from 'react';
import ToDoList from './component/todoitems/todoitems';
import Additems  from './component/additems/additems';
import './App.css';
//import Swal from './sweetalert/src/sweetalert'; 

class App extends Component {
    state ={
        items : [
            {id:1, name:'Mostafa', age:20},
            {id:2, name:'Ali', age:22},
            {id:3, name:'Islam', age:23}
        ]
    }
deleteItmes = (id) => {
    
    let items = this.state.items.filter(item => {
        return item.id !== id
    })
  this.setState({items:items})
    
}


addItemfn = (item) => {
    item.id = Math.random();
    console.log(`this is random id for  the new added item  ${item.id}`);
       let allstates = this.state.items;
        allstates.push(item);
        this.setState({
        items:allstates
    })
    }
showWarn = (e) => {
    e.target.style.display = 'none';
}


    render(){
        return(  
            <div className="App">
                <div className="app-name">Todolist App</div>
            <br></br>
            <ToDoList items={this.state.items} deleteItmes={this.deleteItmes}/>
            <Additems addItemparams={this.addItemfn} showWarn ={this.showWarn}/>
                    
            </div>
        )
    }
}
                    
export default App;




