import React, { useState } from 'react'
import PropTypes from 'prop-types'

PostFiltes.propTypes = {
	onSubmit: PropTypes.func
}
PostFiltes.defaultProps = {
	onSubmit: null
}
function PostFiltes(props: { onSubmit: any }) {
	const { onSubmit } = props
	const [searchTerm, setSearchTerm] = useState('')

	function handleSearchTermChange(e: { target: { value: React.SetStateAction<string> } }) {
		setSearchTerm(e.target.value)
		if (!onSubmit) return
		const formValues = {
			searchTerm: e.target.value
		}
		onSubmit(formValues)
	}
	return (
		<div className='rounded-md border-2'>
			<input
				placeholder='Enter DApp Name'
				width='w-full rounded-r-3xl'
				value={searchTerm}
				onChange={handleSearchTermChange}
			/>
		</div>
	)
}

export default PostFiltes
