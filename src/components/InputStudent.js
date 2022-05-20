import React, {Component} from 'react'
import FlashMessage from 'react-flash-message'

class InputStudent extends Component{
    state={
        fullname: '',
    }
    onChange = e => {
       this.setState(
            {
                // fullname: e.target.value
                [e.target.name]: e.target.value
            }
       )
    }

    handleSubmit = e => {
        e.preventDefault();
        if(this.state.fullname.trim()){
            this.props.addStudentProps(this.state.fullname)
        this.setState({
            fullname: ''
        })
        }else{
            // alert('Please enter a valid student')
           return this.ErrorMessage
            
        }    
    }

    ErrorMessage = () => (
        <FlashMessage duration={5000}>
        <strong>i Will Disappear in 5Secs!</strong>
        </FlashMessage>
    )
    
    render(){
        return(
            <form onSubmit={this.handleSubmit} className= 'form-container'>
                <input
                className='input-text' 
                    type='text' 
                    placeholder='Add student..' 
                    name='fullname'
                    value={this.state.fullname} 
                    onChange = {this.onChange}
                />
                <button className='input-submit'>Submit</button>
            </form>
        )
    }
}

export default InputStudent