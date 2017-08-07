import React from 'react';
import Link from 'gatsby-link';

import './ProgressBar.scss';

const EXPERIENCE_LIMIT = 5;

class ProgressBar extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        progress: this.props.experience / EXPERIENCE_LIMIT * 100
      });
    }, 1);
  }

  render() {
    const { description, name } = this.props;

    return (
      <div className="progress-bar">
        <div className="progress-bar__name">
          {name} <span className="progress-bar__description">{description}</span>
        </div>
        <div className="progress-bar__content">
          <div className="progress-bar__progress" style={{ width: `${this.state.progress}%` }} />
        </div>
      </div>
    );
  }
}

ProgressBar.defaultProps = {
  name: 'Name',
  experience: 2.5
};

export default ProgressBar;
