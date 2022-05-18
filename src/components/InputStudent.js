import React, {Component} from 'react'

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
        this.props.addStudentProps(this.state.fullname)
        this.setState({
            fullname: ''
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                    type='text' 
                    placeholder='Add student..' 
                    name='fullname'
                    value={this.state.fullname} 
                    onChange = {this.onChange}
                />
                <button>Submit</button>
            </form>
        )
    }
}

export default InputStudent