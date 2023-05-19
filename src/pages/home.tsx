import React, { useState } from 'react';
import { RightOutlined,HomeOutlined } from '@ant-design/icons';
import type { MenuProps, MenuTheme } from 'antd';
import { Menu, Switch } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Buy', 'sub1',  null, [
        getItem('Option 1', '1'),
        getItem('Option 2', '2'),
        getItem('Option 3', '3'),
        getItem('Option 4', '4'),
    ]),

    getItem('Trade-in', 'sub2', null, [
        getItem('Option 5', '5'),
        getItem('Option 6', '6'),
        getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
    ]),

    getItem('Blog', 'sub4', null, [
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
        getItem('Option 11', '11'),
        getItem('Option 12', '12'),
    ]),
    getItem('Resource', 'res', null, [
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
        getItem('Option 11', '11'),
        getItem('Option 12', '12'),
    ]),
    getItem('About Us', 'us', null, [
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
        getItem('Option 11', '11'),
        getItem('Option 12', '12'),
    ]),
];

const App: React.FC = () => {
    const [theme, setTheme] = useState<MenuTheme>('dark');
    const [current, setCurrent] = useState('1');

    const changeTheme = (value: boolean) => {
        setTheme(value ? 'dark' : 'light');
    };

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
        <>

            <Menu
                theme={theme}
                onClick={onClick}
                defaultOpenKeys={['sub1']}
                selectedKeys={[current]}
                mode="horizontal"
                items={items}
            />
        </>
    );
};

export default App;
