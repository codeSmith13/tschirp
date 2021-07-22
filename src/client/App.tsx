import * as React from 'react';
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

// import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'



// import { useState, useEffect } from 'react';


/* HOOK REACT EXAMPLE */
// const App = (props: AppProps) => {
// 	const [greeting, setGreeting] = useState<string>('');

// 	useEffect(() => {
// 		async function getGreeting() {
// 			try {
// 				const res = await fetch('/api/chirp');
// 				const greeting = await res.json();
// 				setGreeting(greeting);
// 			} catch (error) {
// 				console.log(error);
// 			}
// 		}
// 		getGreeting();
// 	}, []);

// 	return (
// 		<main className="container my-5">
// 			<h1 className="text-primary text-center">Hello {greeting}!</h1>
// 		</main>
// 	);
// };

// interface AppProps {}

/* CLASS REACT EXAMPLE */
class App extends React.Component<IAppProps, IAppState> {
	constructor(props: IAppProps) {
		super(props);
		this.state = {
			name: null
		};
	}

	async componentDidMount() {
		try {
			let r = await fetch('./api/chirps'); let name = await r.json();
			this.setState({ name });
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		return (
			<>
				<div>
	<Navbar bg="dark" variant="dark" expand="sm">
  <Container>
    <Navbar.Brand href="#home">Chirper</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Chirps</Nav.Link>
        <Nav.Link href="#link">Add Chirp</Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>


				<Card className="m-5">
					<Card.Header>Featured</Card.Header>
					<Card.Body className="card" >
						<Card.Title className="text-center">Chirper</Card.Title>
						<Card.Text className="text-center">
							Say something interesting
						</Card.Text>
						<InputGroup hasValidation>
							<InputGroup.Text>@</InputGroup.Text>
							<Form.Control type="text" required isInvalid />
							<Form.Control.Feedback type="invalid">
								Please choose a username.
							</Form.Control.Feedback>
							<InputGroup.Text>Add Chirp</InputGroup.Text>
							<Form.Control as="textarea" aria-label="With textarea" />
						</InputGroup>


						<Button className="m-3" variant="primary">Chirp</Button>
					</Card.Body>
				</Card>

			</>

		);
	}
}

export interface IAppProps { }

export interface IAppState {
	name: string;
}

export default App;
