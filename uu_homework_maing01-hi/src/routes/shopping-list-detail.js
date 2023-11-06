//@@viewOn:imports
import {createVisualComponent, Utils, Content, useState, Lsi} from "uu5g05";
import Config from "./config/config.js";
import RouteBar from "../core/route-bar";
import {ActionGroup, Box, Button, Dialog, Input, ListItem, Modal} from "uu5g05-elements";
import ItemsList from "../bricks/shopping-list/items-list";
import {shoppingListDetail} from "../fakeData/fakeData"
import {CancelButton, Form, FormText, SubmitButton} from "uu5g05-forms";
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
      const [listDetail, setListDetail] = useState(shoppingListDetail)
      const [displayChecked, setDisplayChecked] = useState(true)
      const [showEditName, setShowEditName] = useState(false)
      const handleDelete = (id) => {
          setListDetail(prev => {
                return {
                    ...prev,
                    items: prev.items.filter(item => item.id !== id)
                }
          })
      }

      const handleDisplayChecked = () => {
            setDisplayChecked(prev => !prev)
      }

      const handleItemChecked = (id) => {
          setListDetail(prev => {
              return {
                  ...prev,
                  items: prev.items.map(item => {
                      if(item.id === id){
                          return {
                              ...item,
                              completed: !item.completed
                          }
                      }
                      return item
                  })
              }
          })
      }

      const handleCreate = (e) => {
          setListDetail(prev => {
              return {
                  ...prev,
                  items: [
                      ...prev.items,
                      {
                          id: Math.floor(Math.random() * 1000000),
                          completed: false,
                          name: e.data.value.newItem,
                      }
                  ]
              }
          })
      }

      const handleNameEdit = (e) => {
            setListDetail(prev => {
                return {
                    ...prev,
                    name: e.data.value.newName
                }
            })
            setShowEditName(false)
      }
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render


    return (
        <>
            <RouteBar/>
            <h1 className={Config.Css.css("margin-left: 1rem")}>{listDetail.name}</h1>
            <div className={Config.Css.css("display: flex; justify-content: right; align-items: center; padding: 1rem")}>
            <Form onSubmit={handleCreate}>
                <div className={Config.Css.css("display: flex; justify-content: left; padding: 1rem")}>
                    <FormText name="newItem" placeholder="New item"/>
                    <SubmitButton>Add new item</SubmitButton>
                </div>
            </Form>
            <SubmitButton onClick={handleDisplayChecked}>{`Display ${displayChecked ? "unchecked" : "all"}`}</SubmitButton>
                <SubmitButton className={Config.Css.css("margin-left: 1rem")} onClick={() => setShowEditName(true)}>Edit name</SubmitButton>
                <SubmitButton className={Config.Css.css("margin-left: 1rem")}>Display members</SubmitButton>
            </div>
          <ItemsList onItemChecked={handleItemChecked} displayChecked={displayChecked} onItemDelete={handleDelete} data={listDetail.items}/>
            <Modal
            open={showEditName}
            onClose={() => setShowEditName(false)}
            actionDirection="horizontal"
            header={<Lsi lsi={{ en: "Edit name", cs: "Upravit název" }} />}
            >
                <Form onSubmit={handleNameEdit}>
                    <div className={Config.Css.css("padding: 1rem; text-align: right")}>
                        <FormText name="newName" placeholder="New name" value={listDetail.name}/>
                        <Button onClick={() => setShowEditName(false)}>Cancel</Button>
                        <SubmitButton className={Config.Css.css("margin: 1rem")}>Submit</SubmitButton>
                    </div>
                </Form>
            </Modal>
        </>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ShoppingListDetail };
export default ShoppingListDetail;
//@@viewOff:exports
