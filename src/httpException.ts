export class HttpException extends Error {
	public status: any;
	public message: any;

	constructor(status: number, message: string) {
		super(message);
		this.status = status;
		this.message = message;
	}
}
