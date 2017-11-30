import * as React from 'react';
import * as fetch from 'isomorphic-fetch';

class Create extends React.Component<{}, {
  name: string;
  description: string;
  departament: string;
  departaments: any;
  image?: string;
}> {
  state = {
    name: '',
    description: '',
    departament: '',
    departaments: [],
  };

  async componentDidMount() {
    const res = await fetch('/dashboard/departaments/all');
    const departaments = await res.json();

    this.setState({
      departaments,
    });
  }

  submitCourse() {}

  render() {
    return (
      <form className="uk-container">
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
              />
            </div>
          </div>

          <div className="uk-margin">
            <label htmlFor="departament-description" className="uk-form-label">Описание</label>
            <div className="uk-form-controls">
              <textarea name="description" id="departament-description" rows={5} className="uk-textarea" value={this.state.description} />
            </div>
          </div>

          <div className="uk-margin">
            <label htmlFor="course-departament" className="uk-form-label">Факультет</label>
            <div className="uk-form-controls">
              <select name="departament" id="course-departament" className="uk-select">
                <option key={0} value={0}>выберите факультет...</option>
              </select>
            </div>
          </div>

          <div className="uk-margin">
            <label htmlFor="departament-image" className="uk-form-label" data-uk-form-custom="true">
              Изображение курса
            </label>
          </div>
          <div className="uk-margin">
            <div uk-form-custom="true">
              <input type="file" name="image" id="departament-image" />
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
