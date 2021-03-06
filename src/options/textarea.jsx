
const TextArea = ({ value, option, onChange }) => (
	<div className="rt-option-textarea">
		<textarea
			value={value}
			{...{
				...(option.field_attr ? option.field_attr : {}),
				...(option.attr && option.attr.placeholder
					? {
						placeholder: option.attr.placeholder
					}
					: {})
			}}
			onChange={({ target: { value } }) => onChange(value)}
		/>
	</div>
)

export default TextArea
