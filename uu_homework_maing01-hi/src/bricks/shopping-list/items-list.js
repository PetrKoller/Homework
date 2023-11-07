//@@viewOn:imports
import { createVisualComponent, Utils, Content, PropTypes, useState } from "uu5g05";
import Config from "./config/config.js";
import { Box, Grid, ListItem } from "uu5g05-elements";
import RouteBar from "../../core/route-bar";
import ShoppingListItem from "./shopping-list-item";
import { Form, FormText, SubmitButton } from "uu5g05-forms";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  main: () => Config.Css.css({}),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const ItemsList = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ItemsList",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (
      <Grid>
        {props.data.map((item) => {
          if (!props.displayChecked && item.completed) {
            return;
          }
          return (
            <ShoppingListItem onChecked={props.onItemChecked} key={item.id} onDelete={props.onItemDelete} item={item} />
          );
        })}
      </Grid>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ItemsList };
export default ItemsList;
//@@viewOff:exports
