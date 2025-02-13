class SetError extends Error {
  status: number;

  constructor(status: number, message?: string) {
    super(message);
    this.status = status;
    Object.setPrototypeOf(this, SetError.prototype); // Esto restaura el prototipo correcto para asegurar instanceof
  }
}

export const CustomError = (status: number, message: string): SetError => {
  return new SetError(status, message);
};
