import * as React from 'react';
import * as fetch from 'isomorphic-fetch';

interface IEvent extends Event {
  target: HTMLInputElement;
}

class Create extends React.Component<{
  name?: string;
  description?: string;
  image?: string;
}, {
  name?: string;
  description?: string;
  image?: string;
}> { 
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event: IEvent) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event: IEvent) {
    fetch('/dashboard/departament/create', { method: 'post', body: {} }).then();

    event.preventDefault();
  }

  render() {
    return (
      <form className="uk-container" onSubmit={this.handleSubmit}>
        <fieldset className="uk-fieldset">
          <div className="uk-margin">
            <label htmlFor="departament-name" className="uk-form-label">Название</label>
            <div className="uk-form-controls">
              <input
                type="text"
                id="departament-name"
                className="uk-input"
                name="name"
                value={this.state.name}
                onChange={this.handleInputChange}
              />
            </div>
          </div>

          <div className="uk-margin">
            <label htmlFor="departament-description" className="uk-form-label">Описание</label>
            <div className="uk-form-controls">
              <textarea
                name="description"
                id="departament-description"
                rows={5}
                className="uk-textarea"
                value={this.state.description}
                onChange={this.handleInputChange}
              />
            </div>
          </div>

          <div className="uk-margin">
            <label htmlFor="departament-image" className="uk-form-label" data-uk-form-custom="true">
              Изображение Факультета
            </label>
          </div>
          <div className="uk-margin">
            <div uk-form-custom="true">
              <input type="file" id="departament-image" />
              <button className="uk-button uk-button-default" type="button" tabIndex={-1}>Выбрать</button>
            </div>
          </div>

          <hr/>
          <div className="uk-margin">
            <input type="submit" className="uk-button uk-button-primary" value="сохранить" />
          </div>
        </fieldset>
      </form>
    );
  }
}

export default Create;
