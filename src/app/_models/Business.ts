export interface Business {
	$key?: string;
	name?: string;
	company?: string;
	description?: string;
	category: string;
	known_from?: string;
	street_address?: string;
	city: string;
	state?: string;
	zipcode?: string;
	phone?: string;
	email?: string;
	created_at: string;
	id: number;
}