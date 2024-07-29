import Button from './UI/Button'
import Input from './UI/Input'
import { makeTransfer } from '../http'

export default function Transfer({ closeTransfer }) {
	function handleSubmit(e) {
		e.preventDefault()
		const fd = new FormData(e.target)
		const data = Object.fromEntries(fd.entries())
		// 9232392932193952
		// 9232393333193952
		console.log(data)

		async function fetchUser() {
			console.log('test')
			try {
				const user = await makeTransfer(data)
				console.log(user)
			} catch (error) {
				console.log('chuj')
				console.log(error)
			}
		}
		fetchUser()
	}

	return (
		<form onSubmit={handleSubmit}>
			<Input
				type=''
				name='title'
				placeholder='tytuł'
			/>
			<Input
				name='amount'
				type=''
				placeholder='kwota'
			/>
			<Input
				name='accountToId'
				type=''
				placeholder='do'
			/>
			<Input
				name='accountFromId'
				type=''
				placeholder='z'
			/>
			<Button
				onClick={closeTransfer}
				className='flex flex-row justify-between'>
				Zamknij
			</Button>
			<Button>Przelej</Button>
		</form>
	)
}
