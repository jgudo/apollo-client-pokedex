import { SearchOutlined } from '@ant-design/icons';
import { Input, Row, Select } from "antd";
import { useState } from "react";

const Filters = () => {
  const [type, setType] = useState<string | undefined>(undefined);

  return (
    <Row align="middle" justify="center" wrap={false}>
      <Input
        placeholder="Search for a pokemon..."
        prefix={<SearchOutlined style={{ color: '#a1a1a1' }} />}
        style={{ width: 400 }}
      />
      <Select
        style={{ width: 200 }}
        placeholder="Pokemon Type"
        value={type}
        onChange={(val) => setType(val)}
      >
        <Select.Option value="normal">Normal</Select.Option>
        <Select.Option value="fire">Fire</Select.Option>
        <Select.Option value="water">Water</Select.Option>
        <Select.Option value="rock">Rock</Select.Option>
        <Select.Option value="electric">Electric</Select.Option>
        <Select.Option value="grass">Grass</Select.Option>
        <Select.Option value="poison">Poison</Select.Option>
        <Select.Option value="flying">Flying</Select.Option>
        <Select.Option value="ground">Ground</Select.Option>
        <Select.Option value="steel">Steel</Select.Option>
        <Select.Option value="ice">Ice</Select.Option>
        <Select.Option value="bug">Bug</Select.Option>
        <Select.Option value="fairy">Fairy</Select.Option>
      </Select>
    </Row>
  );
};

export default Filters;
