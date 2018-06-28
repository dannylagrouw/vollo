import * as React from 'react';
import {Button, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';

class Login extends React.Component<any, any> {

  constructor(props: any) {
    super(props);

    this.state = {
      gebruikersnaam: '',
      wachtwoord: ''
    };
  }

  validateForm() {
    return this.state.gebruikersnaam.length > 0 && this.state.wachtwoord.length > 0;
  }

  handleChange = (event: any) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  render() {
    return (
        <div className="Login">
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="gebruikersnaam"
                       bsSize="large">
              <ControlLabel>Gebruikersnaam</ControlLabel>
              <FormControl
                  autoFocus={true}
                  type="text"
                  value={this.state.gebruikersnaam}
                  onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup controlId="wachtwoord"
                       bsSize="large">
              <ControlLabel>Wachtwoord</ControlLabel>
              <FormControl
                  value={this.state.wachtwoord}
                  onChange={this.handleChange}
                  type="password"
              />
            </FormGroup>
            <Button
                block={true}
                bsSize="large"
                disabled={!this.validateForm()}
                type="submit"
            >
              Login
            </Button>
          </form>
        </div>
    );
  }
}

export default Login;
