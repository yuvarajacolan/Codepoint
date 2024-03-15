import {
  SettingFilled,
  HomeFilled,
  UserOutlined,
  CodepenCircleOutlined
} from '@ant-design/icons';


export const menuItems = [
  {
    key: '1',
    icon: <HomeFilled />,
    label: 'Dashboard',
    to: '/dashboard',
  },
  {
    key: '2',
    icon: <UserOutlined />,
    label: 'Manage Actor',
    to: '/manageactor',
  },
  {
    key: '3',
    icon: <CodepenCircleOutlined />,
    label: 'Manage Module',
    to: '/managemodule',
  },
  {
    key: '4',
    icon: <SettingFilled />,
    label: 'Manage Bot',
    to: '/managebot',
    children: [
      {
        key: '4',
        label: 'Create Bot',
        to: '/managebot/createbot',
      }

    ]
  },
];