import axios from 'axios';
import React, { useEffect } from 'react';
import Select from 'react-select';

interface OptionType {
  value: string;
  label: string;
}



interface Props {
  options: OptionType[];
  onChange: (selectedOption: OptionType | null) => void;
  defaultValue?: OptionType;
  placeholder?: string;
}

const CustomSelect: React.FC<Props> = ({ options, onChange, defaultValue, placeholder }) => {
  return (
    <Select
      options={options}
      onChange={onChange}
      defaultValue={defaultValue}
      placeholder={placeholder}
    />
  );
};

export default CustomSelect;
