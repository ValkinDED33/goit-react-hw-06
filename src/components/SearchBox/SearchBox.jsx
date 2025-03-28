import { Component } from "react";
import { connect } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

class SearchBox extends Component {
  handleChange = (e) => {
    this.props.changeFilter(e.target.value);
  };

  render() {
    return (
      <input
        className={css.input}
        type="text"
        placeholder="Поиск контактов"
        value={this.props.filter}
        onChange={this.handleChange}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  filter: state.filters.name,
});

const mapDispatchToProps = { changeFilter };

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
