//@@viewOn:imports
import {createVisualComponent, useContext, useState} from "uu5g05";
import Config from "./config/config.js";
import {Grid} from "uu5g05-elements";
import {SubmitButton} from "uu5g05-forms";
import ShoppingTile from "./shopping-tile";
import UserContext from "../users/userContext";
import NewShoppingListModal from "./new-shopping-list-modal";
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

const ShoppingListsOverview = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ShoppingListsOverview",
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
    const [open, setOpen] = useState(false);
    const userContext = useContext(UserContext);

    const handleAddShoppingList = async (e) => {
      const listName = e.data.value.listName;
      await props.shoppingListDataList.handlerMap.create(listName);
      setOpen(false);
    };

    const handleArchive = async (shoppingListDataObject) =>{
      await shoppingListDataObject.handlerMap.update({...shoppingListDataObject.data, archived: true})
    }

    const handleUnarchive = (shoppingListDataObject) =>{
      shoppingListDataObject.handlerMap.update({...shoppingListDataObject.data, archived: false})
    }

    const handleDelete = (shoppingListDataObject) =>{
      shoppingListDataObject.handlerMap.delete();
    }
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const shoppingListItems = props.shoppingListDataList.data.filter((item) => item !== undefined);
    return (
      <>
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
              if (!displayArchived && item.data.archived) {
                return;
              }
              if(item.data.ownerId !== userContext.user.id && !userContext.isMember(item.data.members.map((x) => x.id))){
                return;
              }
              return <ShoppingTile key={item.data.id} item={item} onDelete={handleDelete} onArchive={handleArchive} onUnarchive={handleUnarchive}/>;
            })
          }
        </Grid>
        <NewShoppingListModal show={open} onClose={() => setOpen(false)} onSubmit={handleAddShoppingList}/>
      </>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ShoppingListsOverview };
export default ShoppingListsOverview;
//@@viewOff:exports
