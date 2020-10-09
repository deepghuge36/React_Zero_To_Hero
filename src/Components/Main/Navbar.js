import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Dipak React Basic</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link className='nav-link' to="/">Home</Link>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Projects
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link className='nav-link' to="/project/inputstate/">InputState</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link className='nav-link' to="/project/calculator/">Calculator</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link className='nav-link' to="/project/stopwatch/">Stop-Watch</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link className='nav-link' to="/project/bmi/">BMI</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link className='nav-link' to="/project/thermometer/">Thermometer</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link className='nav-link' to="/project/form/">Form Data</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link className='nav-link' to="/project/todolist/">To Do List</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link className='nav-link' to="/project/todolisthooks/">To Do List Hook</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link className='nav-link' to="/project/hoccounter">HOC Counter</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link className='nav-link' to="/project/add-tasks">Context Add Task</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link className='nav-link' to="/project/view-tasks">Context View Task</Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Close
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Projects
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link className='nav-link' to="/project/view-movies/">Reducer View Movies</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link className='nav-link' to="/project/add-movies/">Reducer Add Movies</Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          {/* <NavbarText><button className="btn btn-primary" className='nav-link' to="/">Project</button></NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;