import React from "react";
import SHOP_DATA from "../../shopData";
import PrevieCollection from "../../components/preview-collection/PreviewCollection";

class Shop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <PrevieCollection key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}
export default Shop;
