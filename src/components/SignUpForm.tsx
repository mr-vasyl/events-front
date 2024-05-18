import { useState, ChangeEvent, FormEvent } from 'react'
import { useMutation } from '@tanstack/react-query'
import { UserService } from '@/services/user.service'
import { useRouter } from 'next/navigation'
import { IUser } from '@/types/user.interface'
import styles from '@/styles/components/signUp.module.css'

const SignUpForm = ({ eventId }: any) => {
	const [formData, setFormData] = useState({
		eventId: +eventId,
		fullName: '',
		email: '',
		dateOfBirth: '',
		howDidYouHearAboutEvent: 'media'
	})
	const router = useRouter()

	const { mutate, isSuccess, isPending } = useMutation({
		mutationKey: ['add user event'],
		mutationFn: (data: Omit<IUser, 'id'>) => UserService.registerForEvent(data),
		onSuccess: () => {
			setFormData({
				eventId: +eventId,
				fullName: '',
				email: '',
				dateOfBirth: '',
				howDidYouHearAboutEvent: 'media'
			})
		},
		onError: error => {
			console.error('Error registering user:', error)
		}
	})

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target
		setFormData({
			...formData,
			[name]: value
		})
	}

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const formattedData = {
			...formData,
			dateOfBirth: new Date(formData.dateOfBirth).toISOString()
		}

		mutate(formattedData)
	}

	const handleGoHome = () => {
		router.push('/')
	}

	const validateForm = () => {
		return (
			formData.fullName.length >= 3 &&
			formData.email !== '' &&
			formData.dateOfBirth !== ''
		)
	}

	return (
		<div className={styles.wrapperForm}>
			<div className={styles['form-container']}>
				{isSuccess ? (
					<div className={styles.success}>
						<span>Success!!!</span>
						<button onClick={handleGoHome}>Go to Homepage</button>
					</div>
				) : (
					<form onSubmit={handleSubmit}>
						<div>
							<label>Full Name:</label>
							<input
								type='text'
								name='fullName'
								value={formData.fullName}
								onChange={handleChange}
								required
								style={{
									borderColor: formData.fullName.length < 3 ? 'red' : ''
								}}
							/>
						</div>
						<div>
							<label>Email:</label>
							<input
								type='email'
								name='email'
								value={formData.email}
								onChange={handleChange}
								required
								style={{
									borderColor: formData.email === '' ? 'red' : ''
								}}
							/>
						</div>
						<div>
							<label>Date of Birth:</label>
							<input
								type='date'
								name='dateOfBirth'
								value={formData.dateOfBirth}
								onChange={handleChange}
								required
								style={{
									borderColor: formData.dateOfBirth === '' ? 'red' : ''
								}}
							/>
						</div>
						<div>
							<label>How did you hear about the event?</label>
							<select
								name='howDidYouHearAboutEvent'
								value={formData.howDidYouHearAboutEvent}
								onChange={handleChange}
								required
							>
								<option value='media'>Media</option>
								<option value='social'>Social</option>
								<option value='google'>Google</option>
							</select>
						</div>
						<button type='submit' disabled={isPending || !validateForm()}>
							{isPending ? 'Registering...' : 'Register'}
						</button>
					</form>
				)}
			</div>
		</div>
	)
}

export default SignUpForm
