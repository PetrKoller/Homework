//@@viewOn:imports
import {createVisualComponent, useContext, useState} from "uu5g05";
import Config from "./config/config.js";
import RouteBar from "../core/route-bar";
import {SubmitButton} from "uu5g05-forms";
import {Grid} from "uu5g05-elements";
import ShoppingTile from "../bricks/shopping-lists/shopping-tile";
import UserContext from "../bricks/users/userContext";
import NewShoppingListModal from "../bricks/shopping-lists/new-shopping-list-modal";
import {shoppingLists} from "../fakeData/fakeData";
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

const ShoppingLists = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ShoppingLists",
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
    const [displayArchived, setDisplayArchived] = useState(false);
    const [shoppingListItems, setShoppingListItems] = useState(shoppingLists);
    const [open, setOpen] = useState(false);
    const userContext = useContext(UserContext);

    const handleAddShoppingList = (e) => {
      const listName = e.data.value.listName;
      setShoppingListItems((prev) => {
        return [
          ...prev,
          {
            id: Math.floor(Math.random() * 1000000),
            name: listName,
            archived: false,
            ownerId: userContext.user.id,
          },
        ];
      });
      setOpen(false);
    };

    const handleArchive = (id) =>{
      setShoppingListItems((prev) => {
        return prev.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              archived: true,
            };
          }
          return item;
        });
      });
    }

    const handleUnarchive = (id) =>{
      setShoppingListItems((prev) => {
        return prev.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              archived: false,
            };
          }
          return item;
        });
      });
    }

    const handleDelete = (id) =>{
      setShoppingListItems((prev) => {
        return prev.filter((item) => item.id !== id);
      });
    }
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (<>
      <RouteBar />
      <h1>Shopping lists</h1>
      <div className={Config.Css.css("display: flex; justify-content: right; align-items: center; padding: 1rem")}>
        <SubmitButton onClick={() => setDisplayArchived(!displayArchived)}>{`Display ${displayArchived ? "active" : "all"}`}</SubmitButton>
        <SubmitButton onClick={() => setOpen(true)} className={Config.Css.css("margin-left: 1rem")}>
          Add new shopping list
        </SubmitButton>
      </div>
      <Grid templateColumns={"repeat(4, 1fr)"}>
        {
          shoppingListItems.map((item) => {
            if (!displayArchived && item.archived) {
              return;
            }
            if(item.ownerId !== userContext.user.id && !userContext.isMember(item.members.map((x) => x.id))){
              return;
            }
            return <ShoppingTile key={item.id} item={item} onDelete={handleDelete} onArchive={handleArchive} onUnarchive={handleUnarchive}/>;
          })
        }
      </Grid>
      <NewShoppingListModal show={open} onClose={() => setOpen(false)} onSubmit={handleAddShoppingList}/>
    </>)
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ShoppingLists };
export default ShoppingLists;
//@@viewOff:exports
