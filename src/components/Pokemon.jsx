import React from 'react';
import propTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const {
      pokemon: {
        id,
        name,
        type,
        averageWeight: { value, measurementUnit },
        image,
      },
    } = this.props;
    return (
      <li key={ id }>
        <p>{ name }</p>
        <p>{ type }</p>
        <p>{`${value} ${measurementUnit}`}</p>
        <img src={ image } alt={ name } />
      </li>
    );
  }
}

Pokemon.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  pokemon: propTypes.object.isRequired,
  // id: propTypes.string.isRequired,
  // name: propTypes.string.isRequired,
  // type: propTypes.string.isRequired,
  // value: propTypes.string.isRequired,
  // measurementUnit: propTypes.string.isRequired,
  // image: propTypes.string.isRequired,
};

export default Pokemon;
