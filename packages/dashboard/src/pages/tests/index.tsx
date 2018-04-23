/*!
 * Vendor
 */

import * as React from 'react';
import { connect } from 'react-redux';

/*!
 * Components
 */

import Test from '../../components/test';
import TestResult from '../../components/test/result';

/*!
 * Helpers
 */

function getRandomArrayElements(arr, count) {
  const shuffled = arr.slice(0);
  let i = arr.length;
  let temp;
  let index;
  
  const min = i - count;

  while (i-- > min) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }
  return shuffled.slice(min);
}

/*!
 * Expo
 */

class Tests extends React.Component<{}, {}> {
  state = {
    questions: [],
    userAnswers: [],
    currentStep: 0,
    chosenAnswer: 0,
    rightAnswersCount: 0,
    inProgress: true,
  };

  componentDidMount() {
    const allQuestions = this.props.courses.current.questions;
    const questions = getRandomArrayElements(allQuestions, 10);

    this.setState({ questions });
  }

  handleClickNext = (rightAnswer = 0, userAnswer = 0) => {
    const { questions, currentStep, userAnswers } = this.state;

    return this.setState({
      currentStep: currentStep + 1,
      userAnswers: [...this.state.userAnswers, userAnswer],
      inProgress: currentStep >= questions.length - 1 ? false : true,
      rightAnswersCount: userAnswer === rightAnswer ? this.state.rightAnswersCount + 1 : this.state.rightAnswersCount,
    });
  }

  render() {
    const { inProgress, questions, currentStep, rightAnswersCount, userAnswers } = this.state;
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
        {!inProgress && !!questions && <TestResult
            questions={questions}
            userAnswers={userAnswers}
            name={this.props.courses.current.name}
            rightAnswersCount={this.state.rightAnswersCount}
          />
        }
      </div>
    );
  }
}

const mapStateToProps = ({ courses }) => ({ courses });

export default connect(mapStateToProps)(Tests);

