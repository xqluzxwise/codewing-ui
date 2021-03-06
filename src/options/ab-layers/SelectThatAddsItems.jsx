import { useContext } from 'react'
import { itemsThatAreNotAdded, LayersContext } from '../ab-layers'
import Select from '../ab-select'

const SelectThatAddsItems = ({ value, option }) => {
	const notAddedItems = itemsThatAreNotAdded(value, option)

	const {
		currentlyPickedItem,
		setCurrentItem,
		addCurrentlySelectedItem,
	} = useContext(LayersContext)

	if (notAddedItems.length <= 0) {
		return null
	}

	return (
		<div className="ct-add-layer-controls">
			<Select
				onChange={(currentlyPickedItem) =>
					setCurrentItem(currentlyPickedItem)
				}
				option={{
					choices: notAddedItems.map((key) => ({
						key,
						value: (
							option.settings[key] || {
								label: key,
							}
						).label,
					})),
					...(option.selectOption || {}),
				}}
				value={currentlyPickedItem || notAddedItems[0]}
			/>

			<button
				type="button"
				className="button"
				onClick={() => addCurrentlySelectedItem()}>
				Add
			</button>
		</div>
	)
}

export default SelectThatAddsItems
