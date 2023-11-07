//@@viewOn:imports
import { createVisualComponent, Utils, Content, Lsi, useState, useContext } from "uu5g05";
import Config from "./config/config.js";
import { Button, Grid, ListItem, Modal } from "uu5g05-elements";
import { Form, FormText, SubmitButton } from "uu5g05-forms";
import ShoppingListItem from "../shopping-list-item";
import MembersList from "./members-list";
import NewMember from "./new-member";
import UserContext from "../../users/userContext";
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

const MembersModal = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "MembersModal",
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
    const [membersList, setMembersList] = useState(props.members);
    const userContext = useContext(UserContext);

    const handleAddMember = (e) => {
      const newMember = e.data.value.newMember;
      setMembersList((prev) => {
        return [
          ...prev,
          {
            id: Math.floor(Math.random() * 1000000),
            name: newMember,
            username: newMember,
          },
        ];
      });
    };

    const handleDelete = (id) => {
      setMembersList((prev) => {
        return prev.filter((member) => member.id !== id);
      });
    };

    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface
    //@@viewOn:render
    return (
      <Modal
        open={props.show}
        onClose={props.onClose}
        actionDirection="horizontal"
        header={<Lsi lsi={{ en: "Members", cs: "Členové" }} />}
      >
        {userContext.isOwner(props.ownerId) && <NewMember onSubmit={handleAddMember} />}
        <MembersList ownerId={props.ownerId} data={membersList} onItemDelete={handleDelete} />
      </Modal>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { MembersModal };
export default MembersModal;
//@@viewOff:exports
