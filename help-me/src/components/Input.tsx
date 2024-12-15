type InputProps = {
  type: string;
  id: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

function Input({ type, id, value, onChange, placeholder }: InputProps) {
  return (
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-4 py-2 border border-text-400 bg-background-100 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-background-100"
    />
  );
}

export default Input;
