import React from 'react';

class Form extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      title: "" ,
      globalTitle: ""
    }
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.forV = this.forV.bind(this);
  }
  onChange(e) {
    this.setState({
      title: e.target.value,
    });
    
  }
  forV () {
    console.log("Titre changé")
    this.setState({
      globalTitle: `Mon formulaire- ${this.state.title}`,
    })
    console.log(this.state.globalTitle)
  }
  componentDidMount() {
    console.log("Formulaire rendu")
  }
    submitForm(e) {
      e.preventDefault();
      
    }

  render() {
    return (
    <div>
      <form onSubmit={this.submitForm}>
        <fieldset>
          <legend>Informations</legend>
          <h1>{this.state.globalTitle}</h1>
          <div className="form-data">
            <label htmlFor="lastname">Name of film</label>
            <input
            type="text"
            id="lastname"
            name="name"
            onChange={this.onChange}
            value={this.state.title}
            />
          </div>
          <div className="form-data">
            <button onClick={this.forV} type="submit" value="Envoyer"> envoyer </button>
          </div>
          <div>
            
          </div>
        </fieldset>
      </form>  
    </div>
    )
  }
}

export default Form ;