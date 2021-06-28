import React, {Component} from 'react';
import './additems.css';
class Additems extends Component{
    state = {
        name: '',
        age: ''
    }
        handelChange = (e) => {
//            console.log(e.target.value);
            this.setState({
                [e.target.id] : e.target.value
            })
        }
        
        
        
        handelSubmit = (e) =>{
            e.preventDefault();
            let newName = this.state.name,
                indxofNewName = newName.indexOf(' ');
            
            let newAge = this.state.age,
                indexofNewAge = newAge.indexOf(' ');
            
            console.log(indxofNewName + indexofNewAge);
            if(indxofNewName === 0 || indexofNewAge === 0) {
                console.log('you added empty string and this is refused');
                    this.setState({
                      warning: "you added empty thing"
                  })
                    
                } else if(this.state.name === '' || this.state.age === '') {
                    console.log('you added nothing');
                    this.setState({
                        warn: "you added nothing"
                    })
                   
                } else {
                    console.log(this.state);
                        this.props.addItemparams(this.state)
                        this.setState({
                                        name: '',
                                        age: ''
                                        })
                    } 
        }
        closeWarn = (e) => {
            e.target.parentElement.style.display = 'none';
        }
        
        
               
    render(){
        return(
            <div>
            <div className="add-items-container">
            
                <form onSubmit={this.handelSubmit}>  
                   
            <input type="text" placeholder="Enter Name here..." id="name" onChange={this.handelChange} value={this.state.name}/>
                   
            <input type="text" placeholder="Enter Age here..." id="age" onChange={this.handelChange} value={this.state.age}/>
            
            <input type="submit" value="Add" className="submit-btn"/>
                </form>
                    
                   
            </div>
                <div className="add-item-warning-p" style={{display:'block'}} >this is p from Additems ===                 { this.state.warn} 
                        { this.state.warning}
                    <span onClick={this.closeWarn}> Close</span>
                
                </div>
        
            </div>
        )
    }
}

export default Additems;