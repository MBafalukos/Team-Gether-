import { ReactNode } from 'react'

export type Service = {
	icon: ReactNode
	variant: string
	title: string
	description: string
}

export type Why = {
	icon: ReactNode
	description: string
}

export type PlanItem = {
	id: number
	name: string
	price: string
	duration: string
	features: Array<string>
	isRecommended: boolean
	isPopular?: boolean
}
