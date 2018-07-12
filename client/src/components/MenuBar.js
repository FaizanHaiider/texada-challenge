import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Menu, Dropdown, Image} from 'semantic-ui-react';

import ProductDb from '../api';

const MenuBar = () => (
    <div>
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item>
                    <Image size='small' src='https://texadasoftware.com/wp-content/uploads/2018/02/Texada_logo_ribbon_cmyk-e1518809325461.png' style={{marginRight: '1em'}}/>
                </Menu.Item>
                <Menu.Item as='a'><Link to={'/'}>Home</Link></Menu.Item>
                <Dropdown item simple text='Products'>
                    <Dropdown.Menu inverted>
                        {
                            ProductDb.all().map((product) => (
                                <Dropdown.Item as='a' key={product.id}>
                                    <Link to={`/${product.id}`}>{product.description}</Link>
                                </Dropdown.Item>)
                            )
                        }
                    </Dropdown.Menu>
                </Dropdown>
            </Container>
        </Menu>
    </div>
);

export default MenuBar;