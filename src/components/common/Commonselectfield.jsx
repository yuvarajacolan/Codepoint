import { Row, Col, Select } from 'antd';

const Commonselectfield = ({label, value, options, placeholdertext}) => {

  return (
   
<>
      <div style={{ marginBottom: 8 }}>
        <label>{label}</label>
      </div>
      <Select style={{width:"100%"}}  value={value} placeholder={placeholdertext} className="custom-select" >
          {options?.map((option) => (
            <Select.Option key={option.value} value={option.value}>
              {option.label}
            </Select.Option>
          ))}
        </Select>
        </>
  );
};

export default Commonselectfield;