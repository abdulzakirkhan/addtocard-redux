// import { connect } from "react-redux";
import { connect } from "react-redux";
import Home from "../Home";
import { addToCart } from "../Services/Actions/actions";

const mapStateToProps = (state) => ({
  cardData: state.cartItems,
});

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// export default Home;
