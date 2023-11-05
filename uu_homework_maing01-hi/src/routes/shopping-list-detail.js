//@@viewOn:imports
import { createVisualComponent, Utils, Content } from "uu5g05";
import Config from "./config/config.js";
import RouteBar from "../core/route-bar";
import {ActionGroup, Box, ListItem} from "uu5g05-elements";
import ItemsList from "../bricks/shopping-list/items-list";
import {shoppingListDetail} from "../fakeData/fakeData"
import {Form, FormText, SubmitButton} from "uu5g05-forms";
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

const ShoppingListDetail = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ShoppingListDetail",
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
    const { children } = props;
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render


    return (
        <>
            <RouteBar/>
            <Form>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <FormText name="newItem" placeholder="New item"/>
                    <SubmitButton>Add new item</SubmitButton>
                </div>
            </Form>
          <ItemsList data={shoppingListDetail.items}/>
        </>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ShoppingListDetail };
export default ShoppingListDetail;
//@@viewOff:exports
