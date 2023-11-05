//@@viewOn:imports
import {createVisualComponent, Utils, Content, useState, PropTypes} from "uu5g05";
import Config from "./config/config.js";
import {Grid, ListItem} from "uu5g05-elements";
import {Form, FormText} from "uu5g05-forms";
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

const ShoppingListItem = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ShoppingListItem",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    onDelete: PropTypes.func,
  },
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { children } = props;
    const [checked, setChecked] = useState(false);
    const actions = [
      {
        icon: "uugds-delete",
        onClick: () => props.onDelete(props.item.id),
        disabled: checked,
      },
      {
        icon: checked ? "uugds-close" : "uugds-check",
        onClick: () => setChecked(prev => !prev),
      },
    ];
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return <Grid.Item>
      <ListItem actionList={actions} className={Config.Css.css(`margin: 0.1rem 1rem;padding: 1rem 1rem;${checked ? "text-decoration: line-through;" : ""}`)}>{props.item.name}</ListItem>
    </Grid.Item>
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ShoppingListItem };
export default ShoppingListItem;
//@@viewOff:exports
