import React from "react";
import { connect } from "react-redux";
import PreviewCollection from "../../components/preview-collection/PreviewCollection";
import { selectCollections } from "../../redux/shop/shop.selector";
import { createStructuredSelector } from "reselect";

const Shop = ({ collections }) => (
  <div className="shop-page">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <PreviewCollection key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(Shop);
