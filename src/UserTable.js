import { Table } from 'antd';
import React from 'react';

const UserTable = ({ userDetails }) => {

  const columns = [
    {
      title: 'ID',
      dataIndex: 'userId',
      key: 'userId'
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Language',
      dataIndex: 'language',
      key: 'language',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    }
  ];

  return <Table columns={columns} dataSource={userDetails} rowKey="userId"/>;
};

export default UserTable;

