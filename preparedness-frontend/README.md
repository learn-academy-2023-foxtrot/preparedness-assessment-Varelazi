# Preparedness Assessment

# Frontend Functionality
- The application has a title of Preparedness Assessment
    - Already Done

- The application has an input field
    - Already Done

- The input field has a label that says Enter your name
    - Already Done

- Below the input field there are two buttons
    - Already Done

- The first button says Click Me
    - Already Done

- The second button says Reset
    - Already Done

- The user can enter their name in the input field
    - Already Done

- When the Click Me button is selected a modal appears
    - Using as a reference: 
```js
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function Example(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Click Me
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Example;
```

- The modal has a header that greets the user with their name
    - Input: Text
    - Output: Text being passed
    - Process: Pass the inputed text as a prop to the ModalComponent. Make the <Input> have values. Whenever the name inside of the input changes it should update on the ModalComponent, so use props and useState. 
```js
const [name, setName] = useState('') 
const passName = (event) => {
    setName(event.target.value) 
}
<Input onChange={passName} value={name}/>
<ModalComponent name={name}/> 

// Inside of the ModalComponent.js file, pass the value
<ModalHeader toggle={toggle}>{props.name}</ModalHeader>
```

- The modal has a body with lorem ipsum filler text
    - Done!

- The modal has a close button
    - Already in the reference:
```js
<Button color="secondary" onClick={toggle}>Close</Button>
```

- The close button in modal closes the modal
    - Done! That is what the onClick={toggle} is for.

-The Reset button clears the input field
```js
const handleReset = () =>{
    setName('') 
  }
<Button onClick={handleReset}>Reset</Button>
```

# Frontend Styling

- The background is this image
    - Done
- The header text color is white and is 50px
    - Done
- The header is centered on the page
    - Done
- The input label text color is white and is 35px
    - Done
- The input label is centered on the page
    - Done
- The input field text is 18px
    - Done
- The input field should take up 50% of the width of the page
    - Done
- The input field is centered on the page
    - Done
- There is 12px of padding on the left and the right of the input field
    - Done
- There is 6px of padding on the top and the bottom of the input field
    - Done
- The buttons are centered under the input field
    - Done
- The background color of the buttons are #0dcaf0
    - Done
- The color of the text on the buttons is white
    - Done
- Button width is set to 100px
    - Done
- There is 10px of padding on all sides of the button
    - Done
- There is 20px between the two buttons
    - Done
- There is 20px between the bottom of the input and the top of the buttons
    - Done