import React, { FC } from 'react';
import Toggleable, { ToggleableComponentProps } from './Toggleable';
import { withToggleable } from './WithToggleableHOC';

interface MenuItemProps {title: string;}

const ToggleableA = Toggleable.ofType<MenuItemProps>();

const MenuItem: FC<MenuItemProps & ToggleableComponentProps> = ({title, show, toggle, children}) => (<>
  <div onClick={toggle}>
    <h1>{title}</h1>
  </div>

  {show ? children : null}
</>);

interface Props {
  title: string;
  show?: boolean;
}

const ToggleableMenu: FC<Props> = ({title, children, show}) => (
  <ToggleableA
    component={MenuItem}
    props={{title}}
    show={show}
  >
    {children}
  </ToggleableA>
);

const ToggleableMenuViaHoc = withToggleable(MenuItem);
