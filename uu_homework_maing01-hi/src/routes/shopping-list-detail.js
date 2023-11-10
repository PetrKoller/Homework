//@@viewOn:imports
import {createVisualComponent, useContext, useRoute, useState} from "uu5g05";
import Config from "./config/config.js";
import RouteBar from "../core/route-bar";
import ItemsList from "../bricks/shopping-list/items-list";
import {shoppingLists} from "../fakeData/fakeData";
import ShoppingListActions from "../bricks/shopping-list/shopping-list-actions";
import EditNameModal from "../bricks/shopping-list/edit-name-modal";
import MembersModal from "../bricks/shopping-list/members/members-modal";
import UserContext from "../bricks/users/userContext";
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
    const [route, setRoute] = useRoute();
    const [listDetail, setListDetail] = useState(shoppingLists.find((x) => x.id === route.params.id) ?? shoppingLists[0]);
    const [displayChecked, setDisplayChecked] = useState(true);
    const [showEditName, setShowEditName] = useState(false);
    const [showMembers, setShowMembers] = useState(false);
    const userContext = useContext(UserContext);
    const handleDelete = (id) => {
      setListDetail((prev) => {
        return {
          ...prev,
          items: prev.items.filter((item) => item.id !== id),
        };
      });
    };

    const handleDisplayChecked = () => {
      setDisplayChecked((prev) => !prev);
    };

    const handleItemChecked = (id) => {
      setListDetail((prev) => {
        return {
          ...prev,
          items: prev.items.map((item) => {
            if (item.id === id) {
              return {
                ...item,
                completed: !item.completed,
              };
            }
            return item;
          }),
        };
      });
    };

    const handleCreate = (e) => {
      setListDetail((prev) => {
        return {
          ...prev,
          items: [
            ...prev.items,
            {
              id: Math.floor(Math.random() * 1000000),
              completed: false,
              name: e.data.value.newItem,
            },
          ],
        };
      });
    };

    const handleNameEdit = (e) => {
      setListDetail((prev) => {
        return {
          ...prev,
          name: e.data.value.newName,
        };
      });
      setShowEditName(false);
    };
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const memberSection = userContext.isMember(listDetail.members.map((x) => x.id)) && (
      <>
        <ShoppingListActions
          shoppingListId={listDetail.id}
          onDisplayChecked={handleDisplayChecked}
          displayChecked={displayChecked}
          onNameEdit={() => setShowEditName(true)}
          onItemCreate={handleCreate}
          onMembersClick={() => setShowMembers(true)}
        />
        <ItemsList
          onItemChecked={handleItemChecked}
          displayChecked={displayChecked}
          onItemDelete={handleDelete}
          data={listDetail.items}
        />
      </>
    );
    return (
      <>
        <RouteBar />
        <h1 className={Config.Css.css("margin-left: 1rem")}>{listDetail.name}</h1>
        {memberSection}
        <EditNameModal show={showEditName} onClose={() => setShowEditName(false)} onSubmit={handleNameEdit} />
        <MembersModal
          members={listDetail.members}
          ownerId={listDetail.id}
          show={showMembers}
          onClose={() => setShowMembers(false)}
        />
      </>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ShoppingListDetail };
export default ShoppingListDetail;
//@@viewOff:exports
