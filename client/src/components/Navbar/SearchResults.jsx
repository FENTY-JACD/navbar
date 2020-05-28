import React from 'react';

const SearchResults = (props) =>{
  let shortened = props.products.slice(0, 8);
  let rowOne = shortened.slice(0, 4);
  let rowTwo = shortened.slice(4);

  let tableStyle = {
    float: 'left'
  };

  let imgStyle = {
    height: '200px',
    width: 'auto'
  };

  return (
    <table className='searchList' style={{borderCollapse: 'separate', borderSpacing: '0 40px', fontFamily: 'brown-regular,Questrial,Times,Arial,sans-serif', fontSize: '20px'}}>
      <tbody>
        <tr style={{cursor: 'pointer'}}>
          {rowOne.map((product, i) => {
            return (
              <td>
                <div className='tableImg' style={tableStyle} key={i}>
                  <img src={product.foreground} style={imgStyle}/>
                </div>
                <div className='tableTxt'>
                  {product.name}
                  <br/>
                 ${product.price}
                </div>
              </td>
            );
          })}
        </tr>

        <tr style={{cursor: 'pointer'}}>
          {rowTwo.map((product, i) =>{
            return (
              <td>
                <div className='tableImg' style={tableStyle} key={i} >
                  <img src={product.foreground} style={imgStyle}/>
                </div>
                <div className='tableTxt'>
                  {product.name}
                  <br/>
                 ${product.price}
                </div>
              </td>
            );
          })}
        </tr>
      </tbody>
    </table>

  );

};

export default SearchResults;