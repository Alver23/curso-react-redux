import React, { Component } from 'react';
import { connect } from 'react-redux';

class Pagination extends Component {
  paginas = () => {
    var posts = 80;
    var total = Math.ceil(posts/3);
    console.log(total)
    var init = 1;
    var end = 10;

    if (total <= 10) {
      end = total
    } else if (total > 10) {
      //Final
      if (this.props.pagina.page >= total -4) {
        init = total - 9;
        end = total;
      }
      //Inicio
      else if (this.props.pagina.page - 4 <= 0) {
        init = 1;
        end = 10;
      }
      // Todo lo demás
      else {
        init = this.props.pagina.page - 4;
        end = this.props.pagina.page + 5;
      }
    }

    return this.barra(init, end)
  }
  barra = (init, end) => {
    var lista = [];
    for (var i = init; i <= end; i++) {
      lista = lista.concat(
        <th key={i} onClick={(e) => {
          this.props.setCurrent(parseInt(e.target.innerHTML))
        }}>
          {i}
        </th>
      )
    }
    return (
      <div>
        <table>
          <tbody>
          <tr>
            {lista}

          </tr>
          </tbody>
        </table>
      </div>
    )
  }
  render() {
    return (
      <div>
        {this.paginas()}
        {this.props.pagina.page}
      </div>
    )
  }
}

const mapStateToProps =  state => {
  return {
    pagina: state.pagination
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrent: (e) => {
      dispatch({
        type: 'SET_CURRENT',
        page: e
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)