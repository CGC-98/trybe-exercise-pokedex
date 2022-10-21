import React from 'react';
// import propTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const {
      pokemon: {
        id,
        name,
        type,
        averageWeight: { value, measurementUnit },
        image,
        moreInfo
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

// Pokemon.propTypes = {
//   pokemon: propTypes.object.isRequired,
// };

export default Pokemon;
