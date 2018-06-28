import * as React from 'react';

interface MijnGroepenProps {}
interface MijnGroepenState {
  groepen: any[]
}

class MijnGroepen extends React.Component<MijnGroepenProps, MijnGroepenState> {
  constructor(props: any) {
    super(props);
    this.state = {
      groepen: []
    };
  }

  public componentDidMount() {
    fetch('http://localhost:8080/mijn-groepen', {
      method: 'get',
      headers: new Headers({
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInppcCI6IkdaSVAifQ.H4sIAAAAAAAAAKtWyiwuVrJSKsvPyclX0lHKTCxRsjI0NTYwNDYwNjfSUUqtKIAIGBmamYME0lOTikozs1OLivMSE3OBWrOVagFEjuE9RgAAAA.Gw1j14xA_jHPFCb4tU5ZVLRle3cIs1y0u8aHiu79mio'
      })
    })
        .then(result => result.json())
        .then(data => {
          const groepen = data.map((groep: any) => {
            return (
                <div key={groep.id}>{groep.naam}</div>
            );
          });
          return this.setState({groepen});
        })
  }

  public render() {
    return (
        <div>
          <h4>Mijn groepen</h4>
          {this.state.groepen}
        </div>
    );
  }
}

export default MijnGroepen;
