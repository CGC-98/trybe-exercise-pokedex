import React from 'react';
import PropTypes from 'prop-types';

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
  pokemon: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.string,
      measurementUnit: PropTypes.string,
    }),
    image: PropTypes.string,
  }),
}.isRequired;

export default Pokemon;
