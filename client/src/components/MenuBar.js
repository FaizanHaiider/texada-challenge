import React from 'react';
import {NavLink} from 'react-router-dom';
import {Container, Menu, Dropdown, Image} from 'semantic-ui-react';

import ProductDb from '../api';

const MenuBar = () => (
    <div>
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item>
                    <Image size='small' src='https://texadasoftware.com/wp-content/uploads/2018/02/Texada_logo_ribbon_cmyk-e1518809325461.png' style={{marginRight: '1em'}}/>
                </Menu.Item>
                <Menu.Item as={NavLink} name='Home' exact to='/'/>
                <Dropdown item simple text='Your Products'>
                    <Dropdown.Menu>
                        {
                            ProductDb.all().map((product) => (
                                <Dropdown.Item as={NavLink} key={product.id} exact to={`/${product.id}`}>
                                    {product.description}
                                </Dropdown.Item>
                            ))
                        }
                    </Dropdown.Menu>
                </Dropdown>
            </Container>
        </Menu>
    </div>
);

export default MenuBar;