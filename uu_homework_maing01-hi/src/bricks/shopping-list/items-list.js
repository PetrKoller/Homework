//@@viewOn:imports
import {createVisualComponent, Utils, Content, PropTypes, useState} from "uu5g05";
import Config from "./config/config.js";
import {Box, Grid, ListItem} from "uu5g05-elements";
import RouteBar from "../../core/route-bar";
import ShoppingListItem from "./shopping-list-item";
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
  propTypes: {
    data: PropTypes.arrayOf([
      {
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
      },
    ]),
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const [shoppingList, setShoppingList] = useState(props.data);
    const { children } = props;

    const handleDelete = (id) => {
      setShoppingList(prev => prev.filter(item => item.id !== id))
    }
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
      return (
          <Grid>
              {
                shoppingList.map(item => {
                    return <ShoppingListItem key={item.id} onDelete={handleDelete} item={item}/>
                })
              }
          </Grid>
      )
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ItemsList };
export default ItemsList;
//@@viewOff:exports
