//@@viewOn:imports
import { createVisualComponent, Utils, Content } from "uu5g05";
import Config from "./config/config.js";
import RouteBar from "../core/route-bar";
import {ActionGroup, Box, ListItem} from "uu5g05-elements";
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
    const itemList = [
      {
        icon: "uugds-reload",
        collapsedChildren: "Update",
        itemList: [
          { children: "Update Name", onClick: () => alert("update name") },
          { children: "Update Surname", onClick: () => alert("update surname") },
        ],
      },
      { icon: "uugds-plus", children: "Create", onClick: () => alert("create") },
      {
        icon: "uugds-delete",
        children: "Move to trash",
        onLabelClick: () => alert("move to trash"),
        itemList: [
          { children: "Delete permanently", colorScheme: "negative", onClick: () => alert("delete permanently") },
        ],
      },
      { divider: true },
      { icon: "uugds-settings", children: "Settings", onClick: () => alert("settings"), iconNotification: true },
    ];

    return (
      <div className={Config.Css.css`display: flex;`}>
        <ListItem actionList={itemList} >
          <div>Karel</div>
        </ListItem>
      </div>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ShoppingListDetail };
export default ShoppingListDetail;
//@@viewOff:exports
