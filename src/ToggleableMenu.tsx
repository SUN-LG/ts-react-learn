import React, { FC } from 'react';
import Toggleable, { ToggleableComponentProps } from './Toggleable';

interface MenuItemProps {title: string; }

const ToggleableA = Toggleable.ofType<MenuItemProps>();

const MenuItem: FC<MenuItemProps & ToggleableComponentProps> = ({title, show, toggle, children}) => (<>
  <div onClick={toggle}>
    <h1>{title}</h1>
  </div>

  {show ? children : null}
</>);

interface Props {
  title: string;
}

const ToggleableMenu: FC<Props> = ({title, children}) => (
  <ToggleableA
    component={MenuItem}
    props={{title, aa: 'aaa'}}
  >
    {children}
  </ToggleableA>
);
