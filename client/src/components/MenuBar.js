import React from 'react';
import {Container, Menu, Dropdown, Image} from 'semantic-ui-react';

const MenuBar = (props) => (
    <div>
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item>
                    <Image size='small' src='https://texadasoftware.com/wp-content/uploads/2018/02/Texada_logo_ribbon_cmyk-e1518809325461.png' style={{marginRight: '1em'}}/>
                </Menu.Item>
                <Menu.Item as='a'>Home</Menu.Item>
                <Dropdown item simple text='Products'>
                    <Dropdown.Menu>
                        {
                            props.products.map((product) => {
                                return <Dropdown.Item key={product.id}>{product.description}</Dropdown.Item>
                            })
                        }
                    </Dropdown.Menu>
                </Dropdown>
            </Container>
        </Menu>
    </div>
);

export default MenuBar;