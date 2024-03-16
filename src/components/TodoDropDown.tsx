import { Dropdown, MenuProps } from "antd";
import { ReactNode } from "react";

const TodoDropDown = ({ children, items }: { children: ReactNode; items: MenuProps["items"] }) => {
  return (
    <Dropdown trigger={["click"]} menu={{ items }}>
      {children}
    </Dropdown>
  );
};

export default TodoDropDown;
