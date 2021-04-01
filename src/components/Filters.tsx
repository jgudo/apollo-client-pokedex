import { SearchOutlined } from '@ant-design/icons';
import { useFilter } from '@app/provider/FilterProvider';
import { Input, Row, Select } from "antd";
import React, { useState } from "react";
import { useHistory, useLocation } from 'react-router-dom';

const Filters = () => {
  const { pathname } = useLocation();
  const history = useHistory();
  const { filter, changeFilter } = useFilter();
  const [search, setSearch] = useState('');

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.key === 'Enter') {
      history.push(`/pokemon?name=${search}`)
    }
  }

  return (
    <Row align="middle" justify="center" wrap={false}>
      <Input
        placeholder="Search for a pokemon..."
        prefix={<SearchOutlined style={{ color: '#a1a1a1' }} />}
        style={{ width: 400 }}
        onChange={e => setSearch(e.target.value)}
        onKeyDown={onKeyDown}
        value={search}
      />
      {pathname === '/' && (
        <Select
          style={{ width: 200 }}
          placeholder="Pokemon Type"
          value={filter.element}
          onChange={(val) => changeFilter('element', val)}
        >
          <Select.Option value="">All</Select.Option>
          <Select.Option value="Normal">Normal</Select.Option>
          <Select.Option value="Fire">Fire</Select.Option>
          <Select.Option value="Water">Water</Select.Option>
          <Select.Option value="Rock">Rock</Select.Option>
          <Select.Option value="Electric">Electric</Select.Option>
          <Select.Option value="Grass">Grass</Select.Option>
          <Select.Option value="Poison">Poison</Select.Option>
          <Select.Option value="Flying">Flying</Select.Option>
          <Select.Option value="Ground">Ground</Select.Option>
          <Select.Option value="Steel">Steel</Select.Option>
          <Select.Option value="Ice">Ice</Select.Option>
          <Select.Option value="Bug">Bug</Select.Option>
          <Select.Option value="Fairy">Fairy</Select.Option>
          <Select.Option value="Dragon">Dragon</Select.Option>
          <Select.Option value="Psychic">Psychic</Select.Option>
          <Select.Option value="Ghost">Ghost</Select.Option>
          <Select.Option value="Dark">Dark</Select.Option>
          <Select.Option value="Fighting">Fighting</Select.Option>
        </Select>
      )}
    </Row>
  );
};

export default Filters;
