import React, {Component} from "react";

class SearchLocation extends Component{
    state = {
        inputText:''
    }

    onLocChange = (event)=>{
        event.preventDefault()
        this.props.onSubmit(this.state.inputText)
        this.props.hideForm()
        this.setState({
            inputText:''
        })
    }

    handleChange = (event) => {
        this.setState({
            inputText: event.target.value
        })
    }

    render() {
        return (
            <section>
                <form onSubmit={this.onLocChange}>
                    <input type="text" value={this.state.inputText} onChange={ this.handleChange }/>
                    <input type="submit" value="Find Location"/>
                </form>
            </section>
        )
    }
}

export default SearchLocation