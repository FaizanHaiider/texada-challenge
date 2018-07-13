// import React, { Component } from 'react'
// import { Form, Container } from 'semantic-ui-react'

// import ProductDb from '../api';
// import MenuBar from '../components/MenuBar';

// class FormExampleCaptureValues extends Component {
//   state = { name: '', email: '' }

    
//   handleChange = (e, { name, value }) => this.setState({ [name]: value })

//   handleSubmit = () => {
//     const { name, email } = this.state

//     this.setState({ submittedName: name, submittedEmail: email })
//   }

//   render() {
//     const { name, email, submittedName, submittedEmail } = this.state
//     console.log(match);
//     return (
//       <div>
//         <MenuBar/>
//         <Container text textAlign='center' style={{marginTop: '7em'}} >
//             <Form onSubmit={this.handleSubmit}>
//             <Form.Group>
//                 <Form.Input placeholder='Name' name='name' value={name} onChange={this.handleChange} />
//                 <Form.Input
//                 placeholder='Email'
//                 name='email'
//                 value={email}
//                 onChange={this.handleChange}
//                 />
//                 <Form.Button content='Submit' />
//             </Form.Group>
//             </Form>
//         </Container>
//       </div>
//     )
//   }
// }

// export default FormExampleCaptureValues
