/**
 * Vendor
 */

import * as React from 'react';
import { connect } from 'react-redux';

/**
 * Components
 */

import Test from '../../components/test';
import TestResult from '../../components/test/result';

/**
 * Expo
 */

class Tests extends React.Component<{}, {}> {
  state = {
    questions: [],
    chosenAnswer: 0,
    userAnswers: [],
    rightAnswers: [],
    currentStep: 0,
    inProgress: true,
  };

  componentDidMount() {
    this.setState({
      questions: this.props.courses.current.questions,
    });
  }

  handleClickNext = (rightAnswer = 0, userAnswer = 0) => {
    const { questions, currentStep, chosenAnswer, userAnswers } = this.state;

    return this.setState({
      currentStep: currentStep + 1,
      userAnswers: [...this.state.userAnswers, userAnswer],
      rightAnswers: [...this.state.rightAnswers, rightAnswer],
      inProgress: currentStep >= questions.length - 1 ? false : true,
    });
  }

  render() {
    const { inProgress, questions, currentStep, rightAnswers, userAnswers } = this.state;
    const question = questions[currentStep];

    return (
      <div>
        {inProgress && !!question && <Test
            name={question.question}
            steps={questions}
            step={question}
            currentStep={currentStep}
            handleClickNext={this.handleClickNext}
          />
        }
        {!inProgress && !!question && <TestResult
            name={question.question}
            questions={questions}
            rightAnswers={rightAnswers}
            userAnswers={userAnswers}
          />
        }
      </div>
    );
  }
}

const mapStateToProps = ({ courses }) => ({ courses });

export default connect(mapStateToProps)(Tests);

