interface InputProps {
  register: any;
  errors: any;
  id: string;
  labelText: string;
  type: string;
  rules: object;
  placeholder: string;
}

const Input: React.FC<InputProps>= ({ register, errors, id, labelText, type, rules, placeholder }) => {
  return (
    <div className="z-20">
      <label htmlFor={id} className="text-white">
        {labelText} 
      </label>
      <input
        id={id}
        type={type}
        {...register(id, rules)}
        className="text-neutral-60 mt-1 w-full px-3 py-2 border border-[#ECECEC] rounded-md shadow-sm focus:outline-none focus:ring-primary-100 focus:border-primary-100"
        placeholder={placeholder}
      />
      <div className='text-primary-100'> 
        {errors?.[id] && (
          <div>{errors?.[id]?.message}</div>
        )}
      </div>
    </div>
  )
}

export default Input