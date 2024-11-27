import { MailOutlined, SettingOutlined } from "@ant-design/icons";
import { Menu } from "antd";

const items = [
    {
        label: "Navigation One",
        key: "mail",
        icon: <MailOutlined />,
    },
    {
        label: "Navigation ",
        key: "SubMenu",
        icon: <SettingOutlined />,
        children: [
            {
                type: "group",
                label: "Item 1",
                children: [
                    {
                        label: "Option 1",
                        key: "setting:1",
                    },
                    {
                        label: "Option 2",
                        key: "setting:2",
                    },
                ],
            },
        ],
    },
];
const App = () => {
    return <Menu mode="horizontal" items={items} />;
};

export default App;
