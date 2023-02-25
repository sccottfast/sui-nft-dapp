export interface Icon {
	score: number
	explain: string
}

export interface Mint {
	score: number
	explain: string
}

export interface Decription {
	score: number
	explain: string
}

export interface Issue {
	score: number
	explain: string
}

export interface LastUpdated {
	score: number
	explain: string
}

export interface BigHolders {
	score: number
	explain: string
}

export interface fiveBigHolders {
	score: number
	explain: string
}

export interface oneBigHolders {
	score: number
	explain: string
}

export interface Price2 {
	score: number
	explain: string
}

export interface Diff {
	score: number
	explain: string
}

export interface Liquidity {
	score: number
	explain: string
}

export interface CSupply {
	score: number
	explain: string
}

export interface PriceUsd {
	score: number
	explain: string
}

export interface Web {
	score: number
	explain: string
}

export interface BigHold {
	score: number
	explain: string
}

export interface Data {
	CMC: CMC
	CMC_Price: CMCPrice
	Name: Name
	Symbol: Symbol
	Decimal: Decimal
	Price: Price
	TxCount: TxCount
	ContractVerified: ContractVerified
	TSupply: TSupply
	Owner: Owner
	OwnerHold: OwnerHold
	holdersCount: HoldersCount
	icon: Icon
	mint: Mint
	decription: Decription
	issue: Issue
	lastUpdated: LastUpdated
	bigHolders: BigHolders
	fiveBigHolders: fiveBigHolders
	oneBigHolders: oneBigHolders
	price: Price2
	diff: Diff
	Liquidity: Liquidity
	CSupply: CSupply
	priceUsd: PriceUsd
	web: Web
	bigHold: BigHold
}

export interface TokenAddress {
	token_address: string
	chain: string
	name: string
	data: Data
	result: number
	classify: string
	risk_type: string[]
}

type Domain = {
	name: string
	status: boolean
}

export type RecommendedDapp = {
	dapp: Dapp
	suggested: string[]
}
export type Filter = {
	placeholder?: string
	className?: string
	token?: string
	symbol?: string
	address?: string
	tokens: TokenType[]
}
