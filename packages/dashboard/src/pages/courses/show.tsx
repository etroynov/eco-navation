/*!
 * Vendor
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { Col, Row, Steps, Button } from 'antd';
import { Link } from 'react-router-dom';

/*!
 * Actions
 */

import { fetchCourse, fetchCourseTestQuestions } from '../../actions/coursesActions';

/*!
 * Components
 */

import Dashboard from '../../components/layout';
const Step = Steps.Step;

/*!
 * Expo
 */

class Course extends React.Component<{
  fetchCourse: any;
  fetchCourseTestQuestions: any;
  match: any;
  courses: {
    current: {
      _id: string;
      questions: any[];
      lessons: any[];
    },
  }
}, {
  currentLesson: number;
}> {
  state = {
    currentLesson: 0,
  };

  async componentDidMount() {
    const { match: { params } } = this.props;

    await this.props.fetchCourse(params.id);
    await this.props.fetchCourseTestQuestions(params.id);
  }

  handleClickNext = () => {
    const { currentLesson } = this.state;
    
    return this.setState({
      currentLesson: this.state.currentLesson + 1,
    });
  }

  handleClickPrev = () => {
    const { currentLesson } = this.state;

    if (currentLesson <= 0) { return false; }

    return this.setState({
      currentLesson: currentLesson - 1,
    });
  }

  render() {
    const { currentLesson } = this.state;
    const {
      _id = '',
      lessons = [],
      questions = [],
    } = this.props.courses.current;

    return (
      <Dashboard>
        <Row>
          <Col span={6} style={{ paddingRight: '20px' }}>
            <section
              style={{
                padding: '20px',
                background: '#ffffff',
              }}
            >
              <header
                style={{
                  marginBottom: '20px',
                  borderBottom: '1px solid #eeeeee',
                }}
              >
                <h3>Тематический план</h3>
              </header>
              <Steps direction="vertical" size="small" current={currentLesson}>
                {lessons.map(({ name }, index) => <Step key={index} title={name} />)}
              </Steps>
            </section>
          </Col>
          <Col span={18} style={{ paddingLeft: '20px' }}>
            <article
              style={{
                padding: '20px',
                background: '#ffffff',
              }}
            >
              <header style={{ marginBottom: '20px', textAlign: 'center', borderBottom: '1px solid #eeeeee' }}>
                <h2>{lessons[currentLesson] && lessons[currentLesson].name}</h2>
                <hr style={{ margin: 0, border: 'none', borderBottom: '1px solid #eeeeee' }} />
                <div style={{ padding: '15px 0', overflow: 'hidden' }}>
                  {
                    !!questions.length
                    ? <Link to={`/tests/${_id}`}>
                        <Button type="primary" icon="exception" style={{ float: 'left' }}>
                          Пройти тест
                        </Button>
                      </Link>
                    : questions.length
                  }
                  <Button type="primary" icon="arrow-right" onClick={this.handleClickNext} style={{ float: 'right' }} />
                  <Button type="primary" icon="arrow-left" onClick={this.handleClickPrev} style={{ marginRight: 15, float: 'right' }} />
                </div>
              </header>
              <section dangerouslySetInnerHTML={{ __html: lessons[currentLesson] && lessons[currentLesson].content }} />
              <footer style={{ overflow: 'hidden' }}>
                <hr style={{ border: 'none', borderBottom: '1px solid #eeeeee' }} />
                <Button type="primary" icon="arrow-right" onClick={this.handleClickNext} style={{ float: 'right' }} />
                <Button type="primary" icon="arrow-left" onClick={this.handleClickPrev} style={{ marginRight: 15, float: 'right' }} />
              </footer>
            </article>
          </Col>
        </Row>
      </Dashboard>
    );
  }
}

const mapStateToProps = ({ courses }) => ({ courses });

export default connect(
  mapStateToProps,
  { fetchCourse, fetchCourseTestQuestions },
)(Course as any);
