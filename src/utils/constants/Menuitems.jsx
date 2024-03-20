import {
  SettingFilled,
  HomeFilled,
  UserOutlined,
  CodepenCircleOutlined,
  FileTextFilled
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
    label: 'Manage Actors',
    to: '/manageactor',
  },
  {
    key: '3',
    icon: <CodepenCircleOutlined />,
    label: 'Manage Modules',
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
        label: 'Manage Bot',
        to: '/managebot/createbot',
      }

    ]
  },
  {
    key: '5',
    icon: <FileTextFilled />,
    label: 'Manage Report',
    
  },
  
];